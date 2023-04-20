import React from 'react'
import useSignup from '../../hooks/useSignup'
import RegistrationForm from './RegistrationForm'
import * as Gi from 'react-icons/gi'
import SignUpRegistration from './SignUpRegistration'

const Signup = () => {

    const { 
        handleSignupChanges, 
        requiredValues, 
        setRequiredValues, 
        setBoolValidators, 
        boolValidators, 
        setRegistrationSuccessful 
    } = useSignup()

    return (
        <div className='container mx-auto py-10 bg-white bg-opacity-30 sm:px-5'>
            <div className={`w-full mx-auto h-full rounded-lg flex flex-col justify-center items-center shadow-lg bg-white border-2 border-[#7c60b8] py-5 relative 
                 sm:border-green-700 md:w-4/5`}>
                {/* Fragment for displaying the key */}

                {/* Fragment for displaying the key */}
                <div className={`mt-4 flex flex-col justify-center items-center w-1/2 mx-auto after:content-[''] after:absolute after:top-28 after:w-1/2 after:h-[2px] after:bg-[#9d88c9] `}>
                    <h1 className={`font-Oswald text-3xl py-4 text-center`}>
                        Create your Account
                    </h1>
                </div>
                        
                    <SignUpRegistration 
                        requiredValues={requiredValues} 
                        boolValidators={boolValidators}
                        setBoolValidators={setBoolValidators}
                        setRequiredValues={setRequiredValues}
                        handleSignupChanges={handleSignupChanges}
                        setRegistrationSuccessful={setRegistrationSuccessful}    
                    />  
                
            </div>
        </div>

        // <div className="flex md:flex">
        //     <div className="w-full bg-white p-5 border-[2px]">
        //     <SignUpRegistration 
        //        requiredValues={requiredValues} 
        //        boolValidators={boolValidators}
        //        setBoolValidators={setBoolValidators}
        //        setRequiredValues={setRequiredValues}
        //        handleSignupChanges={handleSignupChanges}
        //        setRegistrationSuccessful={setRegistrationSuccessful}    
        //     />  
        //     </div>
        // </div>
    )
}

export default Signup