import React from "react";
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from "./store";
import routes from "./routes";
import apis from "./apis";
// import "./App.scss";
// import "antd/dist/antd.css";

const App: React.FC = () => {
  console.log(apis)
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
};

export default App;
