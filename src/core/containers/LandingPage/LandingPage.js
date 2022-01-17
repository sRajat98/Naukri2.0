import React from "react";
import { Routes as RoutePath } from "Routes/Routepath";
import RenderLandingPage from "core/components/RenderLandingPage/RenderLandingPage";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigationToSignup = () => {
    navigate(RoutePath.signUp);
  };
  return (
    <RenderLandingPage handleNavigationToSignup={handleNavigationToSignup} />
  );
};

export default LandingPage;
