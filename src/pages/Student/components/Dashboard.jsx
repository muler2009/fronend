import React from "react";
import StuNavbar from "./StuNavbar";
import { Outlet } from "react-router-dom";
import { StuPageRoutes } from "../../../routes/StudentRoute";
import Sidebar from "./Sidebar";
import { Div } from "../../../assets/css/styledComponents";
import BreadCrump from "./BreadCrump";

const Dashboard = () => {
  return (
    <>
      <Div className="w-full overflow-hidden sticky top-0 bg-white z-50">
        <StuNavbar />
      </Div>
      <Div className="flex flex-1">
        <Sidebar />
        <Div className="w-full">
          <BreadCrump />
          <StuPageRoutes />
          <Outlet />
        </Div>
      </Div>

      <footer className="w-full fixed bottom-0 grid place-content-center bg-[#0073aa] overflow-hidden">
        <h6 className="font-Poppins text-sm py-5">
          &copy; 2023 lefetenaTutor.com
        </h6>
      </footer>
    </>
  );
};

export default Dashboard;
