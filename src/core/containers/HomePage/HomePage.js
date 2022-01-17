import React, { useState, useEffect } from "react";
import * as actionCreators from "app/redux/actions/HomePageActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes as RoutePath } from "Routes/Routepath";
import Pagination from "core/components/Pagination/Pagination";
import RenderHomePage from "core/components/RenderHomePage/RenderHomePage";
import ApplicantsOverlay from "core/containers/ApplicantsOverlay/ApplicantsOverlay";
import useDisabledBodyScroll from "utils/hooks/useDisabledBodyScroll";
import * as Styled from "./HomePage.styled";

const HomePage = () => {
  const [state, updateState] = useState({
    currentPage: 1,
    isApplicantsOverLayVisible: false,
    currentSelectedJob: {},
  });
  const setState = (value) => updateState({ ...state, ...value });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homePageSelector = useSelector((state) => state.home);
  useDisabledBodyScroll(state.isApplicantsOverLayVisible);

  useEffect(() => {
    const requestParams = { page: state.currentPage };
    dispatch(actionCreators.startGetRecrutierPostedJobsLoader());
    dispatch(actionCreators.getRecrutierPostedJobs(requestParams));
  }, [state.currentPage]);

  const navigateToPostJobs = () => {
    navigate(RoutePath.home + RoutePath.postJob);
  };

  const handlePagiNation = (action) => {
    if (action === "next")
      return setState({ currentPage: state.currentPage + 1 });
    return setState({ currentPage: state.currentPage - 1 });
  };

  return (
    <>
      <RenderHomePage
        setParentState={setState}
        homeState={homePageSelector}
        navigateToPostJobs={navigateToPostJobs}
      />
      {state.isApplicantsOverLayVisible && (
        <ApplicantsOverlay
          setParentState={setState}
          currentSelectedJob={state.currentSelectedJob}
        />
      )}
      <Styled.PaginationContainer>
        <Pagination
          currentPage={state.currentPage}
          maxPages={homePageSelector.maxRecruiterJobsPages}
          nextPage={() => handlePagiNation("next")}
          prevPage={() => handlePagiNation("prev")}
        />
      </Styled.PaginationContainer>
    </>
  );
};

export default HomePage;
