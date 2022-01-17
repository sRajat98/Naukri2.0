import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import * as Styled from "./RenderLogin.styled";

const RenderLogin = (props) => {
  return (
    <Styled.Container>
      <Styled.FormContainer onSubmit={props.handleFormSubmit}>
        <Styled.Heading>Login</Styled.Heading>
        <Styled.InputContainer>
          <CustomInput
            type={"email"}
            label={"Email address"}
            onChange={(email) => props.setParentState({ email })}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <CustomInput
            type={"password"}
            label={"Password"}
            onChange={(password) => props.setParentState({ password })}
          />
        </Styled.InputContainer>
        <Styled.LoginBtn type={"submit"}>Login</Styled.LoginBtn>
        <Styled.SignUpText>
          New to MyJobs?
          <span onClick={props.handleNavigationToSignup}>Create an acount</span>
        </Styled.SignUpText>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default RenderLogin;
