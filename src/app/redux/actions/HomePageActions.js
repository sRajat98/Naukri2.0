import * as types from "../actionTypes";
import SquareBoatApi from "app/httpsRequests/api";
import Constants from "app/httpsRequests/Constants";
import configs from "app/httpsRequests/configs";

export const startGetRecrutierPostedJobsLoader = () => (dispatch) => {
  dispatch({ type: types.GET_RECRUTIER_JOBS_LOADING });
};

export const getRecrutierPostedJobs = (requestParams) => (dispatch) => {
  SquareBoatApi.get(
    Constants.exportURL() + configs.endpoint.getRecruiterPostedJobs,
    "",
    requestParams
  ).then(
    (response) => {
      dispatch({ type: types.GET_RECRUTIER_JOBS_SUCCESS, data: response.data });
    },
    (error) => {
      dispatch({ type: types.GET_RECRUTIER_JOBS_FAILURE, error });
    }
  );
};

export const postJob = (requestBody) => (dispatch) => {
  SquareBoatApi.post(
    Constants.exportURL() + configs.endpoint.postJob,
    "",
    "",
    requestBody
  ).then(
    (response) => {
      dispatch({ type: types.POST_NEW_JOB_SUCCESS, data: response.data });
    },
    (error) => {
      dispatch({ type: types.POST_NEW_JOB_FAILURE, error });
    }
  );
};

export const getCurrentJobCandidates = (jobId) => (dispatch) => {
  SquareBoatApi.get(
    `${
      Constants.exportURL() + configs.endpoint.getRecruiterPostedJobs
    }/${jobId}`
  ).then(
    (response) => {
      dispatch({ type: types.GET_JOB_CANDIDATES_SUCCESS, data: response.data });
    },
    (error) => {
      dispatch({ type: types.GET_JOB_CANDIDATES_FAILURE, error });
    }
  );
};
