import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { RootState } from "../store";

import AppContext from "./AppContext";

export default function Root() {
  const { loggedIn } = useSelector((state:RootState) => state.auth)

  return (
    <AppContext.Provider value={{loggedIn}}>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </AppContext.Provider>
  );
}