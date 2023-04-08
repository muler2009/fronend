import React, {useEffect, useRef, useState} from 'react'
import * as Vsc from 'react-icons/vsc'
import * as Md from 'react-icons/md'

const ChangePasswordModal = ({changePwdModal, setChangePwdModal}) => {

    const passRef = useRef()

    const [currentPassowrd, setCuurrentPassword] = useState("")
    const [newPassowrd, setNewPassword] = useState("")
    const [confirmNewPassowrd, setConfirmNewPassword] = useState("")

   

    if(!changePwdModal) return null

    return (
        <section className='bg-black bg-opacity-10 inset-0 fixed top-0  flex justify-center sm:px-10'>
            <div className={`container mx-auto h-2/3 bg-white relative top-10 rounded-t-lg sm:w-full sm:h-[700px] lg:w-[40%] lg:h-2/3`}>
                <div className={`border-b-1 flex flex-col`}>
                    <div className={`flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-[#f7f7f7] w-full px-5 py-5 border-b-2 border-black `}> 
                        <h1 className={`font-Roboto font-normal text-xl text-black uppercase`}>Password Change</h1>
                        <Vsc.VscClose className={`hover:bg-red-400 cursor-pointer hover:text-white`} onClick={() => setChangePwdModal(prev => !prev)} />
                    </div>

                    {/* 2nd Row */}
                    {/* password change body elements i.e input fields */}
                    <div className={`px-5 py-5 relative `}>
                        <p className={`font-Poppins text-sm mb-5`}>For Protection, make sure your password:</p>
                        <ul className={`font-Poppins text-sm list-disc px-8 leading-8 text-blue-500 ` }>
                            <li>Is longer than 7 characheters</li>
                            <li>Doesn't have to match with your username</li>
                            <li>Use differnet special characheters</li>
                        </ul>
                        <div className={`flex justify-center items-center py-3 after:content-[""] after:absolute after:top-15 after:h-[1.5px] after:w-[35%] after:bg-[#c2c2c2] after:right-10 before:content-[""] before:absolute before:top-15 before:h-[1.5px] before:w-[35%] before:left-10 before:bg-[#ddd]`}> <Md.MdStarBorder /> <Md.MdStarBorder />
                        </div>
                    </div>

                    {/* 3rd Row */}
                    <div className={``}>

                        <form onSubmit={(event) => event.preventDefault()} className={`py-2 font-Poppins  flex flex-col gap-3 px-5`}>
                            {/* cuurent password */}
                            <div className='flex flex-col'>
                            <label htmlFor='current_password' className={`text-sm py-2`}>Current Password</label>
                            <input 
                                type="password"
                                className={`input-md w-1/2`} 
                                placeholder='current password'
                                id='current_password'
                                name='current_password'
                                ref={passRef}
                                // value={currentPassowrd}
                                // onChange={(event) => event.target.value}
                                
                            />
                            </div>
                            {/* New password */}
                            <div className='flex flex-col'>
                                <label htmlFor='new_password' className={`text-sm py-2`}>New Password</label>
                                <input 
                                type="password"
                                className={`input-md w-1/2 `} 
                                placeholder='New password'
                                id='new_password'
                                name='new_password'
                                // value={newPassowrd}
                                // onChange={(event) => event.target.value}
                                
                                />
                            </div>

                            <div className='flex flex-col'>
                            <label htmlFor='new_password' className={`text-sm py-2`}>Confirm Password</label>
                                <input 
                                type="password"
                                className={`input-md w-1/2`} 
                                placeholder='Confirm password'
                                id='confirm_password'
                                name='confirm_password'
                                // value={confirmNewPassowrd}
                                // onChange={(event) => event.target.value}
                                
                            />
                            </div>

                            <div className={`py-5 flex justify-end space-x-4`}>
                            <button className={`btn-sm text-white bg-red-400 rounded-none px-5`}>Cancel</button>
                            <button 
                                className={`btn-sm text-white bg-green-400 rounded-none px-5`}
                                // onClick={() => {
                                //     setCuurrentPassword('')
                                //     setNewPassword('')
                                //     setConfirmNewPassword('')
                                // }}
                                
                                >Change Password</button>

                            </div>

                        </form>
                    </div>
    
                
                 
    
                </div>
                
               
            </div>
        </section>
      )
}

export default ChangePasswordModal