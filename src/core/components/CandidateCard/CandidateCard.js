import React from "react";
import * as Styled from "./CandidateCard.styled";

const CandidateCard = () => {
  return (
    <Styled.Container>
      <Styled.TopContainer>
        <Styled.ProfileContainer>E</Styled.ProfileContainer>
        <Styled.NameAndEmailContainer>
          <Styled.NameContainer>Eliza lucas</Styled.NameContainer>
          <Styled.EmailContainer>abc@1234.com</Styled.EmailContainer>
        </Styled.NameAndEmailContainer>
      </Styled.TopContainer>
      <Styled.BottomContainer>
        <Styled.SubHeading>Skills</Styled.SubHeading>
        <Styled.SkillsContainer>
          Coding, Designing, graphics, websites
        </Styled.SkillsContainer>
      </Styled.BottomContainer>
    </Styled.Container>
  );
};

export default CandidateCard;
