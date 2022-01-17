import * as types from "../actionTypes";

const initialState = {
  isSubmitLoginLoading: false,
  isSubmitLoginSuccess: false,
  isSubmitLoginFailure: false,
  loginData: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_LOGIN_LOADING: {
      return {
        ...state,
        isSubmitLoginLoading: true,
        isSubmitLoginSuccess: false,
        isSubmitLoginFailure: false,
      };
    }
    case types.SUBMIT_LOGIN_SUCCESS: {
      window.localStorage.setItem("SquareBoatsToken", action.data.data.token);
      window.localStorage.setItem("SquareBoatsUserDetails", action.data.data);
      return {
        ...state,
        isSubmitLoginLoading: false,
        isSubmitLoginSuccess: true,
        isSubmitLoginFailure: false,
        loginData: action.data.data,
      };
    }
    case types.SUBMIT_LOGIN_FAILURE: {
      return {
        ...state,
        isSubmitLoginLoading: false,
        isSubmitLoginSuccess: false,
        isSubmitLoginFailure: true,
      };
    }
    case types.RESET_LOGIN_SUCCESS: {
      return {
        ...state,
        isSubmitLoginSuccess: false,
      };
    }
    default:
      return { ...state };
  }
};

export default loginReducer;
