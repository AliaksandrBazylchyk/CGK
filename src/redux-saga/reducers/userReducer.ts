import { Reducer } from 'redux';

import {
  USER_AUTH,
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,

  USER_DEAUTH,
  USER_DEAUTH_REQUIRE,
  
  USER_FAILURE,
} from '../actions/userActions';

import { UserAuthActions, UserInfo } from '../types/userTypes';

interface InitialState extends UserInfo {
  error: boolean,
  pending: boolean,
}

const initialState: InitialState = {
  error: false,
  pending: false,
  id: 0,
  name: '',
  image: '',
};

const userReducer: Reducer<InitialState, UserAuthActions> = (
  state = initialState,
  action: UserAuthActions,
) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        pending: false,
      };

    case USER_AUTH_REQUIRE:
      return {
        ...state,
        pending: true,
      };
      
    case USER_AUTO_AUTH_REQUIRE:
      return {
        ...state,
        pending: true
      };

    case USER_DEAUTH:
      return {
        ...state,
        id: 0,
        name: '',
        image: '',
      };
    case USER_DEAUTH_REQUIRE:
      return {
        ...state,
        pending: true,
      };

    case USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
      
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;