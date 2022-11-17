import React from "react"
const values = {
  loggedIn: localStorage.getItem('loggedIn') === 'true'
}
const AppContext = React.createContext({...values})
export default AppContext;
