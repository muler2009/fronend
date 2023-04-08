import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminRoutes from '../../../routes/AdminRoutes'


const Admin = () => {
  return (
    <React.Fragment>
        <section className={`flex`}>
            {/* Top header component */}
            
            {/* The main section of the page */}
            <main className={`flex-1 bg-[#ebedef]`}>
                <AdminRoutes />
                <Outlet />
            </main>

            {/* footer section of the Admin Board */}
            <footer className='w-full flex justify-center items-center'>
                <h6 className='font-Poppins text-sm py-5'>
                    &copy; 2023 ieXitTutor.com
                </h6>
            </footer>
        </section>
    </React.Fragment>
  )
}

export default Admin