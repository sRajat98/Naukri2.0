import React from "react";
import Home from "app/images/svgs/Home";
import * as Styled from "./RenderHomePage.styled";
import { SvgContainer } from "app/themes/GlobalStyles";
import JobTile from "../JobTile/JobTile";
import ImageView from "../ImageView/ImageView";

const RenderHomePage = (props) => {
  return (
    <Styled.Container>
      <Styled.NavContainer>
        <SvgContainer svgStyles={Styled.svgContainerStyles}>
          <Home /> Home
        </SvgContainer>
      </Styled.NavContainer>
      <Styled.PostedJobsContainer>
        <Styled.Heading>Jobs Posted By You</Styled.Heading>
        {(props.homeState &&
          props.homeState.recruiterJobs &&
          props.homeState.recruiterJobs.data &&
          Array.isArray(props.homeState.recruiterJobs.data) &&
          props.homeState.recruiterJobs.data.length && (
            <Styled.JobTilesContainer>
              <Styled.JobTilesContainer>
                {props.homeState.recruiterJobs.data.map((job, index) => (
                  <JobTile
                    key={index}
                    jobDetails={job}
                    openApplicantsList={() =>
                      props.setParentState({
                        isApplicantsOverLayVisible: true,
                        currentSelectedJob: job,
                      })
                    }
                  />
                ))}
              </Styled.JobTilesContainer>
            </Styled.JobTilesContainer>
          )) || (
          <Styled.NoJobsContainer>
            <Styled.NoJobsDataContainer>
              <ImageView
                src={Styled.noJobsImageUrl}
                imageStyles={Styled.noJobsImageStyles}
              />
              <Styled.NoJobsText>
                Your posted jobs will show here!
              </Styled.NoJobsText>
              <Styled.PostJobBtn onClick={props.navigateToPostJobs}>
                Post a Job
              </Styled.PostJobBtn>
            </Styled.NoJobsDataContainer>
          </Styled.NoJobsContainer>
        )}
      </Styled.PostedJobsContainer>
    </Styled.Container>
  );
};

export default RenderHomePage;
