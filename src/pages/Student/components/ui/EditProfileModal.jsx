import React from 'react'
import * as vsc from 'react-icons/vsc'
import CustomRegistration from './CustomRegistration'

const EditProfileModal = (props) => {

  const { editProfile, setEditProfile, profileData, setProfileData, handleProfileDataChange} = props

  if(!editProfile) return null

  return (
    <React.Fragment>
           <section className='bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center min-h-screen' >
               <div className={`bg-[#ffffff] relative top-10 w-1/2 flex flex-col rounded-t-lg h-128` }>
                    <div className={`py-5 px-5 flex justify-between items-center border-b-2`}>
                        <h1 className={`font-Oswald tracking-wide text-xl`}>Edit Profile</h1>
                            <vsc.VscClose className={`hover:bg-red-400 cursor-pointer`} onClick={() => setEditProfile(prev => !prev)} />
                        </div>
                    <div className={`h-20`}>
                        <CustomRegistration profileData={profileData} setProfileData={setProfileData} handleProfileDataChange={handleProfileDataChange} />
                    </div>
               </div>
        </section>
    </React.Fragment>
  )
}

export default EditProfileModal