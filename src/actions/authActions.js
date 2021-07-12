import * as types from './actiontypes';

// eslint-disable-next-line import/prefer-default-export
export const setUserInfo = (data) => ({
  type: types.SET_USER_INFO,
  payload: { data },
});
