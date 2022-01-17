import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import ImageView from "../ImageView/ImageView";
import * as Styled from "./RenderApplicantsOverlay.styled";

const RenderApplicantsOverlay = (props) => {
  return (
    <Styled.Container>
      <Styled.ApplicantsContainer>
        <Styled.CloseIconContainer
          onClick={() =>
            props.setMasterState({
              isApplicantsOverLayVisible: false,
              currentSelectedJob: {},
            })
          }
        >
          <ImageView
            src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
            imageStyles={Styled.CloseIconStyles}
          />
        </Styled.CloseIconContainer>
        <Styled.Heading>Applicants for this job</Styled.Heading>
        <Styled.TotalCountContainer>
          {(props.noCandidatesFound && "0 applications") ||
            "Total 35 applicants"}
        </Styled.TotalCountContainer>
        {(props.noCandidatesFound && (
          <Styled.NoCandidatesFoundContainer>
            <Styled.NoCandidatesContent>
              <ImageView
                src={Styled.noJobsImageUrl}
                imageStyles={Styled.noJobsImageStyles}
              />
              <div>No Applications Available</div>
            </Styled.NoCandidatesContent>
          </Styled.NoCandidatesFoundContainer>
        )) || (
          <Styled.ApplicantsListContainer>
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
          </Styled.ApplicantsListContainer>
        )}
      </Styled.ApplicantsContainer>
    </Styled.Container>
  );
};

export default RenderApplicantsOverlay;
