import React from 'react'
import {  Outlet } from 'react-router-dom'
import StudentGeneralStastics, { Scharts } from '../components/StudentGeneralStastics'
import {
  InformationCard,
  ExamPackage
} from '../components/content/Components'
import AllModules from '../components/content/Modules'
import { currentUser } from '../../../features/auth/authSlice';
import { useSelector } from 'react-redux'
import UpgradeAccount from '../components/UpgradeAccount'

const StudentHome = () => {
  const userName = useSelector(currentUser);
  return (
    <>   
      <InformationCard />
      <AllModules />
      <div className="flex flex-wrap md:flex-nowrap">
        <div className={`w-full ss:mx-10 sm:mx-16 md:w-1/2`}>
          <UpgradeAccount />
        </div>
        <div className={`w-full ss:mx-10 sm:mx-16 md:w-1/2`}>
          <Scharts />
        </div>
       

        
      </div>
    </>
  )
}

export default StudentHome

{/* <div className='py-1'>
{/* <CustomBar /> */}
// <StudentGeneralStastics /> 
// </div> */}