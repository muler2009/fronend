import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navigations/Navbar'
import { PageRoutes } from '../../routes/PageRoutes'

const Public = () => {
  return (    
   <React.Fragment>
        <header>
            <Navbar />
        </header>
        <main className={`flex-1 `}>
            <PageRoutes />
            <Outlet />
        </main>

        <footer className='w-screen scroll bottom-0 grid place-content-center bg-[#0073aa]'>
          <h6 className='font-Poppins text-sm py-5'>
             &copy; 2023 ieXitTutor.com
          </h6>
      </footer>
   </React.Fragment>
  )
}

export default Public