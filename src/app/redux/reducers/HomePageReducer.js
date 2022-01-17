import * as types from "../actionTypes";

const initialState = {
  isGetRecrutierJobsLoading: false,
  isGetRecrutierJobsFailure: false,
  recruiterJobs: [],
  maxRecruiterJobsPages: 0,
  isPostNewJobLoading: false,
  isPostNewJobFailure: false,
  isPostNewJobSuccess: false,
  areJobCandidatesLoading: false,
  areJobCandidatesFailure: false,
  jobCandidateError: null,
  jobCandidates: [],
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RECRUTIER_JOBS_LOADING: {
      return {
        ...state,
        isGetRecrutierJobsLoading: true,
        isGetRecrutierJobsFailure: false,
      };
    }
    case types.GET_RECRUTIER_JOBS_SUCCESS: {
      return {
        ...state,
        isGetRecrutierJobsLoading: false,
        isGetRecrutierJobsFailure: false,
        recruiterJobs: action.data.data || action.data,
        maxRecruiterJobsPages:
          (action.data.data &&
            Math.ceil(
              action.data.data.metadata.count / action.data.data.metadata.limit
            )) ||
          0,
      };
    }
    case types.GET_RECRUTIER_JOBS_FAILURE: {
      return {
        ...state,
        isGetRecrutierJobsLoading: false,
        isGetRecrutierJobsFailure: true,
      };
    }
    case types.POST_NEW_JOB_LOADING: {
      return {
        ...state,
        isPostNewJobLoading: true,
        isPostNewJobFailure: false,
        isPostNewJobSuccess: false,
      };
    }
    case types.POST_NEW_JOB_SUCCESS: {
      return {
        ...state,
        isPostNewJobLoading: false,
        isPostNewJobFailure: false,
        isPostNewJobSuccess: true,
      };
    }
    case types.POST_NEW_JOB_FAILURE: {
      return {
        ...state,
        isPostNewJobLoading: false,
        isPostNewJobFailure: true,
        isPostNewJobSuccess: false,
      };
    }
    case types.GET_JOB_CANDIDATES_LOADING: {
      return {
        ...state,
        areJobCandidatesLoading: true,
        areJobCandidatesFailure: false,
        jobCandidates: [],
      };
    }
    case types.GET_JOB_CANDIDATES_SUCCESS: {
      return {
        ...state,
        areJobCandidatesLoading: false,
        areJobCandidatesFailure: false,
        jobCandidates: action.data,
      };
    }
    case types.GET_JOB_CANDIDATES_FAILURE: {
      return {
        ...state,
        areJobCandidatesLoading: false,
        areJobCandidatesFailure: true,
        jobCandidateError: action.error,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default HomePageReducer;
