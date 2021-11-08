using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }

                return builder.ToString();
            }
        }

        [HttpPost("login")]
        public dynamic Post([FromBody] UserLoginScheme authLogin)
        {
            using var context = new UsersInfoContext();
            var connection = new SqliteConnection(@"Data Source=CGK.db;");
            var identity = GetIdentity(authLogin);
            try
            {
                connection.Open();
                using (connection)
                {
                    var password = ComputeSha256Hash(authLogin.Password);
                    SqliteCommand cmd = new SqliteCommand("Select * from Users", connection);
                    cmd.Connection = connection;
                    SqliteDataReader dataReader = cmd.ExecuteReader();
                    if (dataReader == null) return null;
                    while (dataReader.Read())
                    {
                        if (Convert.ToString(dataReader["Nickname"]) == authLogin.Nickname)
                        {
                            if (Convert.ToString(dataReader["Password"]) == password)
                            {
                                var now = DateTime.UtcNow;
                                var jwt = new JwtSecurityToken(
                                    issuer: AuthOptions.ISSUER,
                                    audience: AuthOptions.AUDIENCE,
                                    notBefore: now,
                                    claims: identity.Claims,
                                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                                var response = new
                                {
                                    access_token = encodedJwt,
                                    username = authLogin.Nickname
                                };
                                string insertTokenCmd = $"UPDATE Users SET Token='{encodedJwt}' WHERE Nickname='{authLogin.Nickname}'";
                                SqliteCommand insertCmd = new SqliteCommand(insertTokenCmd, connection);
                                insertCmd.ExecuteNonQuery();
                                return JsonSerializer.Serialize<object>(response);
                            }
                            else
                            {
                                return "Wrong login or password";
                            }
                        }
                    }

                    dataReader.Close();
                }
            }
            catch (SqliteException ex)
            {
                return ex.SqliteExtendedErrorCode;
            }
            finally
            {
                connection.Close();
            }

            return "User doesn't exist";
        }
        

        private ClaimsIdentity GetIdentity([FromBody] UserLoginScheme authLogin)
        {
            var user = authLogin;
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Nickname),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, DateTime.Now.ToShortTimeString())
                };
                ClaimsIdentity claimsIdentity =
                    new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                        ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }
            
            return null;
        }
        
    }
}