import React from "react";
import introImage from "app/images/introIcon.jpg";
import WhyUs from "./WhyUs/WhyUs";
import ImageView from "../ImageView/ImageView";
import * as Styled from "./RenderLandinPage.styled";
import Logo from "../Logo/Logo";

const RenderLandinPage = (props) => {
  return (
    <Styled.Container>
      <Styled.IntroContainer>
        <Styled.LeftContainer>
          <div>Welcome to</div>
          <Logo fontSize={Styled.logoFontSize} />
          <Styled.GetStartedBtn onClick={props.handleNavigationToSignup}>
            Get Started
          </Styled.GetStartedBtn>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <ImageView
            src={introImage}
            alt="Intro"
            imageStyles={Styled.imageStyles}
          />
        </Styled.RightContainer>
      </Styled.IntroContainer>
      <WhyUs />
    </Styled.Container>
  );
};

export default RenderLandinPage;
