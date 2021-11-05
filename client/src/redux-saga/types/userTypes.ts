import {
  USER_AUTH,
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,

  USER_DEAUTH,
  USER_DEAUTH_REQUIRE,

  USER_FAILURE,
} from "../actions/userActions";

export interface UserAuthDates {
  login: string,
  password: string,
}
export interface UserInfo {
  id: number,
  name: string,
  image: string, 
}
export interface Tokens {
  acsessToken: string,
  refreshToken: string,
}
export interface AuthDates {
  dates: UserAuthDates,
  typeForm: string,
}
export interface UserInfoTaked extends UserInfo, Tokens {}

export interface UserAuth {
  type: typeof USER_AUTH,
  payload: UserInfoTaked,
}
export interface UserAuthRequire {
  type: typeof USER_AUTH_REQUIRE,
  payload: AuthDates,
}
export interface UserAutoAuthRequire {
  type: typeof USER_AUTO_AUTH_REQUIRE,
  payload: Tokens,
}

export interface UserDeauth {
  type: typeof USER_DEAUTH;
}
export interface UserDeauthRequire {
  type: typeof USER_DEAUTH_REQUIRE;
}

export interface UserFailure {
  type: typeof USER_FAILURE,
  payload: {error: boolean},
}

export type UserAuthActions =
| UserAuth
| UserAuthRequire
| UserAutoAuthRequire
| UserDeauth
| UserDeauthRequire
| UserFailure;

