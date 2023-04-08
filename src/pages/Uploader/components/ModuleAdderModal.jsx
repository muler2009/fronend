import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'
import { TfiSave } from 'react-icons/tfi'
// import { diificulty_level, department } from '../../../common/selectItem'; 
import useAddModule from '../../../hooks/useAddmodule'
import { useAddModuleMutation } from '../../../features/module/moduleApiSlice'



const diificulty_level = [
    { dlKey: 1, label: 'Easy' },
    { dlKey: 2, label: 'Medium' },
    { dlKey: 3, label: 'Hard' },

] 

const department = [
    {deptId: 1, name: 'Accounting'},
    {deptId: 2, name: 'Business Management'},
    {deptId: 3, name: 'Management'},
    {deptId: 4, name: 'Software Engineering'},
    {deptId: 5, name: 'Mechanical Engineering'},
    {deptId: 6, name: 'Electrical Engineering'},
    {deptId: 7, name: 'Civil Engineering'},
    {deptId: 8, name: 'Construction technology Management'},
]



const ModuleAdderModal = (props) => {

    const { addModuleLauncher, setAddModuleLauncher } = props
    const { moduleAddingAttributes, setModuleAddingAttributes, handleChangesOnModuleAdding, onCreateModuleClicked } = useAddModule()


    if(!addModuleLauncher) return null

    return (
    <React.Fragment>
        <section className='bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center' >
                <div className='flex flex-col bg-white rounded-lg relative container w-[50%] h-[50%] top-20  overflow-hidden'>
                    <div className={`flex justify-between items-center px-5 py-5 after:content-[" "] after:absolute after:top-12 afer:mr-10 after:w-full after:h-[1px] after:bg-[#ddd]`}>
                        <h1 className={`font-Poppins text-[15px] `}>Add Module</h1>
                        <div className='bg-zinc-100 rounded-full hover:bg-red-400 cursor-pointer' onClick={() => setAddModuleLauncher(prev => !prev)}>
                            <VscClose className='text-xl hover:text-white' />
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
                                        value={moduleAddingAttributes.moduleCode}
                                        onChange={handleChangesOnModuleAdding}
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
                                        value={moduleAddingAttributes.moduleName}
                                        onChange={handleChangesOnModuleAdding}
                                        className={`input-sm text-sm bg-[#fafafa] `}
                                        // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                                    />
                                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>Module Name</small>
                                {/* <img src={image} className={`w-full py-3 object-cover object-center`} /> */}
                                </div>

                                <div className={`flex flex-col`}>
                                    <h1 htmlFor='status' className={`text-[15px]`}>Status</h1> 
                                    <div className={`flex gap-7`}>
                                        <div className={`flex justify-start items-center space-x-4 `}>
                                            <div className={`py-5`}>
                                                <input 
                                                    type='checkbox'
                                                    name="status"
                                                    id="status"
                                                    value={moduleAddingAttributes.moduleStatus ? true : false}
                                                    onChange={handleChangesOnModuleAdding}
                                                    className={`text-sm bg-[#fafafa] rounded-none`}
                                                    // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                                                />
                                            </div>            
                                            <label htmlFor='status' className={`text-[15px]`}>Open</label> 

                                        </div>

                                        {/* <div className={`flex justify-start items-center space-x-4 `}>
                                            <div className={`py-5`}>
                                                <input 
                                                    type={`checkbox`}
                                                    name="isActive"
                                                    id="isActive"
                                                    size={20}
                                                    value={moduleAddingAttributes.status}
                                                    onChange={handleChangesOnModuleAdding}
                                                    className={`text-sm bg-[#fafafa] rounded-none`}
                                                    // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                                                />
                                            </div>            
                                            <label htmlFor='isActive' className={`text-[15px]`}>Hide</label> 

                                        </div> */}
                                    </div>
                                </div>

                            </div>

                            {/* section for second column */}
                            <div className={`w-1/2 flex flex-col space-y-4 font-Poppins`}>
                                {/* Module name */}
                                
                                <div className={`space-y-2`}>
                                    <label htmlFor='moduleForDepartment' className={`font-Poppins mb-[0.5rem] text-[15px]`}>Module For</label>                   
                                    <select id='moduleForDepartment' type='text' name='moduleForDepartment'  value={moduleAddingAttributes.moduleForDepartment} onChange={handleChangesOnModuleAdding} className={`select-sm bg-[#fafafa]`}>
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
                                    <select id="moduleCategory" name="moduleCategory" value={moduleAddingAttributes.moduleCategory} onChange={handleChangesOnModuleAdding} className={`select-sm bg-[#fafafa] `}>
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

                    {/* action button for module creation  */}

                    <div className={`flex justify-end px-5 font-Poppins`}>
                        <button className={`bg-[#eaecef] px-5 flex items-center justify-center space-x-2`}
                                onClick={() => {
                                    onCreateModuleClicked()
                                    setAddModuleLauncher(prev => !prev)
                                }}
                        >
                            <TfiSave size={20} /> 
                            <h1 className={`text-sm`}>Create</h1>
                        </button>
                    </div>

                   
                </div>
                   
            </section>
    </React.Fragment>
  )
}

export default ModuleAdderModal