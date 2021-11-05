import {
  UserAuth,
  UserAuthRequire,
  UserAutoAuthRequire,

  UserDeauth,
  UserDeauthRequire,

  UserFailure,

  AuthDates,
  Tokens,
  UserInfoTaked,
} from '../types/userTypes';

export const USER_AUTH = 'USER_AUTH';
export const USER_AUTH_REQUIRE = 'USER_AUTH_REQUIRE';
export const USER_AUTO_AUTH_REQUIRE = 'USER_AUTO_AUTH_REQUIRE';

export const USER_DEAUTH = 'USER_DEAUTH';
export const USER_DEAUTH_REQUIRE = 'USER_DEAUTH_REQUIRE';

export const USER_FAILURE = 'USER_AUTH_FAILURE';

export const userAuth = (
  payload: UserInfoTaked
): UserAuth => ({
  type: USER_AUTH,
  payload,
});
export const userAuthRequire = (
  payload: AuthDates
): UserAuthRequire => ({
  type: USER_AUTH_REQUIRE,
  payload,
})

export const userAutoAuthRequire = (
  payload: Tokens
): UserAutoAuthRequire => ({
  type: USER_AUTO_AUTH_REQUIRE,
  payload,
})

export const userDeauth = (): UserDeauth => ({
  type: USER_DEAUTH,
});
export const userDeauthRequire = (): UserDeauthRequire => ({
  type: USER_DEAUTH_REQUIRE,
});

export const userFailure = (
  payload: {error: boolean},
): UserFailure => ({
  type: USER_FAILURE,
  payload,
});