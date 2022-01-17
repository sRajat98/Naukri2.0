import React from "react";
import * as Styled from "./JobTile.styled";

const JobTile = (props) => {
  const { jobDetails } = props;
  return (
    <Styled.Container>
      <Styled.Heading>{jobDetails.title}</Styled.Heading>
      <Styled.Details>{jobDetails.description}</Styled.Details>
      <Styled.BottomContainer>
        <Styled.LocationContainer>
          {jobDetails.location}
        </Styled.LocationContainer>
        <Styled.ViewApplicationsBtn onClick={props.openApplicantsList}>
          View Application
        </Styled.ViewApplicationsBtn>
      </Styled.BottomContainer>
    </Styled.Container>
  );
};

export default JobTile;
