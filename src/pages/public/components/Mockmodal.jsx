import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Io from 'react-icons/io5'

const backdrop = {
    init: { opacity : 0 },
    visible: { opacity: 1 }
}

const Mockmodal = (props) => {
  const { redirect, setRedirect } = props  

  return (
    <React.Fragment>
        <AnimatePresence>

            {
                redirect && (
                    <motion.div 
                        variants={backdrop} 
                        animate="visible" 
                        onClick={() => setRedirect(prev => !prev)}
                        className="bg-black bg-opacity-10 inset-0 fixed top-0 z-50 xxs:px-4 ss:px-8 sm:px-12">
                        
                        <motion.div className="bg-white xxs:w-full xxs:px-3 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto relative top-20 rounded-lg py-10">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex space-x-5 items-center">
                                    <Io.IoInformationCircle className="text-[80px] text-[#00bdff]" />
                                    <h1 className="font-Oswald uppercase text-[30px]">Almost <span className="text-[#00bdff]">there</span></h1>

                                </div>
                                <div className='bg-red-50 mt-10 px-5 ml-5 mr-5 border-l-[5px] border-red-100 xxs:px-1 xxs:ml-3 xxs:mr-3'>
                                    <p className='font-Poppins text-sm py-5 text-justify px-10 indent-2 leading-6 xxs:px-5'>
                                        if you already registered on <Link to='/' className='text-blue-500 cursor-pointer hover:underline'>lefetena.com</Link>, please click the login button below, otherwise you need to create an account to get the mock question for free. click the button based on your preference.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-3 xxs:w-full md:w-1/2 mx-auto my-5'>
                                    <Link to="/login">
                                        <button className="btn-sm px-10 w-full rounded-full hover:bg-[#00bdff] hover:text-white">Login</button>
                                    </Link>

                                    <Link to="/signup">
                                        <button className="btn-sm px-10 w-full rounded-full hover:bg-[#00bdff] hover:text-white">Create an Account</button>
                                    </Link>
                                    
                                </div>

                            </div>
                        </motion.div>

                    </motion.div>
                )
            }
        </AnimatePresence>

    </React.Fragment>
 
  )
}

export default Mockmodal