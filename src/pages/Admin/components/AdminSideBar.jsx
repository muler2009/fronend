import React,  { useState } from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaBars, FaUser } from 'react-icons/fa'
import {sidebar_link} from '../link/sidebarLink'
import {links} from '../link/links'
import AdminTreeComponent from './AdminTreeComponent'
import { Link } from 'react-router-dom'




const AdminSidebar = () => {
    const [control, setControl] = useState(true)
    return (
        <div className={`${control ? 'w-60' : 'w-20'} min-h-screen bg-[#033d95] z-10 relative duration-300 `}>        
            <div className='flex py-6 px-4 relative'>
                <div className={`flex justify-center items-center space-x-4 p-4 after:content-[""] after:absolute after:top-20 after:w-[70%] after:ml-10 after:bg-white after:h-[1px] after:mt-3 border-zinc-200 ${!control && 'after:scale-0' }`}>
                    <div className='flex py-3 justify-end '>
                    <FaBars 
                        className='cursor-pointer text-white'
                        onClick={()=>setControl(prev => ! prev)}  
                        size={20}
                    />
                    </div>
                    <h1 className={`text-medium origin-left font-Poppins text-white duration-300 ${!control && 'scale-0'}`}>Dashboard</h1>   
                </div>
            </div>

            {/* <div className={`${!control && 'scale-0'}`}>
                <AdminTreeComponent />
            </div> */}

            <div className='flex flex-col pl-6 pr-0 relative mt-10'>
                {
                  sidebar_link.map((key, i) => (
                    <Link to={key.path} className={`${sidebar_link && 'my-[5px]'} font-Poppins w-full flex items-center text-[14px] text-white gap-2 px-2 py-2 hover:text-black hover:rounded-l-full hover:bg-[#edf4f8] active:text-black active:rounded-l-full active:bg-[#edf4f8]`}>
                      <div size={20} className={`${!control && 'text-xl px-2 duration-500 hover:rounded-l-full'} text-lg`}>{key.icon}</div>
                      <h2 style={{ transitionDelay:`${i+3}00ms` }}
                        className={`duration-500 ${!control && 'opacity-0 translate-x-28 overflow-hidden'}`}>{key.label}</h2>
                    
                    </Link>
                  ))
                }
              </div> 
           
           
        </div>
    )
}

export default AdminSidebar;

