import React from 'react'
import * as Vsc from 'react-icons/vsc'
import {BsQuestionCircleFill } from 'react-icons/bs'
import { Div } from '../../../assets/css/styledComponents'

const LogoutConfirmationModal = (props) => {

  const { logout, setLogout} = props
  

  if(!logout) return null;
  return (
    <section className='bg-black bg-opacity-5 inset-0 fixed top-0  flex justify-center'>
        <Div className="bg-[#e8e8e8] w-1/2 h-1/3 lg:w-1/3 lg:h-[25%] relative top-24 border-[1px] border-[#c2c2c2] rounded-lg">
            <Div className={`flex justify-between items-center rounded-tl-lg rounded-tr-lg w-full px-5 py-3`}>
                <h1 className={`font-Roboto tracking-wide text-xl`}>Confirm Logout</h1>
                <Vsc.VscClose className={`hover:bg-red-400 cursor-pointer`} onClick={() => setLogout(prev => !prev)} />
            </Div>

            <Div className="flex flex-col px-10 ">
                <Div className="flex space-x-8 mt-5">
                    <BsQuestionCircleFill size={70}/>
                    <h1 className="flex justify-end items-center text-[14px] font-Poppins">Are you sure you want to Logout ?</h1>
                </Div>
                <Div className="flex space-x-5 w-1/2 mx-auto">
                    <button className="btn-sm bg-[#fcfcfc] px-5">Logout</button>
                    <button className="btn-sm bg-[#fcfcfc] px-5" onClick={() => setLogout(prev => !prev)}>Cancel</button>

                </Div>
               

            </Div>
        </Div>
    </section>
  )
}

export default LogoutConfirmationModal