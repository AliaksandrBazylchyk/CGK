using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    public class AuthOptions
    {
        public const string ISSUER = "CHGK";
        public const string AUDIENCE = "User_client";
        const string KEY = "crypto_saved_all_account_for_my_backend";
        public const int LIFETIME = 43800;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}