import React from "react";
import { Button } from "@mui/material";

const LoginLink = ({onClick}) => {

  return (
    <>
      <h2>
        Please <Button onClick={onClick}>login</Button> to manage your books
      </h2>
    </>
  )
}

export default LoginLink;
