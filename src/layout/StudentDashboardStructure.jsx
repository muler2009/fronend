import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { StuNavbar } from '../pages/Student/components/navigation/StuNavbar'
import { StuPageRoutes } from '../routes/StudentRoute'
import Sidebar from '../pages/Student/components/navigation/Sidebar'



export const StudentDashboardStructure = () => {
    return (
        <React.Fragment>
        
              {/* main content of the page [#f4f6f9] */}
              <main className='flex flex-1 bg-[#f2f2f2]'>
                
                <Sidebar />
                <div className={`w-full`}>
                <StuNavbar />
                <StuPageRoutes />

                </div>
                <Outlet />
                                      
              </main>
              {/* footer section of the page */}
              <footer className='w-full relative bottom-0 -z-0 grid place-content-center bg-[#0073aa]'>
                <h6 className='font-Poppins text-sm py-5 text-white'>
                  &copy; 2023 ieXitTutor.com
                </h6>
              </footer>
         
        </React.Fragment>
      )
}
