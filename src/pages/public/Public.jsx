import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navigations/Navbar'
import { PageRoutes } from '../../routes/PageRoutes'

const Public = () => {
  return (    
   <React.Fragment>
        <header className="w-full overflow-hidden sticky top-0 bg-white z-50">
            <Navbar />
        </header>
        <main className={`flex-1`}>
            <PageRoutes />
            <Outlet />
        </main>

        <footer className='w-full relative bottom-0 grid place-content-center bg-[#0073aa] overflow-hidden'>
          <h6 className='font-Poppins text-sm py-5'>
             &copy; 2023 ieXitTutor.com
          </h6>
      </footer>
   </React.Fragment>
  )
}

export default Public