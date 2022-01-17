import React, { useState, useEffect } from "react";
import RenderHeader from "core/components/RenderHeader/RenderHeader";
import { Routes as RoutePath } from "Routes/Routepath";
import { useNavigate } from "react-router-dom";
import { checkWindowLocation } from "utils/Constants/Constants";

const Header = () => {
  const [state, updateState] = useState({
    isLoginBtnVisible: false,
    isCurrentPageLogin: false,
    isLogoutVisible: false,
  });
  const setState = (value) => updateState({ ...state, ...value });
  const navigate = useNavigate();

  useEffect(() => {
    if (checkWindowLocation(RoutePath.root)) {
      return setState({ isLoginBtnVisible: true });
    }
    if (
      checkWindowLocation(RoutePath.login) ||
      checkWindowLocation(RoutePath.signUp)
    ) {
      return setState({ isCurrentPageLogin: true });
    }
    return setState({ isLoginBtnVisible: false, isCurrentPageLogin: false });
  }, [window.location.pathname]);

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("SquareBoatsToken");
    window.localStorage.removeItem("SquareBoatsUserDetails");
    handleNavigation(RoutePath.root);
  };

  return (
    <RenderHeader
      setParentState={setState}
      handleNavigation={handleNavigation}
      isLoginBtnVisible={state.isLoginBtnVisible}
      isCurrentPageLogin={state.isCurrentPageLogin}
      isLogoutVisible={state.isLogoutVisible}
      handleLogout={handleLogout}
    />
  );
};

export default Header;
