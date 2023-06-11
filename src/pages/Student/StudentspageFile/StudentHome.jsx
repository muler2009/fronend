import React from "react";
import { useSelector } from "react-redux";
import { Div } from "../../../assets/css/styledComponents";
import { currentUser } from "../../../features/auth/authSlice";
import { InformationCard } from "../components/InformationCard";
import AllModules from "../components/Modules";

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
