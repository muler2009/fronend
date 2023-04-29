import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { MdEvent, MdRecentActors } from 'react-icons/md'
import { VscLayersActive } from 'react-icons/vsc'
import { BsPlus, BsCaretDownSquareFill, BsFillCaretUpSquareFill } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import InformationCards from '../ui/InformationCard'
import { useSelector } from 'react-redux'
import { currentModuleName } from '../../../../features/module/moduleSlice'
import { currentUserEmail } from '../../../../features/auth/authSlice'
import { useGetModuleQuery } from '../../../../features/module/moduleApiSlice'

export const InformationCard = () => {
  
  const { data } = useGetModuleQuery()

  return (
    <React.Fragment>
        <section className={`w-full md:flex my-5`}>
            <div className={`flex flex-1 flex-wrap mx-2 ss:mx-16 sm:px-5 sm:flex md:flex-nowrap md:space-x-3`}>              
                <div className={`w-full sm:w-1/2 md:w-1/3 my-2 flex shadow-xl bg-white rounded-lg`}>
                    <div className={`flex py-5 px-7 space-x-3`}>
                        <VscLayersActive size={50} color='#071466' />
                        <div className='flex flex-col justify-center'>
                            <span className={`font-Poppins text-sm`}>Active Moduless</span>
                            <div className={`font-Poppins w-10 h-10 rounded-full bg-green-500 flex justify-center items-center`}>
                                <h2 className={`text-white`}>
                                    {
                                         data?.filter(
                                          active => {return active.moduleStatus; }).length
                                    }
                                </h2>

                            </div>
                        </div>
                    </div>   
                </div>
                
                <div className={`w-full sm:w-1/2 md:w-1/3 my-2 flex shadow-xl bg-white rounded-lg`}>
                    <div className={`flex py-5 px-7 space-x-3`}>
                        <VscLayersActive size={50} color='#071466' />
                        <div className='flex flex-col justify-center'>
                            <span className={`font-Poppins text-sm`}>Upcoming Module</span>
                            <div className={`font-Poppins w-10 h-10 rounded-full bg-green-500 flex justify-center items-center`}>
                                <h2 className={`text-white`}>
                                    {
                                         data?.filter(
                                          active => {return !active.moduleStatus; }).length
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className={`w-full my-2 md:w-1/3 flex shadow-xl bg-white rounded-lg`}>
                    <div className={`flex py-5 px-7 space-x-3`}>
                        <MdRecentActors size={50} color='#071466' />
                        <div className='flex flex-col justify-center'>
                            <span className={`font-Poppins text-sm`}>Recent Exam</span>
                            <span className={`inline-block`}>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

