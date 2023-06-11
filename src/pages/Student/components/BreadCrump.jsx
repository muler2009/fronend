import React from "react";
import { Div } from "../../../assets/css/styledComponents";
import * as Ai from "react-icons/ai";
import { side_navigation } from "../constants/studentNavigation";
import { Link, useLocation, Routes } from "react-router-dom";

const BreadCrump = () => {
  const locate = useLocation();

  return (
    <Div className="w-full my-1 bg-zinc-50 py-3 px-5 flex xs:justify-end lg:justify-start">
      <Ai.AiOutlineDashboard size={20} className="mr-2" />
      <div className="font-Poppins text-[#828692]">
        {locate.pathname === "/student"
          ? "Dashboard /"
          : locate.pathname === "/student/profile"
          ? "Profile /"
          : locate.pathname === "/student/modules"
          ? "Module /"
          : locate.pathname === "/student/result"
          ? "Result"
          : locate.pathname === "/student/change_password"
          ? "Changing Password"
          : null}
      </div>
    </Div>
  );
};

export default BreadCrump;
