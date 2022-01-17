import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import * as Styled from "./RenderPostJob.styled";

const RenderPostJob = (props) => {
  return (
    <Styled.Container>
      <Styled.PostJobContainer onSubmit={props.handleFormSubmit}>
        <Styled.Heading>Post a Job</Styled.Heading>
        <Styled.InputContainer>
          <CustomInput
            label="Job Title"
            value={props.jobTitle}
            onChange={(jobTitle) => props.setParentState({ jobTitle })}
          />
        </Styled.InputContainer>
        <Styled.Label>Description</Styled.Label>
        <Styled.Description
          placeholder="Enter Description"
          value={props.description}
          onChange={(e) =>
            props.setParentState({ description: e.target.value })
          }
        />
        <Styled.InputContainer>
          <CustomInput
            label="Location"
            value={props.location}
            onChange={(location) => props.setParentState({ location })}
          />
        </Styled.InputContainer>
        <Styled.PostBtn type="submit">Post</Styled.PostBtn>
      </Styled.PostJobContainer>
    </Styled.Container>
  );
};

export default RenderPostJob;
