import React from "react";
import { Outlet } from "react-router-dom";
// import { StuNavbar } from '../../Student/components/StuNavbar';
import AdminSideBar from "../../components/AdminSideBar";
import AdminTopbar from "../../components/AdminTopbar";
import ModuleTable from "./ModuleTable";

const ModuleAdmin = () => {
  return (
    <React.Fragment>
      <section className="w-full flex flex-row">
        {/* Collapsable Sidebar for Admin page */}
        <AdminSideBar />
        <div className={`flex-1 flex-col`}>
          <AdminTopbar />
          <Outlet />

          <div className="mx-10 my-16">
            <ModuleTable />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModuleAdmin;
