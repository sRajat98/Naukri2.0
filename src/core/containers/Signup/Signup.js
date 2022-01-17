import React, { useState } from "react";
import RenderSignUp from "core/components/RenderSignup/RenderSignUp";
import { Routes as RoutePath } from "Routes/Routepath";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionCreators from "app/redux/actions/loginActions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, updateState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: "",
  });

  const setState = (value) => updateState({ ...state, ...value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword,
      name: state.fullName,
      skills: state.skills,
      userRole: 0,
    };
    dispatch(actionCreators.signUp(requestBody));
  };

  const handleNavigationToLogin = () => {
    navigate(RoutePath.login);
  };

  return (
    <RenderSignUp
      setParentState={setState}
      handleFormSubmit={handleFormSubmit}
      handleNavigationToLogin={handleNavigationToLogin}
    />
  );
};

export default Signup;
