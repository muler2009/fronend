import React, { useState } from 'react'
import UploadingCSVQuestion from '../components/UploadingCSVQuestion'
import { ModuleNumberChart, UploaderAccount } from './DashboardComponents'

const DashboardForUploader = () => {
      
  return (
   <React.Fragment>
        <section className={`w-full px-1 py-1 flex flex-col relative top-0`}>
            <div className='py-5 px-3 border-b-2 border-[#413ea0]'>
               <h1 className='text-3xl font-Oswald tracking-wide'>Quick Insight</h1>
            </div>
           {/* code section for first row */}
            <div className={`w-full flex space-x-2 font-Poppins`}>

                <div className={`w-1/2 flex`}>    {/* code section for first-row left section  */}
                    <div className={`w-full flex space-x-1`}>
                        <div className={`w-1/2 bg-[#fff] p-5 shadow-lg`}>
                            <div className={`flex justify-between items-center`}>
                                <h1 className={`text-md text-[#212529]`}>Module</h1>
                                <button className={`btn-sm px-5`}>View</button>
                            </div>
                            <h1 className={`text-3xl mt-4`}>12</h1>
                            <small className={`text-xs text-muted`}>Last updated X hour of ago</small>
                            <ModuleNumberChart />
                        </div>

                        <div className={`w-1/2 flex flex-col space-y-1`}>
    
                            <div className={`bg-[#fff] px-5 py-5 shadow-lg`}>
                                <div className={`flex justify-between items-center`}>
                                    <h1 className={`text-sm`}>Avg. Question/Module</h1>
                                    <button className={`btn-sm px-5`}>View</button>
                                </div>
                                <h1 className={`text-3xl mt-4`}>0</h1>
                                
                            </div>

                            <div className={`bg-[#fff] px-5 py-5 shadow-lg`}>
                                <div className={`flex justify-between items-center`}>
                                    <h1 className={`text-sm`}>Avg. Question/Module</h1>
                                    <button className={`btn-sm px-5`}>View</button>
                                </div>
                                <h1 className={`text-3xl mt-4`}>0</h1>   
                            </div>
                        </div>
                    </div>
                    
                </div>   

                
                <div className={`w-1/2 bg-[#fff]`}>  {/* code section for first-row right section  */}
                    {/* <UploaderAccount /> */}
                    <UploadingCSVQuestion />
                </div>

            </div>

            {/* code section for second row */}
            <div className={`w-full p-1 flex space-x-2 font-Poppins`}>
                <div className={`w-1/2 bg-[#fff] py-24 shadow-lg `}>
                    <h1 className={`text-center`}>Section for displaying something1</h1>
                </div>  

                <div className={`w-1/2 bg-[#fff] py-24 shadow-lg `}>
                    <h1>Section for displaying something</h1>
                </div>  
            </div>

        </section>
   </React.Fragment>
  )
}


export default DashboardForUploader



 