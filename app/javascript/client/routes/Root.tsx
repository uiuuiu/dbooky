import React from "react";
import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function Root() {
  return (
    <>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}