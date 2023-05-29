import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { StuNavbar } from "../pages/Student/components/navigation/StuNavbar";
import { StuPageRoutes } from "../routes/StudentRoute";
import Sidebar from "../pages/Student/components/navigation/Sidebar";

export const StudentDashboardStructure = () => {
  return (
    <React.Fragment>
      {/* main content of the page [#f4f6f9] */}
      <div className="flex flex-col justify-between h-screen">
        <main className="flex flex-1 bg-[#f2f2f2]">
          {/* <Sidebar /> */}
          <div className={`w-full`}>
            <StuNavbar />
            <div className="mx-auto xl:w-[70%] lg:w-[80%]">
              <StuPageRoutes />
            </div>
          </div>
          <Outlet />
        </main>
        {/* footer section of the page */}
        <footer className={`w-full relative bottom-0 grid place-content-center bg-white border-[1px] text-[#5c727d] overflow-hidden`}>
          <h6 className="font-Poppins text-sm py-5 text-black">
            &copy; 2023 lefetena.com
          </h6>
        </footer>
      </div>
    </React.Fragment>
  );
};
