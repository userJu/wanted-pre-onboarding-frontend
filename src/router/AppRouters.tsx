import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthPage from "../pages/auth/AuthPage";
import TodoPage from "../pages/todo/TodoPage";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
};

export default AppRouters;
