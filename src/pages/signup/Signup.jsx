import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup'
import RegistrationForm from './RegistrationForm'
import * as Gi from 'react-icons/gi'
import SignUpRegistration from './SignUpRegistration'
import SignUpRegistrationHome from './SignUpRegistrationHome'

const Signup = () => {

    const { 
        handleSignupChanges, 
        requiredValues, 
        setRequiredValues, 
        setBoolValidators, 
        boolValidators, 
        setRegistrationSuccessful 
    } = useSignup()

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    console.log(viewportWidth)

    return (
        <div className={`py-10 mx-auto bg-white bg-opacity-30 sm:px-5`}>               
            <SignUpRegistration 
                requiredValues={requiredValues} 
                boolValidators={boolValidators}
                setBoolValidators={setBoolValidators}
                setRequiredValues={setRequiredValues}
                handleSignupChanges={handleSignupChanges}
                setRegistrationSuccessful={setRegistrationSuccessful}    
            />             
        </div>
    )
}

export const SignupHome = () => {

    const { 
        handleSignupChanges, 
        requiredValues, 
        setRequiredValues, 
        setBoolValidators, 
        boolValidators, 
        setRegistrationSuccessful 
    } = useSignup()

    return (
                    
        <SignUpRegistrationHome 
            requiredValues={requiredValues} 
            boolValidators={boolValidators}
            setBoolValidators={setBoolValidators}
            setRequiredValues={setRequiredValues}
            handleSignupChanges={handleSignupChanges}
            setRegistrationSuccessful={setRegistrationSuccessful}    
        />             
      
    )
}


export default Signup


