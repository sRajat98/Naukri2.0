import * as types from "../actionTypes";
import { getDevice } from "utils/Constants/Constants";
import JioGamesApi from "app/httpsRequests/api";
import Constants from "app/httpsRequests/Constants";
import configs from "app/httpsRequests/configs";

export const handleDeviceResize = (width, height) => {
  const deviceType = getDevice(width);

  return {
    type: types.SET_DEVICE_INFORMATION_ON_RESIZE,
    width,
    height,
    deviceType,
  };
};
