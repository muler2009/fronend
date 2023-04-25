import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { MdEvent, MdRecentActors } from 'react-icons/md'
import * as Ai from 'react-icons/ai'
import { BsPlus, BsCaretDownSquareFill, BsFillCaretUpSquareFill } from 'react-icons/bs'
import { useGetModuleQuery } from '../../../features/module/moduleApiSlice'
import UpgradeAccountModal from './UpgradeAccountModal'
import ShowResultOfQuiz from '../qmodule/ShowResultOfQuiz'
import { set } from 'date-fns'

export const InformationCard = () => {
  
  const [upgradeModalshowState, setUpgradeModalShowState] = useState(false)
  const [show, setShow] = useState(false)

  const { data } = useGetModuleQuery()

  return (
    <React.Fragment>
        <section className={`w-full md:flex my-1 bg-zinc-50 py-5`}>
            <div className={`flex flex-1 flex-wrap mx-10 ss:mx-16 sm:px-5 sm:flex md:flex-nowrap md:space-x-3`}>              
                <div className={`w-full sm:w-1/2 md:w-1/3 my-2 flex border-[1px] border-b-[4px] border-b-green-500 bg-white rounded-lg cursor-pointer`}>
                    <div className={`w-full flex justify-between items-center py-5 px-7 space-x-3`}>                       
                        <div className="flex flex-col space-y-4 items-center">
                            <h1 className="text-sm font-Poppins text-[#828692]">Active Exam</h1>
                            <div className={`font-Poppins`}>
                                <h2 className={`text-black text-6xl font-Roboto`}>
                                    {
                                        data?.filter(
                                        active => {return active.moduleStatus; }).length
                                    } 
                                    <span className='text-[16px] rounded-lg bg-green-500 px-2 text-white'>set</span>
                                </h2>
                            </div>
                        </div>
                        <div className="flex space-x-2 items-end justify-end border-[2px] border-black rounded-[50px] px-4 py-1 font-Poppins text-sm mt-10">
                            <Ai.AiFillEye className="text-[#071466] text-xl mr-1" /> view
                        </div>
                    </div>  
                </div>
                
                <div className={`w-full sm:w-1/2 md:w-1/3 my-2 flex border-[1px]  border-b-[4px] border-b-red-500 bg-white rounded-lg cursor-pointer`}>
                    <div className={`w-full flex justify-between items-center py-5 px-7 space-x-3`}>                       
                        <div className="flex flex-col space-y-4 items-center">
                            <h1 className="text-sm font-Poppins text-[#828692]">Upcoming Exam</h1>
                            <div className={`font-Poppins`}>
                                <h2 className={`text-black text-6xl font-Roboto`}>
                                    {
                                        data?.filter(
                                        active => {return !active.moduleStatus; }).length
                                    } 
                                    <span className='text-[16px] rounded-lg bg-[#e6720c] px-2 text-white'>set</span>
                                </h2>
                            </div>
                        </div>
                        <div className="flex  space-x-2 items-end justify-end border-[2px] ring-2 ring-[#e6720c] text-white mt-10 rounded-[50px] px-4 py-1 font-Poppins text-sm bg-[#e6720c]">
                            <h1 onClick={() => setUpgradeModalShowState(prev => !prev)}>Get Access</h1>
                        </div>
                    </div>  
                </div>

                <div className={`w-full sm:justify-center md:w-1/3 lg:w-1/4 my-2 flex border-[1px] border-b-[4px] border-b-sky-500 bg-white rounded-lg cursor-pointer`}>
                    <div className={`w-full flex justify-between items-center py-5 px-7 space-x-3`}>                       
                        <div className="flex flex-col space-y-4 items-center">
                            <h1 className="text-sm font-Poppins text-[#828692]">Recently Taken</h1>
                            <div className={`font-Poppins`}>
                                <h2 className={`text-black text-6xl font-Roboto`}>
                                    {
                                        data?.filter(
                                        active => {return active.moduleStatus; }).length
                                    } 
                                   
                                </h2>
                            </div>
                        </div>
                        <div className="flex mt-10 space-x-2 items-end justify-end border-[2px] ring-2 ring-sky-500 text-white  rounded-[50px] px-4 py-1 font-Poppins text-sm bg-sky-500">
                            <h1 onClick={() => setShow(prev => !prev)}>Show Result</h1>
                        </div>

                    </div>  
                </div>
            </div>

            <UpgradeAccountModal upgradeModalshowState={upgradeModalshowState} setUpgradeModalShowState={setUpgradeModalShowState} />
            <ShowResultOfQuiz show={show} setShow={setShow} />
        </section>
    </React.Fragment>
  )
}


