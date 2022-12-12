import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthPage from "../pages/auth/AuthPage";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRouters;
