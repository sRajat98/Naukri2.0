import * as types from "../actionTypes";

const initialState = {
  deviceInfo: { width: 0, height: 0, deviceType: "web-low-res" },
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DEVICE_INFORMATION_ON_RESIZE:
      return {
        ...state,
        deviceInfo: {
          ...state.deviceInfo,
          width: action.width,
          height: action.height,
          deviceType: action.deviceType,
        },
      };
    default:
      return { ...state };
  }
};

export default commonReducer;
