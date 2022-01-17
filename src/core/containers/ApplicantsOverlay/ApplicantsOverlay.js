import React, { useEffect, useState } from "react";
import * as actionCreators from "app/redux/actions/HomePageActions";
import { useDispatch, useSelector } from "react-redux";
import RenderApplicantsOverlay from "core/components/RenderApplicantsOverlay/RenderApplicantsOverlay";

const ApplicantsOverlay = (props) => {
  const dispatch = useDispatch();
  const {
    areJobCandidatesLoading,
    areJobCandidatesFailure,
    jobCandidateError,
    jobCandidates,
  } = useSelector((state) => state.home);

  const [state, updateState] = useState({ noCandidatesFound: false });
  const setState = (value) => updateState({ ...state, ...value });

  useEffect(() => {
    dispatch(
      actionCreators.getCurrentJobCandidates(props.currentSelectedJob.id)
    );
  }, []);

  useEffect(() => {
    if (
      areJobCandidatesFailure &&
      jobCandidateError &&
      jobCandidateError.response.status === 404
    ) {
      setState({ noCandidatesFound: true });
    }
  }, [areJobCandidatesFailure, jobCandidateError]);

  return (
    <RenderApplicantsOverlay
      setMasterState={props.setParentState}
      noCandidatesFound={state.noCandidatesFound}
    />
  );
};

export default ApplicantsOverlay;
