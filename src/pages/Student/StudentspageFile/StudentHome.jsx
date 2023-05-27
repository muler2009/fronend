import React from "react";
import { Outlet } from "react-router-dom";
import StudentGeneralStastics, {
  Scharts,
} from "../components/StudentGeneralStastics";
import { InformationCard } from "../components/InformationCard";
import AllModules from "../components/Modules";
import { currentUser } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import UpgradeAccount from "../components/UpgradeAccount";
import { Div } from "../../../assets/css/styledComponents";
import ResultChart from "../components/ResultChart";

const StudentHome = () => {
  const userName = useSelector(currentUser);
  return (
    <>
      <InformationCard />
      <AllModules />
      <Div className={`w-full md:flex md:flex-1 bg-[#ffffff]`}></Div>
    </>
  );
};

export default StudentHome;

{
  /* <div className='py-1'>
{/* <CustomBar /> */
}
// <StudentGeneralStastics />
// </div> */}
