import React from 'react'
import StuNavbar from './StuNavbar'
import { Outlet } from 'react-router-dom'
import { StuPageRoutes } from '../../../routes/StudentRoute'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <section className="flex-col md:flex-col overflow-hidden">
      <StuNavbar />
      <div className="flex flex-1">
          <Sidebar />
          <div className="md:w-full xs:overflow-x-auto">
             <StuPageRoutes />
             <Outlet />
          </div>

      </div>
    </section>
  )
}

export default Dashboard