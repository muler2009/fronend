import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navigations/Navbar";
import { PageRoutes } from "../../routes/PageRoutes";
import { Div } from "../../assets/css/styledComponents";

const Public = () => {
  return (
    <React.Fragment>
      <header className="w-full overflow-hidden sticky top-0 bg-white z-50">
        <Navbar />
      </header>
      <main className={`flex-1`}>
        <PageRoutes />
        <Outlet />
      </main>

      <footer className={`w-full relative bottom-0 grid place-content-center bg-white border-[1px] text-[#5c727d] overflow-hidden`}>
        <h6 className="font-Poppins text-sm py-5">
          &copy; 2023 piOnlineTutor.com
        </h6>
      </footer>
    </React.Fragment>
  );
};

export default Public;
