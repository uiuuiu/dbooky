import React, { useContext } from "react";
import AppContext from "../../routes/AppContext";

const Books: React.FC = () => {
  const {loggedIn} = useContext(AppContext);

  if (loggedIn) {
    return (
      <><h2>Your books</h2></>
    )
  }

  return (
    <><h2>Please log in to manage your books</h2></>
  )
}

export default Books;
