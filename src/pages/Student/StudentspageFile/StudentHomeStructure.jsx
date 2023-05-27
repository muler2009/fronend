import React from "react";
import Sidebar from "../components/Sidebar";
import { StuNavbar } from "../components/StuNavbar";
import { Outlet } from "react-router-dom";
import StudentHome from "./StudentHome";

const StudentHomeStructure = () => {
  return (
    <React.Fragment>
      <section className="w-full flex flex-row overflow-hidden">
        {/* Collapsable Sidebar for Admin page */}
        <Sidebar />
        <div className={`flex-1 flex-col`}>
          <StuNavbar />
          <StudentHome />
        </div>
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default StudentHomeStructure;
