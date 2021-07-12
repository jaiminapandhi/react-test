import * as types from '../actions/actiontypes';

const initialState = {
  authUserInfo: [],
  
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {
        ...state,
        authUserInfo: action.payload,
      };
   

    default:
      return state;
  }
};
export default authReducer;
