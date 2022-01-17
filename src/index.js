import React from "react";
import ReactDOM from "react-dom";

import * as Styled from "./index.styled";
import "app/themes/variables.css";
import { routes as Routes } from "./Routes/routes";
import reportWebVitals from "./reportWebVitals";
//redux imports
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./app/redux/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Styled.Container>
        <Routes />
      </Styled.Container>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
