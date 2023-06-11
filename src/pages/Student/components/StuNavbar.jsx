import React, { useState } from 'react'
import user from '../../../assets/images/user.jpeg'
import * as Ai from 'react-icons/ai'
import * as Gr from 'react-icons/gr'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import DropDownProfile from '../../../common/DropDownProfile'
import { side_navigation } from '../constants/studentNavigation'
import { Submenu } from './Sidebar'
import { currentUserEmail } from '../../../features/auth/authSlice'
import { FaPowerOff } from 'react-icons/fa'
import LogoutConfirmationModal from './LogoutConfirmationModal'
import logo1 from '../../../assets/images/logo1.png'

const StuNavbar = () => {

  const navigate = useNavigate()
  const [drop, setDrop] = useState(false)
  const [logout, setLogout] = useState(false)
  const [showNavigationLinks, setShowNavigationLinks] = useState(false)
  const email = useSelector(currentUserEmail)

  return (
    <React.Fragment>
        <div className={`py-3 px-4 bg-[#ffffff] border-b-[1px] border-b-[#dee2e6]`}>
            <div className={`flex justify-between items-center`}>
                <div className={`flex justify-between items-center xs:mx-5 xs:space-x-5`}>

                  {/* Menu Icons section */}
                    <div className={`cursor-pointer block md:hidden`} onClick={() => setShowNavigationLinks(prev => !prev)}>
                        {
                            showNavigationLinks ? <Ai.AiOutlineClose size={20} /> : <Ai.AiOutlineMenu size={20} />
                        }
                    </div>

                    <Link to='/student' className={`font-Oswald tracking-[0.045em] text-2xl flex justify-start items-center space-x-2 px-3 text-[#071466]`}>
                        
                        <img src={logo1} alt="Pi Logo" className="w-[110px] h-[70px]" />
                    </Link>     
                </div>

                <div className="">
                    <p className={`font-Poppins text-sm text-[#98a0b8]`}>
                      {`${format(new Date(), 'EEEE do, MMMM, yyyy')}`}
                    </p>  
                </div>

                {/* dropdown with edit logout and other profile */}
                {/* <div className={`mr-10 cursor-pointer font-Poppins text-sm hidden lg:flex lg:justify-center lg:items-center lg:space-x-3`} onClick={() => setDrop(prev => !prev)}>
                  <img src={user} alt='profile image' className={`rounded-full w-10 h-10 object-cover object-center cursor-pointer`} />
                  <p>{email}</p>
                    {
                      drop &&  <DropDownProfile setDrop={setDrop} />
                    }
                </div> */}

                <Ai.AiOutlinePoweroff size={20} className="cursor-pointer hidden lg:flex" onClick={() => setLogout(prev => !prev)} />
                               
                {/* for small devices */}     
                <div className={showNavigationLinks ? 'fixed top-16 xs:w-[60%] w-[40%] left-0 bg-white ease-in-out duration-500': 'fixed left-[-100%]'}>
                  <div className={`flex flex-col`}>
                    <ul className={`flex flex-col gap-3 justify-start items-start px-10`}>
                      {
                        side_navigation.map((link, index) => {
                          return(
                            <li key={index} className={`border-b border-gray-200 w-full py-2`}>
                                <Link to={link.path} className={`flex items-center space-x-4 font-Poppins text-[14px]`}>
                                    <div>{link.icon}</div>
                                    <h2>{link.label}</h2>     
                                </Link>
                            </li>
                        )}
                          
                        )
                    }
                    <li className={`flex items-center space-x-4 font-Poppins text-[14px] pb-2`}>
                      <Gr.GrPower />
                          <Link to={`logout`}>Logout</Link>
                    </li>
                    </ul>
                  </div>
                </div>

               
                  {/* navigation for medium device */}
            </div> 
        </div>


        {/* for medium devices */} 
                   
        <div className={`hidden md:flex w-full justify-between items-center bg-[#fcfcfc] shadow-lg lg:hidden px-5 py-5 my-2`}>
          <div className="flex flex-1">
            {
              side_navigation.map((link, index) => (
                <div className="flex mx-5 font-Poppins" key={index}>
                  <Link to={link.path} className="flex justify-center items-center space-x-2">
                    <div>{link.icon}</div>
                    <div>{link.label}</div>
                  </Link>
                </div>
              ))
            }
          </div>
          <div className="">
            <Ai.AiOutlinePoweroff size={20} className="cursor-pointer" onClick={() => setLogout(prev => !prev)} />
          </div>
        </div>
        
        <LogoutConfirmationModal logout={logout} setLogout={setLogout} />
    </React.Fragment>
  )
}

export default StuNavbar;
