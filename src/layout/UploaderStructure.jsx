import React from 'react'
import { Outlet } from 'react-router-dom'
import UploaderRoutes from '../routes/UploaderRoutes'
import USidebar from '../pages/Uploader/components/USidebar'
import UTopbar from '../pages/Uploader/components/UTopbar'


const UploaderStructure = () => {
  return (
    <React.Fragment>
        <section className={`flex flex-col`}>
            <header className={`sticky top-0 z-10`}>
                <UTopbar />
            </header>
            {/* Top header component */}
            {/* The main section of the page */}
            <main className={`flex-1 flex bg-gray-50`}>  
                <USidebar />                
                <div className={`w-full`}>
                    <UploaderRoutes />
                    <Outlet />
                </div>
            </main>

            {/* footer section of the Admin Board */}
            <footer className='w-full flex fixed bottom-0 justify-center items-center bg-[#00796b]'>
                <h6 className='font-Poppins text-sm py-3 text-white'>
                    &copy; 2023 ieXitTutor.com
                </h6>
            </footer>
        </section>
</React.Fragment>
  )
}

export default UploaderStructure






   
