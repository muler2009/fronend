import React, { useState, useEffect, useRef } from "react";
// import {institution, department} from '../../common/SelectItem'
import { AiOutlineCheck, AiFillInfoCircle } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { BsPeopleFill, BsCheck2All } from "react-icons/bs";
import { FaEnvelope, FaTimesCircle, FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRegisterUserDataMutation } from "../../features/users/registerApiSlice";
import SuccessMessage from "../../components/ui/SuccessMessage";

import Swal from "sweetalert2";
import * as BsIcon from "react-icons/bs";
import * as Fa from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import { useRegisterStudentMutation } from "../../api/apiSlice";
import { toast } from "react-toastify";
import Loading from "../public/components/Loading";

const institution = [
  { name: "Addis Ababa Science and Technology University" },
  { name: "Adama Science and Technology University" },
  { name: "Bahirdar University" },
  { name: "Jimma University" },
  { name: "Gonder University" },
];

const department = [
  // { id: 1, name: "Mechanical Engineering" },
  { id: 2, name: "Accounting" },
  { id: 3, name: "Management" },
  // { deptId: 3, name: "Management" },
  // { deptId: 4, name: "Software Engineering" },
  // { deptId: 5, name: "Mechanical Engineering" },
  // { deptId: 6, name: "Electrical Engineering" },
  // { deptId: 7, name: "Civil Engineering" },
  // { deptId: 8, name: "Construction technology Management" },
];

const NAME_REGEX = /^[A-Za-z][A-Za-z0-9-_]{4,23}$/;
const EMAIL_VALIDATOR_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const MySwal = withReactContent(Swal);

const showSuccessAlert = () => {
  MySwal.fire({
    width: 600,
    heightAuto: true,
    padding: 0,
    position: "top",
    showConfirmButton: false,
    icon: "success",
    iconColor: "green",
    timerProgressBar: true,
    padding: 10,
    footer: <p className="font-Poppins">Best place to learn</p>,
    html: (
      <div className={`w-full flex flex-col gap-5 h-full relative`}>
        <div className={`py-2`}>
          <h1 className={`font-Oswald text-4xl tracking-wide text-green-400 `}>
            Successfully Registered!
          </h1>
        </div>
        <div
          className={`py-5 w-3/4 mx-auto before:absolute before:bg-[#ddd] before:content[""] before:h-[1px] before:w-full before:left-0 before:my-2 `}
        >
          <h1 className={`text-center mt-5 font-Oswald tracking-wide text-2xl`}>
            Congratulations
            <br />
            <span className={`font-Poppins text-[15px]`}>
              your account has been successfully created.
            </span>
          </h1>
        </div>

        <div className={`mx-auto w-2/3 font-Poppins leading-9`}>
          <h1 className={`text-sm py-4`}>
            we have sent an
            <span>
              <a
                href="/login"
                className={`font-Poppins text-blue-500 hover:underline text-sm mr-2`}
                onClick={() => Swal.close()}
              >
                {" "}
                activation link
              </a>
            </span>
            to your email account to complete the registration process
          </h1>
        </div>
      </div>
    ),
  });
};

const SignUpRegistrationHome = (props) => {
  const navigate = useNavigate();

  const {
    handleSignupChanges,
    requiredValues,
    setRequiredValues,
    errors,
    boolValidators,
    setBoolValidators,
    setRegistrationSuccessful,
    isRegistrationSuccessful,
  } = props;

  const focusReference = useRef({});
  const errorRef = useRef();
  const [success, setSuccess] = useState(false);

  const [createStudent] = useRegisterUserDataMutation();

  const [registerStudent, { isLoading: isRegisterStudentLoading }] =
    useRegisterStudentMutation();

  const onCreateClicked = async () => {
    // console.log(requiredValues);
    // try{
    //     // createStudent(requiredValues)
    await registerStudent({
      fullname: requiredValues?.fullname,
      email: requiredValues?.email,
      department: requiredValues?.department,
      password: requiredValues?.password,
      password_confirmation: requiredValues?.confirm_password,
      phone: requiredValues?.phone,
    })
      .then((res) => {
        console.log(res?.error?.data?.message);
        if (res?.error) {
          toast.error(res.error?.data?.message);
        } else {
          showSuccessAlert();
        }
      })
      .catch((err) => toast.error("Please try again"));

    //     setRequiredValues("");
    //     setBoolValidators(false)

    // }catch(error) {
    //     console.log("Error has Occured")
    // }
  };

  // useEffect(() => {
  //   focusReference.current.focus();
  // }, []);

  useEffect(() => {
    setBoolValidators({
      ...boolValidators,
      validFname: requiredValues.fullname?.length >= 4,
      // validFname: NAME_REGEX.test(requiredValues.fullname),
    });
  }, [requiredValues.fullname]);

  // useEffect(() => {
  //     setBoolValidators({
  //         ...boolValidators,
  //         validLName: NAME_REGEX.test(requiredValues.lastname)
  //     });
  // }, [requiredValues.lastname])

  useEffect(() => {
    setBoolValidators({
      ...boolValidators,
      validEmail: EMAIL_VALIDATOR_REGEX.test(requiredValues.email),
    });
  }, [requiredValues.email]);

  useEffect(() => {
    setBoolValidators({
      ...boolValidators,
      // passwordValidator: PWD_REGEX.test(requiredValues.password),
      passwordValidator:
        requiredValues.password?.length >= 6 &&
        requiredValues.password?.length <= 24,
      validMatchPassword:
        requiredValues.password === requiredValues.confirm_password,
    });
  }, [requiredValues.password, requiredValues.confirm_password]);

  return (
    <React.Fragment>
      <div className="flex flex-col relative mt-16">
        <h1 className="font-Oswald pb-10 xxs:text-[35px] lg:text-[25px] tracking-normal uppercase flex justify-center items-center after:xxs:content-[''] after:xxs:absolute after:xxs:top-16 after:xxs:w-[35%] after:xxs:h-[1px] after:xxs:-bottom-[0%] after:xxs:bg-[#ddd]">
          Create You Account
        </h1>

        <div className="shadow-md px-4 bg-[#fdfdfd] py-1">
          <form
            className={`flex flex-col space-y-5 py-10 px-10 xxs:px-1 sm:px-5`}
            onSubmit={(event) => event.preventDefault()}
          >
            {/* Fragment for Full Name */}
            <div className={`flex flex-col gap-2 w-full mx-auto`}>
              <div className={`flex justify-between items-center`}>
                <label htmlFor="email" className="font-Poppins text-muted">
                  Full Name
                </label>

                <div
                  className={`flex items-center ${
                    boolValidators.validFname
                      ? "ml-2 text-green-700 text-xs"
                      : "hidden"
                  }`}
                >
                  <GiCheckMark color="green" size={25} />
                  <span>Correct</span>
                </div>

                <FaTimesCircle
                  className={`${
                    boolValidators.validFname || !requiredValues.fullname
                      ? "hidden"
                      : "flex justify-center items-center ml-1"
                  }`}
                  color="red"
                  size={20}
                />
              </div>
              <div className={`py-2 flex-col`}>
                <div className={`flex`}>
                  <span className="px-4 inline-flex items-center min-w-fit border border-r-0 rounded-l-md border-gray-300 bg-white text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                    <Fa.FaUser size={20} color="gray" />
                  </span>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Your Full Name"
                    required
                    value={requiredValues.fullname}
                    aria-invalid={boolValidators.validFname ? "false" : "true"}
                    aria-describedby="emailnote"
                    onChange={handleSignupChanges}
                    onFocus={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        nameFocus: true,
                      }))
                    }
                    onBlur={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        nameFocus: false,
                      }))
                    }
                    className={`input-md w-full font-Poppins border border-l-0 rounded-l-none focus:border-[#ddd] bg-white `}
                  />
                </div>
                <p
                  id="emailnote"
                  className={`${
                    boolValidators.nameFocus &&
                    requiredValues.fullname &&
                    !boolValidators.validFname
                      ? "text-sm font-Poppins text-white rounded-lg bg-[#2c2727] py-3 px-2 mt-2 w-[80%] -bottom-5 flex"
                      : "absolute -left-[9999px]"
                  }`}
                >
                  <AiFillInfoCircle className={`mt-1 `} />
                  <span className={`ml-1 pr-10`}>
                    Name must be at least 4 character
                  </span>
                </p>
              </div>
            </div>

            {/* Fragment for Email */}
            <div className={`flex flex-col gap-2 w-full mx-auto`}>
              <div className={`flex justify-between items-center`}>
                <label htmlFor="email" className="font-Poppins text-muted">
                  Email
                </label>
                <div
                  className={`flex items-center ${
                    boolValidators.validEmail
                      ? "ml-2 text-green-700 text-xs"
                      : "hidden"
                  }`}
                >
                  <GiCheckMark color="green" size={25} />
                  <span>Correct</span>
                </div>
                <FaTimesCircle
                  className={`${
                    boolValidators.validEmail || !requiredValues.email
                      ? "hidden"
                      : "flex justify-center items-center ml-1"
                  }`}
                  color="red"
                  size={20}
                />
              </div>
              <div className={`py-2 flex-col`}>
                <div className={`flex`}>
                  <span className="px-4 inline-flex items-center min-w-fit border border-r-0 rounded-l-md border-gray-300 bg-white text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                    <FaEnvelope size={20} color="gray" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={requiredValues.email}
                    aria-invalid={boolValidators.validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onChange={handleSignupChanges}
                    onFocus={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        emailFocus: true,
                      }))
                    }
                    onBlur={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        emailFocus: false,
                      }))
                    }
                    className={`input-md w-full font-Poppins border border-l-0 rounded-l-none focus:border-[#ddd] bg-white `}
                  />
                </div>
                <p
                  id="emailnote"
                  className={`${
                    boolValidators.emailFocus &&
                    requiredValues.email &&
                    !boolValidators.validEmail
                      ? "text-sm font-Poppins text-white rounded-lg bg-[#2c2727] py-3 px-2 mt-2 w-[80%] -bottom-5 flex"
                      : "absolute -left-[9999px]"
                  }`}
                >
                  <AiFillInfoCircle className={`mt-1 `} />
                  <span className={`ml-1 pr-10`}>
                    Email must be valid (e.g example@domain.com)
                  </span>
                </p>
              </div>
            </div>
            {/* Fragment for Department */}

            <div className={`flex flex-col gap-2 w-full mx-auto font-Poppins`}>
              <label htmlFor="department" className={`text-[15px]`}>
                Department
              </label>
              <div className={`flex`}>
                <span className="px-4 inline-flex items-center min-w-fit border border-r-0 rounded-l-md border-gray-300 bg-white text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                  <Fa.FaUserGraduate size={20} color="gray" />
                </span>
                <select
                  id="department"
                  type="text"
                  name="department"
                  value={requiredValues.department}
                  onChange={handleSignupChanges}
                  className={`select-md font-Poppins border border-l-0 rounded-l-none focus:border-[#ddd] bg-white w-full`}
                >
                  <option value="">---Select your Department---</option>
                  {department.map((department) => (
                    <option key={department.id} value={department.name}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Fragment for Phone number  */}
            <div className={`flex flex-col gap-2 w-full mx-auto`}>
              <div className={`flex justify-between items-center`}>
                <label htmlFor="email" className="font-Poppins text-muted">
                  Phone Number
                </label>
                {/* <div
                        className={`flex items-center ${
                        boolValidators.validPhone
                            ? "ml-2 text-green-700 text-xs"
                            : "hidden"
                        }`}
                    >
                        <GiCheckMark color="green" size={25} />
                        <span>Correct</span>
                    </div>
                    <FaTimesCircle
                        className={`${
                        boolValidators.validPhone
                            ? "hidden"
                            : "flex justify-center items-center ml-1"
                        }`}
                        color="red"
                        size={20}
                    /> */}
              </div>
              <div className={`py-2 flex-col font-Poppins`}>
                <div className={`flex`}>
                  <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                    +251
                  </span>
                  <input
                    type={`number`}
                    id="phone"
                    name="phone"
                    // value={requiredValues.phone}
                    className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`}
                  />
                </div>
                {/* <small className={`font-Quicksand text-sm text-[#6c757d]`}>
                        Your active phone number (e.g 912..)
                    </small> */}
                <p
                  id="emailnote"
                  className={`${
                    boolValidators.phoneFocus &&
                    requiredValues.phone &&
                    !boolValidators.validPhone
                      ? "text-sm font-Poppins text-white rounded-lg bg-[#2c2727] py-3 px-2 mt-2 w-[80%] -bottom-5 flex"
                      : "absolute -left-[9999px]"
                  }`}
                >
                  <AiFillInfoCircle className={`mt-1 `} />
                  <span className={`ml-1 pr-10`}>
                    Phone number must be 9 digit
                  </span>
                </p>
              </div>
            </div>

            {/* Code Section  password */}

            <div className={`flex flex-col gap-2 w-full mx-auto`}>
              <div className={`flex justify-between items-center`}>
                <label htmlFor="password" className="font-Poppins text-muted">
                  Password
                </label>
                <div
                  className={`flex items-center ${
                    boolValidators.passwordValidator
                      ? "ml-2 text-green-700 text-xs"
                      : "hidden"
                  }`}
                >
                  <GiCheckMark color="green" size={25} />
                  <span>Correct</span>
                </div>
                <FaTimesCircle
                  className={`${
                    boolValidators.passwordValidator || !requiredValues.password
                      ? "hidden"
                      : "flex justify-center items-center ml-1"
                  }`}
                  color="red"
                  size={20}
                />
              </div>

              <div className={`py-2 flex-col`}>
                <div className={`flex`}>
                  <span className="px-4 inline-flex items-center border border-r-0 rounded-l-md border-gray-300 bg-white text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                    <FaLock size={18} color="gray" />
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={requiredValues.password}
                    onChange={handleSignupChanges}
                    required
                    aria-invalid={
                      boolValidators.passwordValidator ? "false" : "true"
                    }
                    aria-describedby="pwdnote"
                    placeholder="Type your password"
                    className={`input-md font-Poppins border border-l-0 rounded-l-none focus:border-[#ddd] bg-white`}
                    onFocus={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        pwdFocus: true,
                      }))
                    }
                    onBlur={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        pwdFocus: false,
                      }))
                    }
                  />
                </div>
                <p
                  id="pwdnote"
                  className={
                    boolValidators.pwdFocus && !boolValidators.passwordValidator
                      ? "text-sm font-Poppins text-white rounded-lg bg-[#2c2727] py-3 px-2 mt-2  -bottom-5 flex"
                      : "absolute -left-[9999px]"
                  }
                >
                  <AiFillInfoCircle className={`mt-1`} />
                  <span className={`pl-3`}>
                    8 to 24 characters.
                    <br />
                    {/* Must include uppercase and lowercase letters, a number and a
                        special character.
                        <br />
                        Allowed special characters:
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>
                        <span aria-label="hashtag">#</span>
                        <span aria-label="dollar sign">$</span>
                        <span aria-label="percent">%</span> */}
                  </span>
                </p>
              </div>
            </div>

            {/* Code Section for Confirm  password */}

            <div className={`flex flex-col gap-2 w-full mx-auto`}>
              <div className={`flex justify-between items-center`}>
                <label
                  htmlFor="confirm_password"
                  className="font-Poppins text-muted"
                >
                  Confirm Password
                </label>
                <div
                  className={`flex items-center ${
                    boolValidators.validMatchPassword && requiredValues.password
                      ? "ml-2 text-green-700 text-xs"
                      : "hidden"
                  }`}
                >
                  <GiCheckMark color="green" size={25} />
                  <span>Correct</span>
                </div>
                <FaTimesCircle
                  className={`${
                    boolValidators.validMatchPassword ||
                    !requiredValues.confirm_password
                      ? "hidden"
                      : "flex justify-center items-center ml-1"
                  }`}
                  color="red"
                  size={20}
                />
              </div>

              <div className={`py-2 flex-col`}>
                <div className={`flex`}>
                  <span className="px-4 inline-flex items-center min-w-fit border border-r-0 rounded-l-md border-gray-300 bg-white text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                    <FaLock size={18} color="gray" />
                  </span>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={requiredValues.confirm_password}
                    onChange={handleSignupChanges}
                    required
                    aria-invalid={
                      boolValidators.validMatchPassword ? "false" : "true"
                    }
                    aria-describedby="confirmnote"
                    placeholder="Re-Type your password"
                    className={`input-md font-Poppins border border-l-0 rounded-l-none focus:border-[#ddd] bg-white w-full`}
                    onFocus={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        confirmPwdFocus: true,
                      }))
                    }
                    onBlur={() =>
                      setBoolValidators((boolValidators) => ({
                        ...boolValidators,
                        confirmPwdFocus: false,
                      }))
                    }
                  />
                </div>

                <p
                  id="confirmnote"
                  className={
                    boolValidators.confirmPwdFocus &&
                    !boolValidators.validMatchPassword
                      ? "text-sm font-Poppins text-white rounded-lg bg-[#2c2727] py-3 px-2 mt-2 w-[80%] -bottom-5 flex"
                      : "absolute -left-[9999px]"
                  }
                >
                  <AiFillInfoCircle className={`mt-1`} />
                  <span className={`pl-3`}>
                    Must match the first password input field.
                  </span>
                </p>
              </div>
            </div>

            <div className={`flex flex-col gap-2 w-full mx-auto`}>
              <div className="flex flex-row justify-start items-center space-x-2">
                <aside className={``}>
                  <input
                    type="checkbox"
                    name="aggrement"
                    id="aggrement"
                    className="input-md"
                    onChange={handleSignupChanges}
                  />
                </aside>
                <p
                  htmlFor="aggrement"
                  className="font-Poppins text-sm text-muted"
                >
                  I have read the
                  <span className="text-blue-500 ml-1">terms of Service.</span>
                  <a
                    href="#"
                    className="text-sm text-red-500 ml-1 hover:underline"
                  >
                    Click here to read
                  </a>
                </p>
              </div>
              <div className={`text-sm flex space-x-3`}>
                <p>Already registered ?</p>
                <span className={``}>
                  <Link
                    to={`/login`}
                    className={`text-blue-700 font-Poppins hover:underline`}
                  >
                    Sign In
                  </Link>
                </span>
              </div>
            </div>

            {/* Create An Account Button */}
            <div className={`md:flex ss:w-full ss:mx-auto pb-5`}>
              {!isRegisterStudentLoading ? (
                <button
                  className="w-full px-2 bg-[#3C4852] text-sm rounded-none text-white font-Poppins cursor-pointer disabled:opacity-25 disabled:cursor-default"
                  onClick={() => {
                    onCreateClicked();
                  }}
                  disabled={
                    !boolValidators.validEmail ||
                    requiredValues.inistitute === "" ||
                    requiredValues.department === "" ||
                    !boolValidators.validMatchPassword ||
                    !requiredValues.aggrement
                      ? true
                      : false
                  }
                >
                  Create an account
                </button>
              ) : (
                <Loading />
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpRegistrationHome;
