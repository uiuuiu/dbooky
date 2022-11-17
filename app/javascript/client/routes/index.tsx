import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import EdittingBook from "../pages/EdittingBook";

import AppContext from './AppContext';

type RouteProps = {
  element: React.ReactElement
  publicElement?: React.ReactElement
}

const PrivateRoute = ({ element, publicElement }: RouteProps) => {
  const {loggedIn} = React.useContext(AppContext);
  if (loggedIn) {
    return element;
  }
  return publicElement ? publicElement : <Navigate to="/" />;
}

const PublicRoute = ({ element }: RouteProps) => {
  return element
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "",
        element: <PublicRoute element={<Home />}/>,
      },
      {
        path: "edit_book",
        element: <PublicRoute element={<EdittingBook />} />,
      },
      {
        path: "dashboard",
        element: <PrivateRoute element={<Dashboard />} />,
      },
    ],
  },
]);

export default router;
