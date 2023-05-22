import React from "react";
import logo from "../osmLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar  flex justify-center h-20 shadow-lg text-black bg-formbg items-center ">
      <div className="logo ">
        <img src={logo} alt="" className="w-44 h-28" />
      </div>
    </div>
  );
};
