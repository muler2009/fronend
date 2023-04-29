import React,  { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { side_navigation } from '../constants/studentNavigation'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currentUserEmail } from '../../../features/auth/authSlice'
import user from '../../../assets/images/user.jpeg'
import * as Ri from 'react-icons/ri'


const Sidebar = () => {
  const [control, setControl] = useState(true)
  const userEmail = useSelector(currentUserEmail)

  return (
    <React.Fragment>
      <div className={`hidden lg:flex`}>
        <div className={`${control ? 'w-72' : 'w-24'}  bg-[#ffffff] h-screen border-[#c9c9c9] relative top-0 duration-300 shadow-md`}>
            <div className='flex justify-between items-center border-b-[1px] px-10 bg-zinc-50'>
              <div className={`flex flex-col my-5 pt-5 ${!control && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                  <h1 className={`font-Poppins text-xl`}>{userEmail}</h1>
                  <p className="font-Poppins text-sm">Department</p>
              </div>
                <div className={`flex justify-center items-center space-x-4 py-4 ${!control && 'border-none' }`}>
                  <div className='flex flex-col space-x-4 justify-start items-baseline gap-10 justify-cener '>
                    <FaBars 
                      className={`${control ? 'flex cursor-pointer ' : 'md:flex md:justify-center cursor-pointer' }`}
                      onClick={()=>setControl(prev => ! prev)}  
                      size={20}
                    />      
                  </div>
                </div>
            
            </div> 

          <div className={`flex flex-col mt-5`}>
                  {
                    side_navigation.map((link, index) => {
                      return <Submenu key={index} link={link} control={control} />
                      
                    })
                  }
          </div>

        </div>
      </div>

     
    </React.Fragment>
  )
}

export const Submenu = (props) => {
  
  const { link, control } = props
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return(
    <React.Fragment>
        <div className='flex flex-col '>
                <Link 
                  to={link.path} 
                  onClick={link.submenu && showSubnav} 
                  className={`flex justify-between px-5 py-1hover:bg-[#f9f6f2] focus:text-[#eb3349] hover:border-r-4 border-r-green-500 focus:bg-[#f9f6f2] focus:border-r-4 focus:border-r-green-500`}> 
                      <div className={`flex items-center space-x-2 py-3 px-3 `}>
                        <div className={` hover:rounded-l-full} text-lg`} size={20}>{link.icon}</div>
                        <h2 className={`duration-500 font-Poppins text-sm
                         ${!control && 'opacity-0 translate-x-28 overflow-hidden md:opacity-1 md:translate-x-28 md:overflow-hidden'}`}>{link.label}</h2>
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




export default Sidebar