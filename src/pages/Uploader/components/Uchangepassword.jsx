import React from 'react'
import { FaLock } from 'react-icons/fa'

const Uchangepassword = () => {

  return (
   <React.Fragment>
        <div className={`py-5 w-1/2 container mx-auto`}>
            <div className={`flex flex-col bg-[#ffffff] border-[1px] p-1`}>
                <div className={`rounded-tl-lg rounded-tr-lg bg-[#ddd] w-full px-5 py-3`}>
                    <h1 className={`font-Oswald tracking-wide text-xl`}>Change Password</h1>
                </div>
                <div className={`py-2 flex flex-col px-5 justify-start`}>
                  <p className={`font-Poppins text-sm mb-5`}>For Protection, make sure your password:</p>
                  <ul className={`font-Poppins text-sm list-disc px-8 leading-8 text-blue-500`}>
                    <li>Is longer than 7 characheters</li>
                    <li>Doesnot have to match with your username</li>
                    <li>Use differnet special characheters</li>
                  </ul>
                </div>

                <div className={`px-6`}>
                  <form method='' action='' className={`py-2 font-Poppins  flex flex-col gap-3`}>
                    {/* cuurent password */}
                    <div className='flex flex-col'>
                      <label htmlFor='current_password' className={`text-sm py-2`}>Current Password</label>
                      <input 
                        type="password"
                        className={`input-md `} 
                        placeholder='current password'
                        id='current_password'
                        name='current_password'
                        
                      />
                    </div>
                      {/* New password */}
                      <div className='flex flex-col'>
                        <label htmlFor='new_password' className={`text-sm py-2`}>New Password</label>
                        <input 
                          type="password"
                          className={`input-md `} 
                          placeholder='New password'
                          id='new_password'
                          name='new_password'
                          
                        />
                      </div>

                      <div className='flex flex-col'>
                      <label htmlFor='new_password' className={`text-sm py-2`}>Confirm Password</label>
                        <input 
                          type="password"
                          className={`input-md `} 
                          placeholder='Confirm password'
                          id='confirm_password'
                          name='confirm_password'
                        
                      />
                    </div>

                    <div className={`py-5 flex justify-end space-x-4`}>
                      <button className={`btn-sm text-white bg-red-400 rounded-none px-5`}>Cancel</button>
                      <button className={`btn-sm text-white bg-green-400 rounded-none px-5`}>Change Password</button>

                    </div>

                  </form>
                </div>
            </div>
        </div>
   </React.Fragment>
  )
}

export default Uchangepassword