import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./AppRouters";

const Router = () => {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
};

export default Router;
