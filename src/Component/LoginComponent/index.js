/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { login } from '../../api/auth';
// import logo from '../../assests/images/logo.png';

toast.configure();

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [showPasword, setShowPassword] = useState(false);

  const handleResponse = (status, message) => {
    setLoading(false);
    if (status) {
      toast.success(message);

      history.push('/dashboard');
    } else {
      toast.error(message);
    }
  };
  const handleSubmit = (fields) => {
    setLoading(true);
    dispatch(login(fields.email, fields.password, handleResponse));
  };

  return (
    <>
      <div className="middle-inner">
        <div className="authentication-box">
          <div className="authentication-box-inner">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-9">
                  <div className="content-box">
                    <div className="login-header">
                      {/* <Link to="#">
                        <img src={logo} className="login-logo" alt="" />
                      </Link> */}
                    </div>

                    <div className="login-body">
                      <div className="title">
                        <h3>Sign In</h3>
                      </div>
                      <Formik
                        initialValues={{
                          email: '',
                          password: '',
                        }}
                        validationSchema={Yup.object().shape({
                          email: Yup.string()
                            .trim()
                            .strict(false)
                            // .email('Email is invalid')
                            .required('Email/Phone Number is required'),

                          password: Yup.string()
                            .trim()
                            .strict(false)
                            .min(6, 'Password must be at least 6 characters')
                            .required('Password is required'),
                        })}
                        onSubmit={(fields) => {
                          handleSubmit(fields);
                        }}
                      >
                        {() => (
                          <Form>
                            {/* <form> */}
                            <div className="form-group  focus-none">
                              <label htmlFor="email">Email/Phone Number</label>
                              <div className="input-group">
                                <Field
                                  type="text"
                                  name="email"
                                  id="email"
                                  placeholder="Enter email or Phone No"
                                  className="form-control"
                                />

                                <div className="input-group-addon">
                                  <Link to="#">
                                    <i className="fe fe-mail" />
                                  </Link>
                                </div>
                              </div>
                              <ErrorMessage name="email" component="span" className="error" />
                            </div>

                            <div className="form-group  focus-none">
                              <label htmlFor="password">Password</label>
                              <div className="input-group">
                                <Field
                                  type={showPasword ? 'text' : 'password'}
                                  name="password"
                                  id="password"
                                  placeholder="Enter password"
                                  className="form-control"
                                  autoComplete="off"
                                />

                                <div className="input-group-addon">
                                  <Link onClick={() => setShowPassword(!showPasword)} to="#">
                                    <span className="material-icons">visibility_off</span>
                                  </Link>
                                </div>
                              </div>
                              <ErrorMessage name="password" component="span" className="error" />
                            </div>

                            <div className="form-group forgot-pass">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                  name="example1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck">
                                  Remember me
                                </label>
                              </div>

                              {/* <Link to="#" className="forgot-link">
                                Forgot password?
                              </Link> */}
                            </div>

                            <div className="login-action">
                              <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary btn-100 login-btn"
                              >
                                Sign in
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
