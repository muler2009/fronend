import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillSetting } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import user from '../../../assets/images/user.jpeg'



const UTopbar = () => {

  
  return (
    
    <React.Fragment>
        <section className={`w-full border-b-2 border-[#ddd] bg-white`}>
            {/* Wrapper for the content of top bar */}
            <div className={`flex justify-between items-center py-2 px-10`}>

                {/* Pointer section of the top bar */}
                <div className='flex items-center justify-center space-x-2'>
                   
                    <h1 className={`font-Oswald text-[#00796b] text-2xl tracking-wide`}> IeXitTutor.com</h1> 
                </div>             

                {/* Icon section of top bar  */}

                <div className={`mr-10`}>
                    <div className={`flex flex-row items-center space-x-1`}>
                        <div className={`w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 cursor-pointer relative`}>
                            <AiFillSetting className={`text-black`} size={20} />                   
                        </div>

                        <div className={``}>
                            <img src={user} alt="User Photo" className={`w-8 h-8 object-cover object-center rounded-full cursor-pointer`} />
                        </div>        
                    </div>
                </div>
            </div>
            
        </section>
    </React.Fragment>
  )
}




export default UTopbar ;