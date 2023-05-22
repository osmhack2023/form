import React from "react";
import { Link } from "react-router-dom";

export const Formredirect = () => {
  return (
    <div className="mt-5 flex flex-col items-center">
      <p className="header text-[44px] font-bold">
        Registration form for OSMHack2023
      </p>
      <div
        className="flex flex-col flex-wrap gap-5 mt-[5rem] items-center
      "
      >
        <a href="https://forms.gle/nh8JywfHmHEfZFRQ8" target="_" className=" text-white px-3 py-3 bg-blue-800 max-w-[20rem] w-[15rem]">
          Apply through google forms
        </a>
        <p className="text-[3rem] font-bold ">OR</p>
        <Link to="/form">
          <p className="bg-btn px-3 py-3 text-white max-w-[20rem] w-[15rem]">Apply through website</p>
        </Link>
      </div>
    </div>
  );
};
