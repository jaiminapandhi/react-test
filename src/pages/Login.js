/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import LoginComponent from '../Component/LoginComponent';

const Login = () => {
  const auth = useSelector((state) => state.auth.authUserInfo);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      history.push('/dashboard');
    }
  }, [auth]);
  return (
    <>
      <main role="main" className="flex-shrink-0 middle-section middle-authentication mt-0 ">
        <LoginComponent />
      </main>
    </>
  );
};

export default Login;
