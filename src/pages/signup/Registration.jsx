import React, { useState } from 'react'
import  RegistrationForm from './RegistrationForm'

import useValidation from '../../hooks/useSignup'
import SuccessMessage from '../../components/ui/SuccessMessage'

const Registration = () => {

    const { handleRegistrationChanges, requiredValues, setRequiredValues, setBoolValidators, boolValidators, errors, isRegistrationSuccessful, setRegistrationSuccessful } = useValidation()

    const [success, setSuccess] = useState(false)
    

    return (
        <React.Fragment>          
            <section className='container mx-auto py-10 relative'>
                <div className='w-full mx-16 flex space-x-1'>
                    <div className='w-1/3 h-[750px] border-[1px] border-[#c9c9c9] bg-[#fafafa] flex flex-col justify-between items-center'>
                        <h1 className='font-Oswald text-xl text-black p-5'>
                            Instruction for Registration
                        </h1>
                        <div className={`font-Poppins text-sm`}>
                            <ul className={`list-disc px-8 leading-8 text-blue-500`}>
                            
                                <li>Is longer than 7 characheters</li>
                                <li>Doesnot have to match with your username</li>
                                <li>Use differnet special characheters</li>

                                <li>Is longer than 7 characheters</li>
                                <li>Doesnot have to match with your username</li>
                                <li>Use differnet special characheters</li>

                                <li>Is longer than 7 characheters</li>
                                <li>Doesnot have to match with your username</li>
                                <li>Use differnet special characheters</li>                            
                            </ul>
                        </div>
                        
                    </div>
                    {/* right section  */}

                    <div className='w-2/4 flex flex-col justify-center items-center bg-sky-50 p-10'>
                        {/* Title Section */}
                        <div className='flex justify-center items-center'>
                            <h1 className='font-Oswald text-[#1a224e] text-3xl'>Create your Account Here!</h1>
                        </div>

                        {/* Registration form  */}
                        <div className='w-full'>
                            <RegistrationForm 
                                requiredValues={requiredValues} 
                                boolValidators={boolValidators}
                                setBoolValidators={setBoolValidators}
                                setRequiredValues={setRequiredValues}
                                handleRegistrationChanges={handleRegistrationChanges}
                                setRegistrationSuccessful={setRegistrationSuccessful} 
                                
                            />    
                        </div>
                    </div>
                </div>
            </section>                       
        </React.Fragment>
  )
}

export default Registration;

