import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddUserProfileMutation } from "../features/users/profileApiSlice";

const useRegistration = () => {
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    inistitute: "",
    department: "",
    phone: "",
    email: "",
    address: "",
    profilePicture: "",
  });

  const handleProfileDataChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;

    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    setProfileData((profileData) => ({
      ...profileData,
      [name]: value,
    }));
  };

  const [addUserProfile] = useAddUserProfileMutation();

  const onSaveClicked = async () => {
    try {
      await dispatch(addUserProfile(profileData)).unwrap();
    } catch (error) {
      // console.log(error)
    }
  };

  return {
    profileData,
    setProfileData,
    handleProfileDataChange,
    onSaveClicked,
  };
};

export default useRegistration;
