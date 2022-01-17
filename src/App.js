import React, { useEffect } from "react";
// import Footer from "core/components/Footer/Footer";
import useWindowSize from "utils/hooks/useWindowSize";
import * as commonActionCreators from "app/redux/actions/commonActions";
import { useDispatch } from "react-redux";
import LandingPage from "core/containers/LandingPage/LandingPage";

const App = () => {
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(commonActionCreators.handleDeviceResize(width, height));
  }, [width, height]);

  return <LandingPage />;
};

export default App;
