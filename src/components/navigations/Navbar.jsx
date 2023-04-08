import React, { useState } from 'react'
import * as Ai from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {link, weblink} from '../../links/link'


export const Navbar = () => {

   const navigate = useNavigate()

   const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
        <section className='border-b-2 shadow-b-lg'>
            <div className={`flex justify-between items-center px-10 h-24 container mx-auto`}>
                <h1 className='font-Oswald tracking-wide text-blue-900 text-2xl'>ieXitTutor.com</h1>
                    <ul className={`hidden lg:flex lg:space-x-4 items-center`}>
                        {
                            weblink.map((weblink, index) => {
                                return(
                                    <li key={index}>
                                        <Link to={weblink.path}>
                                            <h5 className='font-Poppins text-[14px] flex items-center space-x-3'>
                                            <span className='mx-2'>{weblink.icon}</span> {weblink.label}
                                            </h5>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        
                        {
                            link.map((link, index) => {
                                return(
                                    <li key={index}>
                                        <Link to={link.path}>
                                            <button className='flex items-center btn-sm bg-[#3C4852] text-white px-4 rounded-none'>
                                                <span className={`mr-2`}>{link.icon}</span>{link.label}
                                            </button>
                                        </Link>
                                    </li>
                                )
                            })
                        }                                    
                    </ul>


                    <div className={`cursor-pointer block lg:hidden`} onClick={() => setOpen(prev => !prev)}>
                            {
                                open ? <Ai.AiOutlineClose size={20} /> : <Ai.AiOutlineMenu size={20} />
                            }
                        </div>

                    {/* BrrakPoints  */}

                    <div className={open? 'fixed top-0 w-[60%] left-0 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                        <h1 className='font-Oswald tracking-wide text-blue-900 text-2xl m-10'>ieXitTutor.com</h1>
                        <ul className={`flex flex-col gap-4 justify-start items-start px-10 `}>
                            {
                                weblink.map((weblink, index) => {
                                    return(
                                        <li key={index} className={`border-b border-gray-200 w-full py-2`}>
                                            <Link to={weblink.path} className={`flex items-center space-x-4 font-Poppins text-[14px]`}>
                                                <div>{weblink.icon}</div>
                                                <h2>{weblink.label}</h2>
                                                
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            
                            {
                                link.map((link, index) => {
                                    return(
                                        <li key={index} className={`border-b border-gray-200 w-full py-2`}>
                                            <Link to={link.path} className={`flex items-center space-x-4 font-Poppins text-[14px]`}>
                                                <div>{link.icon}</div>
                                                <h2>{link.label}</h2>
                                            </Link>
                                        </li>
                                    )
                                })
                            }                                    
                        </ul>
                    </div>
            </div>
        </section>
    </React.Fragment>
  )
}
