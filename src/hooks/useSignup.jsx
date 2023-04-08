import React, { useState, useEffect } from "react";

const useValidation = () => {

    const [requiredValues, setRequiredValues] = useState({
        email: "",
        inistitute: "",
        department: "",
        password: "",
        confirm_password: "",
                  
  }) 

   const [boolValidators, setBoolValidators] = useState({
        nameFocus: false,
        lastFocus: false,
        emailFocus: false,
        pwdFocus: false,
        confirmPwdFocus: false,
        aggrement: false,
        validLName: false,
        validName: false,
        validEmail: false,
        passwordValidator: false,
        validMatchPassword: false
   })

  const [errors, setErrors] = useState({});
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false)

  const handleSignupChanges = (event) => {
    
    const type = event.target.type
    const name = event.target.name

    const value = type === 'checkbox' ? event.target.checked : event.target.value
    setRequiredValues(prev => ({
        ...prev,
        [name]: value
    }))

  }

  return { 
    handleSignupChanges,
    requiredValues, 
    boolValidators,
    setRequiredValues,
    setBoolValidators,
    isRegistrationSuccessful,
    setRegistrationSuccessful,
    errors 
  }

}

export default useValidation;