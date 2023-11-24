import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const AuthLayout = () => {
  return (
    <div className="w-[500px] mx-auto max-w-[95%]">
      <div className="my-5 md:my-0 md:h-screen flex justify-center items-center flex-col w-full">
        <div className="w-full flex justify-center">
          <Logo />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
