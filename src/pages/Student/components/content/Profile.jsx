import React, { useState } from 'react'
import { MdManageAccounts } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as ri from 'react-icons/ri'
import { AiOutlineCaretRight } from 'react-icons/ai'
import CustomRegistration from '../ui/CustomRegistration'
import { useGetUserDataQuery, useGetSingleUserDataQuery, useAddUserProfileMutation } from '../../../../features/users/profileApiSlice'
import ProfileDetail from './ProfileDetail'
import EditProfileModal from '../ui/EditProfileModal'
import useRegistration from '../../../../hooks/useRegistration'
import { useParams } from 'react-router-dom'


const Profile = () => {

    const parameter = useParams()
const [date, setDate] = useState(new Date());
const [show, set] = useState(false)

const { data: userAccountInformation, isLoading, isSuccess, isFetching, isError } = useGetUserDataQuery({ refetchOnMountOrArgChange: true })


const [editProfile, setEditProfile] = useState(false)



  
  return (
    <React.Fragment>
        <section className={`w-full flex flex-col px-1`}>
            <div className='flex justify-between items-center my-1 py-3 px-4 bg-[#ffffff] border-b-2 border-[#c9c9c9]'>
                <div className={`flex space-x-5 items-center`}>
                    <MdManageAccounts size={40}/>
                    <h1 className='font-Oswald text-[#1a224e] text-2xl'>Account Information</h1>
                  
                </div>
                <div className={`font-Poppins flex items-center space-x-2`}>
                    <h2 className={`text-sm`}>Student</h2>
                    <AiOutlineCaretRight />
                    <h2 className={`text-sm`}>Profile</h2>
                    
                </div>
                
            </div>
           
            <CustomRegistration />
            
            
            <div className={`py-2 px-10 mt-1 bg-white`}>
                <h1 className={`font-Poppins`}>Your Inforamtion</h1>
                {
                    isLoading && <p>Loading the data ...</p>
                }
                {/* {
                    data?.length === 0 ? (
                        <div className={`flex flex-col  justify-center items-center p-20`}>     
                            <h1 className={`font-Oswald text-red-400 text-3xl`}>
                                No Data found for the user
                            </h1>                                
                        </div>

                    ): (
                        <ProfileDetail userAccountInformation={userAccountInformation} />
                        
                    )
                } */}
                {
                    isSuccess && (
                             <ProfileDetail userAccountInformation={userAccountInformation}  />
                    )
                }
            </div>

            <EditProfileModal editProfile={editProfile} setEditProfile={setEditProfile}  />


        </section>
    </React.Fragment> 
  )
}

export default Profile


