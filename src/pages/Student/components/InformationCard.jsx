import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { MdEvent, MdRecentActors } from 'react-icons/md'
import * as Ai from 'react-icons/ai'
import { BsPlus, BsCaretDownSquareFill, BsFillCaretUpSquareFill } from 'react-icons/bs'
import { useGetModuleQuery } from '../../../features/module/moduleApiSlice'
import UpgradeAccountModal from './UpgradeAccountModal'

export const InformationCard = () => {
  
  const [upgradeModalshowState, setUpgradeModalShowState] = useState(false)

  const { data } = useGetModuleQuery()

  return (
    <React.Fragment>
        <section className={`w-full md:flex my-5`}>
            <div className={`flex flex-1 flex-wrap mx-10 ss:mx-16 sm:px-5 sm:flex md:flex-nowrap md:space-x-3`}>              
                <div className={`w-full sm:w-1/2 md:w-1/3 my-2 flex border-[1px] bg-white rounded-lg cursor-pointer`}>
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
                        <div className="flex  space-x-2 items-end justify-end border-[2px] border-black rounded-[50px] px-4 py-1 font-Poppins text-sm">
                            <Ai.AiFillEye className="text-[#071466] text-xl mr-1" /> view
                        </div>
                    </div>  
                </div>
                
                <div className={`w-full sm:w-1/2 md:w-1/3 my-2 flex border-[1px] bg-white rounded-lg cursor-pointer`}>
                    <div className={`w-full flex justify-between items-center py-5 px-7 space-x-3`}>                       
                        <div className="flex flex-col space-y-4 items-center">
                            <h1 className="text-sm font-Poppins text-[#828692]">Upcoming Exam</h1>
                            <div className={`font-Poppins`}>
                                <h2 className={`text-black text-6xl font-Roboto`}>
                                    {
                                        data?.filter(
                                        active => {return !active.moduleStatus; }).length
                                    } 
                                    <span className='text-[16px] rounded-lg bg-red-500 px-2 text-white'>set</span>
                                </h2>
                            </div>
                        </div>
                        <div className="flex  space-x-2 items-end justify-end border-[2px] ring-2 ring-red-700 text-white  rounded-[50px] px-4 py-1 font-Poppins text-sm bg-red-700">
                            <h1 onClick={() => setUpgradeModalShowState(prev => !prev)}>Upgrade</h1>
                        </div>
                    </div>  
                </div>

                <div className={`w-full my-2 md:w-1/3 flex border-[1px] bg-white rounded-lg`}>
                    <div className={`flex py-5 px-7 space-x-3`}>
                        <MdRecentActors size={50} color='#071466' />
                        <div className='flex flex-col justify-center'>
                            <span className={`font-Poppins text-sm`}>Recent Exam</span>
                            <span className={`inline-block`}>1</span>
                        </div>
                    </div>
                </div>
            </div>

            <UpgradeAccountModal
                upgradeModalshowState={upgradeModalshowState}
                setUpgradeModalShowState={setUpgradeModalShowState} 
            />
        </section>
    </React.Fragment>
  )
}


