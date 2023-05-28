import React, { useState } from 'react'
import * as Ai from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {link, weblink} from '../../links/link'
import { FaSearch } from 'react-icons/fa'
import logo1 from '../../assets/images/logo1.png'
import {motion, AnimatePresence} from 'framer-motion'
import { nav_header_animator } from '../../animation/navbarAnimation'


export const Navbar = () => {

const navigate = useNavigate()
const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
        <nav className='border-b-[1px] shadow-b-lg z-50'>
            <div className={`flex justify-between items-center h-24 px-10 container mx-auto xxs:px-2 xs:px-10 ss:px-10 md:px-10 relative`}>
                <div className="flex flex-col items-end justify-end py-5">
                    <Link to='/'>
                        <img src={logo1} alt="Pi Logo" className="w-[100px] h-[80px]" />
                    </Link>
                </div>

                <ul className={`hidden md:flex md:space-x-4 items-center`}>                    
                    {
                        link.map((link, index) => {
                            return(
                                <li key={index}>
                                    <Link to={link.path}>
                                        <button className={`${index === 0 ? "hidden" : "flex items-center btn-sm bg-[#3C4852] text-white px-4 rounded-none"}`}>
                                            <span className={`mr-2`}>{link.icon}</span>{link.label}
                                        </button>
                                    </Link>
                                </li>
                            )
                        })
                    }                                    
                </ul>
                {/* BrrakPoints  */}
                <AnimatePresence initial={false}>
                { 
                    <div className={`flex md:hidden relative`} onClick={() => setOpen(prev => !prev)}>
                        <div className="flex justify-center items-center" >
                            {
                                open ? <Ai.AiOutlineClose size={20} /> : <Ai.AiOutlineMenu size={20} />
                            }
                        </div>

                        {
                            open && (
                                <motion.div 
                                    variants={nav_header_animator}
                                    initial="init"
                                    animate="visible" 
                                    className={open 
                                    ? "fixed top-24 xxs:w-[75%] xs:w-[60%] md:w-[50%] h-[80%] right-0 z-50 bg-white  transition-opacity duration-10 " 
                                    : "fixed left-[-100%] transition-opacity duration-150"} 
            >                         
                                    {
                                        link.map((link, index) => {
                                            return(
                                                <div key={index} className={`border-b border-gray-200 w-full py-5 px-5`}>
                                                    <Link to={link.path} className={`flex items-center space-x-4 font-Poppins text-[14px]`}>
                                                        <div>{link.icon}</div>
                                                        <h2>{link.label}</h2>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }                                    
                                </motion.div>
                            )
                        }
                        
                    </div>
                }
                </AnimatePresence>
            </div>
        </nav>
    </React.Fragment>
  )
}
