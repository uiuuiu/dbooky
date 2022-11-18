import React from "react";
import { Button } from "@mui/material";
import appActions from "../actions/appActions";

const LoginLink = () => {
  const toLogin = () => {
    appActions.changeSidebarTab("4")
  }

  return (
    <>
      <h2>
        Please <Button variant="text" onClick={toLogin}>login</Button> to manage your books
      </h2>
    </>
  )
}

export default LoginLink;
