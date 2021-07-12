/* eslint-disable import/prefer-default-export */
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { setAuthUserInfo } from '../Actions/authUserAction';
import { setUserInfo } from '../actions/authActions';
import { post } from '../network/requests';
import { getUrl } from '../network/url';
// import Strings from '../Constants/errorcode';

export const login = (email, password, handleLoginResponse) => async (dispatch) => {
  const url = getUrl('login');
  const loginData = JSON.stringify({
    sLogin: email,
    sPassword: password,
  });
  await post(url, loginData, false)
    .then((res) => {
      if (res) {
        const {
          data: {
            status, data, message, Authorization,
          },
        } = res;
        if (status === 200) {
          localStorage.setItem('jwt', Authorization);
          localStorage.setItem('data', JSON.stringify(data));
          dispatch(setUserInfo(data));
          handleLoginResponse(true, message);
        } else if (status === 400) {
          handleLoginResponse(false, message);
        } else {
          handleLoginResponse(false, message);
        }
      }
    })
    .catch((err) => {
      handleLoginResponse(false, err.message);
    });
};
