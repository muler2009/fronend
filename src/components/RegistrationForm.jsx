import React from "react"
import {institution, department} from '../common/SelectItem'


const Registration = () => {
    
    return (
      <React.Fragment>
        <section className={`flex flex-col`}>
            <form onSubmit={(event) => event.preventDefault()} className='flex flex-col font-Poppins px-10 py-5 '>

                <div className={`flex space-x-10`}>

                    {/* fragment for First name, Inistitute phone_number and image  */}
                    <div className={`w-1/2 flex flex-col gap-5`}>

                        <div className={`space-y-2`}>
                            <label htmlFor="firstname" className={`text-[15px]`}>First Name</label>
                            <input 
                                type="text" id="firstname" placeholder="First name"
                                className={`input-sm  bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your name</small>
                        </div>

                        <div className={`space-y-2 flex flex-col`}>
                            <label htmlFor="inistitution" className={`text-[15px]`}>Inistitiute</label>
                            <select id='inistituion' type='text' name='city'  className={`input-sm bg-[#fafafa] py-2`}>
                            <option value="">---Select your Institution---</option>
                            {
                                institution.map(inistitute => (
                                    <option key={inistitute.id} value={inistitute.name} >
                                        {inistitute.name}
                                    </option>
                                ))
                            }
                        </select>
                        <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your inistituion</small>
                        </div>

                        <div className={`flex flex-col space-y-3`}>
                            <label htmlFor="phone" className={`text-[15px]`}>Phone Number</label>
                                <aside className={`flex`}>
                                    <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">+251</span>
                                    <input 
                                        type={`number`} 
                                        id="phone"
                                        name="phone"
                                        className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`} 
                                    />
                                </aside>
                                <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your active phone number (e.g 912..)</small>
                        </div>

                        
                        <div className={`space-y-2`}>
                            <label className={`font-Poppins mb-[0.5rem] text-[15px]`}>Upload an Image</label>                   
                            <input 
                                type={`file`}
                                className={`font-Poppins input-md text-sm p-0 file:py-2 file:border-0 bg-[#fafafa] `}
                                // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Upload your Profile picture</small>
                        {/* <img src={image} className={`w-full py-3 object-cover object-center`} /> */}
                        </div>
                        
                      

                    </div>

                     {/* fragment for Lastname , department Email */}
                    <div className={`w-1/2 flex flex-col gap-5`}>

                        <div className={`space-y-2`}>
                            <label htmlFor="lastname" className={`text-[15px]`}>Last Name</label>
                            <input 
                                type="text" id="lastname" placeholder="Last name"
                                className={`input-sm bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Father name</small>
                        </div>

                        <div className={`flex flex-col space-y-2`}>
                            <label htmlFor="department" className={`text-[15px]`}>Department</label>
                            <select id='department' type='text' name='department'  className={`input-sm bg-[#fafafa] py-2`}>
                            <option value="">---Select your Department---</option>
                            {
                                department.map(department => (
                                    <option key={department.deptId} value={department.deptId} >
                                        {department.name}
                                    </option>
                                ))
                            }
                            </select>
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your department</small>
                        </div>

                        <div className={`space-y-2`}>
                            <label htmlFor="email" className={`text-[15px]`}>Email</label>
                            <input 
                                type="email" id="email" placeholder="Email Address"
                                className={`input-sm bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your active email address</small>
                        </div>

                    </div>
                </div>


                {/* fragment for Address information */}
               
                <div className={`flex flex-col py-5`}>
                    <label className={`inline-block font-Poppins mb-[0.5rem]`}>Address </label>
                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your address (optional)</small>
                    <textarea 
                        type="text"
                        id="address"
                        name="address"
                        rows={5}
                        cols={60}
                        className={`bg-[#fafafa] w-full input-sm`}
                    />
                </div>
        

                 {/* action buttons  */}
                 <div className="flex justify-between items-center py-10">
                    <button className={`btn-sm px-5 bg-[#0cd463] rounded-none text-white w-1/4 `}>Save</button>
                </div>

            </form>

        </section>
  
          
      </React.Fragment>
    )
  }
  
  export default Registration


 