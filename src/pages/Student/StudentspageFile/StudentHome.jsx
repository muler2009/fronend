import React from 'react'
import {  Outlet } from 'react-router-dom'
import StudentGeneralStastics from '../components/content/StudentGeneralStastics'
import {
  InformationCard,
  ExamPackage
} from '../components/content/Components'
import AllModules from '../components/content/Modules'
import { currentUser } from '../../../features/auth/authSlice';
import { useSelector } from 'react-redux'

const StudentHome = () => {
  const userName = useSelector(currentUser);
  return (
    <section className='w-full flex sm:px-4 md:px-1'>
        <div className={`w-full flex flex-col`}>
            <InformationCard />
            {userName}
            {/* <ExamPackage /> */}
            <AllModules />
            <div className='py-1'>
                {/* <CustomBar /> */}
                <StudentGeneralStastics /> 
            </div>
            <Outlet />
       </div>
    </section>
  )
}

export default StudentHome