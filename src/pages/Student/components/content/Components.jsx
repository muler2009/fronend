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
        <section className={`w-full py-1 px-1`}>
            <div className={`flex flex-row justify-between items-center space-x-4`}>
            <div className={`w-1/3 flex shadow-xl bg-white rounded-lg`}>
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
                
                <div className={`w-1/3 flex shadow-xl bg-white rounded-lg`}>
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

                <div className={`w-1/3 flex shadow-xl bg-white rounded-lg`}>
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

export const ExamPackage = () => {
    const [open, set] = useState(true)

    return(
        <React.Fragment>
            <section className={`bg-[#ffffff] p-1 border-[1px] border-[#ddd]`}>
                <div className={`p-3 flex justify-between items-center`}>
                    <h1 className={`text-lg font-Poppins color text-[#071466]`}>Upcoming Exams</h1>
                    <div className={`cursor-pointer`} onClick={() => set(prev => !prev)}>
                        {open ? <BsFillCaretUpSquareFill size={25} color='#071466' /> : <BsCaretDownSquareFill size={25} color='#071466'/>}
                    </div>
                </div>
                {
                    open &&

                    <div className={`border-t-[1px] border-[#ddd] duration-300`}>
                        <div className={`mt-5`}>
                            <table className={`table table-striped`}>
                                <thead className={`bg-zinc-100`}>
                                        <th>#</th>
                                        <th>ModuleID</th>
                                        <th>Module Name</th>
                                        <th># of Question</th>
                                        <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Pro1234</td>
                                        <td>Programming</td>
                                        <td>50</td>
                                        <td>
                                            <AiFillEye />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </section>
        </React.Fragment>
    )
}
