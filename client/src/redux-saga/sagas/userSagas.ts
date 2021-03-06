import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import axios, { AxiosResponse } from 'axios';

import {
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,
  USER_DEAUTH,

  userFailure,
  userAuth,
  userDeauth,
} from '../actions/userActions';

import {
  UserAuthRequire,
  UserAutoAuthRequire,

  UserInfoTaked,
} from '../types/userTypes';

function* hendAuthSaga(action: UserAuthRequire) {
  try {
    const { dates, typeForm } = action.payload;
    const authorization = () => axios.post(`http://localhost:3001/accounts/auth/${typeForm}`,
      { ...dates });
    const response: AxiosResponse<UserInfoTaked> = yield call(authorization);
    yield authSaga({...response.data});
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* autoAuthSaga(action: UserAutoAuthRequire) {
  try {
    const { token } = action.payload;
    const headers = {authorization: `Bearer ${token}`} 
    const authorization = () => axios.post('http://localhost:3001/accounts/auth/auto', {},
      { headers: headers });
    const response: AxiosResponse<UserInfoTaked> = yield call(authorization);
    yield authSaga({...response.data});
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* authSaga(dates: UserInfoTaked) {
  try {
    yield put(userAuth({...dates}));
    localStorage.setItem('token', dates.token);
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* deuthSaga() {
  try {
    yield put(userDeauth());
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* userSagas() {
  yield all([
    takeLatest(USER_AUTH_REQUIRE, hendAuthSaga),
    takeLatest(USER_AUTO_AUTH_REQUIRE, autoAuthSaga),
    takeLatest(USER_DEAUTH, deuthSaga),
  ]);
}

export default userSagas;