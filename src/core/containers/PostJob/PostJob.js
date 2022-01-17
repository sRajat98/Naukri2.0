import React, { useState, useEffect } from "react";
import * as actionCreators from "app/redux/actions/HomePageActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes as RoutePath } from "Routes/Routepath";
import RenderPostJob from "core/components/RenderPostJob/RenderPostJob";

const PostJob = () => {
  const dispatch = useDispatch();
  const { isPostNewJobLoading, isPostNewJobFailure, isPostNewJobSuccess } =
    useSelector((state) => state.home);
  const navigate = useNavigate();
  const [state, updateState] = useState({
    jobTitle: "",
    description: "",
    location: "",
  });

  const setState = (value) => updateState({ ...state, ...value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title: state.jobTitle,
      description: state.description,
      location: state.location,
    };
    dispatch(actionCreators.postJob(requestBody));
  };

  const navigateToHome = () => {
    navigate(RoutePath.home);
  };

  useEffect(() => {
    if (isPostNewJobSuccess) {
      navigateToHome();
    }
  }, [isPostNewJobSuccess]);

  return (
    <RenderPostJob
      setParentState={setState}
      jobTitle={state.jobTitle}
      description={state.description}
      location={state.location}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default PostJob;
