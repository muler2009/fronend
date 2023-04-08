import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { u_sidebar_link } from '../navigations/links'
import { FaBars } from 'react-icons/fa'

const USidebar = () => {
    const [control, setControl ] = useState(true)
  return (
    <React.Fragment>
        <div className={`${control ? 'w-80' : 'w-20'} min-h-screen bg-white shadow-sm relative duration-300 border-r-[1px] border-[#c9c9c9]`}>        
            <div className='flex py-4 px-4 relative'>
                <div className={`flex justify-center items-center space-x-4 p-4 after:content-[""] after:absolute after:top-20 after:w-[70%] after:ml-10 after:bg-[#c9c9c9] after:h-[1px] after:mt-3 border-zinc-200 ${!control && 'after:scale-0' }`}>
                    <div className='flex py-3 justify-end '>
                    <FaBars 
                        className='cursor-pointer text-black'
                        onClick={()=>setControl(prev => ! prev)}  
                        size={20}
                    />
                    </div>
                    <h1 className={`text-medium origin-left font-Poppins text-black duration-300 ${!control && 'scale-0'}`}>Dashboard</h1>   
                </div>
            </div>

            <div className={`flex flex-col  relative `}>
              {
                u_sidebar_link.map((link, index) => {
                  return <Submenu key={index} link={link} control={control} />
                  
                })
              }
            </div>

            {/* <div className='flex flex-col pl-6 pr-0 relative mt-5'>
                {
                  u_sidebar_link.map((key, i) => (
                    <Link to={key.path} className={`${u_sidebar_link && 'my-[5px]'} font-Poppins w-full flex items-center text-[14px] text-black gap-2 px-2 py-2 hover:text-black hover:rounded-l-full hover:bg-[#edf4f8] active:text-black active:rounded-l-full active:bg-[#edf4f8]`}>
                      <div size={20} className={`${!control && 'text-xl px-2 duration-500 hover:rounded-l-full'} text-lg`}>{key.icon}</div>
                      <h2 style={{ transitionDelay:`${i+3}00ms` }}
                        className={`duration-500 ${!control && 'opacity-0 translate-x-28 overflow-hidden'}`}>{key.label}</h2>
                    
                    </Link>
                  ))
                }
              </div>  */}
           
           
        </div>
    </React.Fragment>
  )
}

export default USidebar

const Submenu = (props) => {
  
  const { link, control } = props
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return(
    <React.Fragment>
        <div className='flex flex-col pl-6'>
              <Link to={link.path} onClick={link.submenu && showSubnav} className={`flex justify-between hover:bg-[#e6e6e6] hover:rounded-l-full hover:border-r-4 border-r-green-500 focus:bg-[#e6e6e6] focus:rounded-l-full focus:border-r-4 focus:border-r-green-500`}> 
                <div className={`flex items-center space-x-2 py-3 px-3 `}>
                  <div className={` hover:rounded-l-full '} text-lg`} size={20}>{link.icon}</div>
                  <h2 className={`duration-500 font-Poppins text-sm ${!control && 'opacity-0 translate-x-28 overflow-hidden'}`}>{link.label}</h2>
                </div>
                
                <div className={`flex pr-4 items-center ${!control && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                  {link.submenu && subnav
                    ? link.iconOpened
                    : link.submenu
                    ? link.iconClosed
                    : null}
                  </div>

              </Link>
              {
                subnav && 
                  link.submenu.map((item, index) => {
                    return(
                      <Link to={item.path} key={index} className={`pl-10 flex items-center space-x-3`}>
                        {item.icon}
                        <h1 className={`py-2 text-sm duration-500 font-Poppins ${!control && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                        {item.label}
                        </h1>
                      </Link>
                    )
                  }) 
              }
        </div> 
           
    </React.Fragment>
  )
}