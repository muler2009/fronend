import React, { useState } from "react"
import {institution, department} from '../../../../common/selectItem'
import useRegistration from "../../../../hooks/useRegistration"
import * as ri from 'react-icons/ri'

const CustomRegistration = () => {

    const { 
        profileData,
        setProfileData,
        onSaveClicked,
        handleProfileDataChange,
       
    } = useRegistration()
    
    
    return (
      <React.Fragment>
        <section className={`flex flex-col`}> 
            <form onSubmit={(event) => event.preventDefault()} className='flex flex-col gap-5 font-Poppins px-16 py-5 bg-white border-b-2 border-green-700'>

                {/* Row one */}
                <div className={`flex space-x-7`}>
                     {/* fragment for Firstname */}
                    <div className={`w-1/3 `}>
                        <div className={`space-y-2`}>
                            <label htmlFor="firstname" className={`text-[15px]`}>First Name</label>
                            <input 
                                type="text" 
                                id="firstname" 
                                name="firstname"
                                placeholder="First name"
                                value={profileData.firstname}
                                onChange={handleProfileDataChange}
                                className={`input-sm bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your name</small>
                        </div>
                    </div>

                    {/* fragment for Middle Name */}
                    <div className={`w-1/3 `}>
                        <div className={`space-y-2`}>
                            <label htmlFor="middlename" className={`text-[15px]`}>Last Name</label>
                            <input 
                                type="text" 
                                id="middlename" 
                                name="middlename"
                                placeholder="Your Father name"
                                value={profileData.middlename}
                                onChange={handleProfileDataChange}
                                className={`input-sm bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Father name</small>
                        </div>

                    </div>

                    {/* fragment for Last Name */}
                    <div className={`w-1/3 `}>
                        <div className={`space-y-2`}>
                            <label htmlFor="lastname" className={`text-[15px]`}>Last Name</label>
                            <input 
                                type="text" 
                                id="lastname" 
                                name="lastname"
                                placeholder="Last name"
                                value={profileData.lastname}
                                onChange={handleProfileDataChange}
                                className={`input-sm bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Grand Father name</small>
                        </div>
                    </div>
                </div>

                {/* Row Two */}
                <div className={`flex mt-5 space-x-7`}>
                    {/* Fragment for Inistitute */}
                    <div className={`w-1/3`}>
                        <div className={`space-y-2 flex flex-col`}>
                            <label htmlFor="inistitute" className={`text-[15px]`}>Inistitiute</label>
                            <select id='inistitute' type='text' name='inistitute' value={profileData.inistitute} onChange={handleProfileDataChange} className={`input-sm bg-[#fafafa] py-2`}>
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
                    </div>

                    {/* Fragment for Inistitute */}
                    <div className={`w-1/3`}>
                        <div className={`flex flex-col space-y-2`}>
                                <label htmlFor="department" className={`text-[15px]`}>Department</label>
                                <select id='department' type='text' name='department' value={profileData.department} onChange={handleProfileDataChange}  className={`input-sm bg-[#fafafa] py-2`}>
                                    <option value="">---Select your Department---</option>
                                        {
                                            department.map(department => (
                                                <option key={department.deptId} value={department.name} >
                                                    {department.name}
                                                </option>
                                            ))
                                        }
                                </select>
                                <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your department</small>
                        </div>
                    </div>

                    <div className={`w-1/3`}>
                         
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
                </div>

                {/* Row Three */}
                <div className={`flex space-x-7`}>
                     {/* Fragment for E-mail */}
                    <div className={`w-1/3`}>
                        <div className={`space-y-2`}>
                            <label htmlFor="email" className={`text-[15px]`}>Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={profileData.email}
                                onChange={handleProfileDataChange}
                                className={`input-sm bg-[#fafafa] py-2`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your active email address</small>
                        </div>

                    </div>

                    {/* Fragment for Phone */}
                    <div className={`w-1/3`}>
                        <div className={`flex flex-col space-y-3`}>
                            <label htmlFor="phone" className={`text-[15px]`}>Phone Number</label>
                                <aside className={`flex`}>
                                    <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">+251</span>
                                    <input 
                                        type={`number`} 
                                        id="phone"
                                        name="phone"
                                        value={profileData.phone}
                                        onChange={handleProfileDataChange}
                                        className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`} 
                                    />
                                </aside>
                                <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your active phone number (e.g 912..)</small>
                        </div>
                    </div>
                                    
                    {/* Fragment for Address */}
                    <div className={`w-1/3`}>
                        <div className={`flex flex-col`}>
                            <label className={`inline-block font-Poppins mb-[0.5rem]`}>Address </label>
                            
                            <textarea 
                                type="text"
                                id="address"
                                name="address"
                                rows={5}
                                cols={60}
                                value={profileData.address}
                                onChange={handleProfileDataChange}
                                className={`bg-[#fafafa] w-full input-sm`}
                            />
                            <small className={`font-Quicksand text-sm text-[#6c757d]`}>Your address (optional)</small>
                        </div>
                    </div>
                    

                </div>
                
               
                    <div className={`flex justify-end py-3 px-3 space-x-2 bg-[#ffffff] cursor-pointer text-sm `}>
                        <button className={`py-2 px-3 flex justify-center items-center bg-gray-200 space-x-2 text-black w-1/6 disabled:opacity-25 disabled:cursor-default`}
                            onClick={() => {
                                onSaveClicked()
                                setProfileData("")
                            }}
                            disabled={
                                profileData.firstname === "" ||
                                profileData.middlename === "" ||
                                profileData.lastname ==="" || 
                                profileData.email === "" || 
                                profileData.department === "" || 
                                profileData.inistitute === "" || 
                                profileData.phone === "" ? true : false
                            }
                        >
                            <ri.RiSave3Line />
                            <p>Save</p>
                        </button>
                </div> 
                

            </form>
        </section> 
      </React.Fragment>
    )
  }
  
  export default CustomRegistration


 