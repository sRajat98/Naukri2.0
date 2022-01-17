import React from "react";
import { Routes as RoutePath } from "Routes/Routepath";
import Logo from "../Logo/Logo";
import * as Styled from "./RenderHeader.styled";

const RenderHeader = (props) => {
  return (
    <Styled.Container>
      <Styled.NavContainer>
        <Styled.LogoContainer
          onClick={() => props.handleNavigation(RoutePath.root)}
        >
          <Logo />
        </Styled.LogoContainer>
        {(props.isLoginBtnVisible && (
          <Styled.LoginBtnContainer
            onClick={() => props.handleNavigation(RoutePath.login)}
          >
            Login/Signup
          </Styled.LoginBtnContainer>
        )) ||
          (!props.isCurrentPageLogin && (
            <Styled.RightContainer>
              <Styled.PostJobBtn
                onClick={() =>
                  props.handleNavigation(RoutePath.home + RoutePath.postJob)
                }
              >
                Post a Job
              </Styled.PostJobBtn>
              <Styled.ProfileContainer
                onClick={() =>
                  props.setParentState({
                    isLogoutVisible: !props.isLogoutVisible,
                  })
                }
              >
                E
                {props.isLogoutVisible && (
                  <Styled.LogoutContainer onClick={props.handleLogout}>
                    Logout
                  </Styled.LogoutContainer>
                )}
              </Styled.ProfileContainer>
            </Styled.RightContainer>
          ))}
      </Styled.NavContainer>
    </Styled.Container>
  );
};

export default RenderHeader;
