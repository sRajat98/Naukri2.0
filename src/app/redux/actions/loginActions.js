import * as types from "../actionTypes";
import SquareBoatApi from "app/httpsRequests/api";
import Constants from "app/httpsRequests/Constants";
import configs from "app/httpsRequests/configs";

export const startLoginLoader = () => (dispatch) => {
  dispatch({ type: types.SUBMIT_LOGIN_LOADING });
};

export const login = (requestBody) => (dispatch) => {
  SquareBoatApi.post(
    Constants.exportURL() + configs.endpoint.login,
    "",
    "",
    requestBody
  ).then(
    (response) =>
      dispatch({ type: types.SUBMIT_LOGIN_SUCCESS, data: response.data }),
    (error) => dispatch({ type: types.SUBMIT_LOGIN_FAILURE, error })
  );
};

export const signUp = (requestBody) => (dispatch) => {
  SquareBoatApi.post(
    Constants.exportURL() + configs.endpoint.register,
    "",
    "",
    requestBody
  ).then(
    (response) => console.log(response),
    (error) => console.log(error)
  );
};

export const resetLoginSuccess = () => (dispatch) => {
  dispatch({ type: types.RESET_LOGIN_SUCCESS });
};
