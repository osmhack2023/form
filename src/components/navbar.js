import React from "react";
import logo from "../osmLogo.png";

export const Navbar = () => {
  return (
    <div className="navbar  flex justify-center shadow-sm bg-[#fef9f9] items-center ">
      <div className="logo ">
        <img src={logo} alt="" className="w-44 h-28" />
      </div>
    </div>
  );
};
