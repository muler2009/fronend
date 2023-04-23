import React from 'react'
import StuNavbar from './StuNavbar'
import { Outlet } from 'react-router-dom'
import { StuPageRoutes } from '../../../routes/StudentRoute'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <section className="w-full flex-col overflow-hidden">
        <StuNavbar />
        <div className="flex flex-1">
        <Sidebar />
          <div className="w-full">
             <StuPageRoutes />
             <Outlet />
          </div>
        </div>

        <footer className='w-full relative bottom-0 grid place-content-center bg-[#0073aa] overflow-hidden'>
          <h6 className='font-Poppins text-sm py-5'>
             &copy; 2023 ieXitTutor.com
          </h6>
      </footer>
    </section>
  )
}

export default Dashboard