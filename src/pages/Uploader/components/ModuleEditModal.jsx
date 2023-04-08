import React, { useState } from 'react'

import * as Vsc from 'react-icons/vsc'
import ModuleAdderModal from './ModuleAdderModal'
import { diificulty_level, department } from '../../../common/selectItem'

const ModuleEditModal = (props) => {

    const { editModal, setEditModal, selectedRow, title } = props

    if(!editModal) return null
  

    return (
        <section className='bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center z-10'>
            <div className={`bg-white w-1/2 h-1/2 relative top-10 flex flex-col rounded-t-lg`}>
                <div className={`py-2 px-10 flex justify-between items-center m-[1px] rounded-t-lg border-b-2`}>
                    <h1 className={`font-Oswald text-2xl px-4 py-1 tracking-wide`}>{title}</h1>
                    <div className={`w-5 h-5 cursor-pointer hover:rounded-full hover:bg-zind-200 hover:text-black`}>
                        <Vsc.VscClose size={20} onClick={() => setEditModal(prev => !prev)} />
                    </div>
                </div>  
                
                <div className={`w-full p-5`}>
                        <form className={`flex space-x-5`} >
                            
                            {/* section for first column */}
                            <div className={`w-1/2 flex flex-col space-y-4 font-Poppins`}>
                                {/* Module name */}
                                
                                <div className={`space-y-2`}>
                                    <label htmlFor='moduleCode' className={`mb-[0.5rem] text-[15px]`}>Module Code</label>                   
                                    <input 
                                        type={`text`}
                                        name="moduleCode"
                                        id="moduleCode"
                                        
                                        className={`input-sm text-sm bg-[#fafafa] `}
                                        // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                                    />
                                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>Module code (e.g SWENG001)</small>
                                {/* <img src={image} className={`w-full py-3 object-cover object-center`} /> */}
                                </div>

                                {/* Module name */}
                                <div className={`space-y-2`}>
                                    <label htmlFor='moduleName' className={`mb-[0.5rem] text-[15px]`}>Module Name</label>                   
                                    <input 
                                        type={`text`}
                                        name="moduleName"
                                        id="moduleName"
                                        
                                        className={`input-sm text-sm bg-[#fafafa] `}
                                        // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                                    />
                                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>Module Name</small>
                                {/* <img src={image} className={`w-full py-3 object-cover object-center`} /> */}
                                </div>

                            </div>

                            {/* section for second column */}
                            <div className={`w-1/2 flex flex-col space-y-4 font-Poppins`}>
                                {/* Module name */}
                                
                                <div className={`space-y-2`}>
                                    <label htmlFor='moduleForDepartment' className={`font-Poppins mb-[0.5rem] text-[15px]`}>Module For</label>                   
                                    <select id='moduleForDepartment' type='text' name='moduleForDepartment'  className={`select-sm bg-[#fafafa]`}>
                                        <option value="">---Select your Department---</option>
                                            {
                                                department.map(department => (
                                                    <option key={department.deptId} value={department.name} >
                                                        {department.name}
                                                    </option>
                                                ))
                                            }
                                    </select>
                                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>Department</small>
                                {/* <img src={image} className={`w-full py-3 object-cover object-center`} /> */}
                                </div>

                                {/* Module name */}
                                <div className={`space-y-2`}>
                                    <label htmlFor="moduleCategory" className={`font-Poppins mb-[0.5rem] text-[15px]`}>Module Category</label>                   
                                    <select id="moduleCategory" name="moduleCategory"  className={`select-sm bg-[#fafafa] `}>
                                        <option>--Select Diffculty level --</option>
                                        {
                                            diificulty_level.map((level, index) => {
                                                return(
                                                    <option key={index} className={`py-2`}>{level.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>Select diffculty level</small>
                                {/* <img src={image} className={`w-full py-3 object-cover object-center`} /> */}
                                </div>

                            </div>


                        </form>
                    </div>
            </div>
        </section>
    )
}

export default ModuleEditModal