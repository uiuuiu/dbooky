import React from "react";
import type { RootState } from '../store';
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Root from "./Root";
// const history = createBrowserHistory({ window })

type RouteProps = {
  element: React.ReactElement
  publicElement?: React.ReactElement
}

const PrivateRoute = ({ element, publicElement }: RouteProps) => {
  const { token } = useSelector((state: RootState) => state.auth)
  if (token) {
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
        path: "dashboard",
        element: <PrivateRoute element={<Dashboard />} />,
      },
    ],
  },
]);

export default router;
