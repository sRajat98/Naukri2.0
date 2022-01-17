import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes as RoutePath } from "Routes/Routepath";
import * as actionCreators from "app/redux/actions/loginActions";
import RenderLogin from "core/components/LoginOverLay/RenderLogin";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.login);
  const [state, updateState] = useState({ email: "", password: "" });

  const setState = (value) => updateState({ ...state, ...value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email: state.email, password: state.password };
    dispatch(actionCreators.login(requestBody));
  };

  const handleNavigationToSignup = () => {
    navigate(RoutePath.signUp);
  };

  useEffect(() => {
    if (loginState.isSubmitLoginSuccess) {
      navigate(RoutePath.home);
      dispatch(actionCreators.resetLoginSuccess());
    }
  }, [loginState.isSubmitLoginSuccess]);

  return (
    <RenderLogin
      setParentState={setState}
      handleFormSubmit={handleFormSubmit}
      handleNavigationToSignup={handleNavigationToSignup}
    />
  );
};

export default Login;
