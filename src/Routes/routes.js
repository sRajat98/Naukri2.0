import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routes as Routepath } from "./Routepath";
import App from "../App";
import GlobalStyles from "app/themes/GlobalStyles";
import Login from "core/containers/Login/Login";
import Signup from "core/containers/Signup/Signup";
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";
import Header from "core/containers/Header/Header";
import HomePage from "core/containers/HomePage/HomePage";
import PostJob from "core/containers/PostJob/PostJob";

export const routes = () => (
  <>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes base>
        <Route
          exact
          path={Routepath.root}
          element={
            <PublicRoute>
              <App />
            </PublicRoute>
          }
        />
        <Route
          exact
          path={Routepath.login}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path={Routepath.signUp}
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path={Routepath.home}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
          exact
        />
        <Route
          path={Routepath.home + Routepath.postJob}
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
);
