import React from "react";

import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
