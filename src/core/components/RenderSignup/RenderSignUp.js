import React from "react";
import Recrutier from "app/images/svgs/recrutier";
import Candidate from "app/images/svgs/Candidate";
import { SvgContainer } from "app/themes/GlobalStyles";
import CustomInput from "../CustomInput/CustomInput";
import * as Styled from "./RenderSignUp.styled";
const RenderSignUp = (props) => {
  return (
    <Styled.Container>
      <Styled.FormContainer onSubmit={props.handleFormSubmit}>
        <Styled.Heading>Signup</Styled.Heading>
        {/* <Styled.Identity>
          <Styled.IdentityTile selected={true}>
            <SvgContainer>
              <Recrutier />
            </SvgContainer>
            Recruiter
          </Styled.IdentityTile>
          <Styled.IdentityTile blocked={true}>
            <SvgContainer>
              <Candidate />
            </SvgContainer>
            Candidate
          </Styled.IdentityTile>
        </Styled.Identity> */}
        <Styled.InputContainer>
          <CustomInput
            type={"text"}
            label={"Full Name"}
            onChange={(fullName) => props.setParentState({ fullName })}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <CustomInput
            type={"email"}
            label={"Email address"}
            onChange={(email) => props.setParentState({ email })}
          />
        </Styled.InputContainer>
        <Styled.FormRow>
          <CustomInput
            type={"password"}
            label={"Create Password"}
            onChange={(password) => props.setParentState({ password })}
          />

          <CustomInput
            type={"password"}
            label={"Confirm Password"}
            onChange={(confirmPassword) =>
              props.setParentState({ confirmPassword })
            }
          />
        </Styled.FormRow>
        <Styled.InputContainer>
          <CustomInput
            type={"text"}
            label={"Skills"}
            onChange={(skills) => props.setParentState({ skills })}
          />
        </Styled.InputContainer>
        <Styled.LoginBtn type={"submit"}>SignUp</Styled.LoginBtn>
        <Styled.SignUpText>
          Have an account?{" "}
          <span onClick={props.handleNavigationToLogin}>Login</span>
        </Styled.SignUpText>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default RenderSignUp;
