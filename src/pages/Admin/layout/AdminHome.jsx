import React from 'react'
import { Outlet } from 'react-router-dom';
// import { StuNavbar } from '../../Student/components/StuNavbar';
import AdminSideBar from '../components/AdminSideBar';
import AdminTopbar from '../components/AdminTopbar';

const AdminHome = () => {
  return (
    <React.Fragment>
        <section className='w-full flex flex-row'>     
            {/* Collapsable Sidebar for Admin page */}
            <AdminSideBar />                
            <div className={`flex-1 flex-col`}>
                <AdminTopbar />                  
                <Outlet /> 
            </div>            
        </section>
    </React.Fragment>
  )
}

export default AdminHome;