import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { AiOutlineLogin } from "react-icons/ai";
import { FaEnvelope, FaLock } from "react-icons/fa";
import useLogin from "../../hooks/useLogin";
import Spinner from "../../components/common/Spinner";
import axios from "axios";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const { isSuccess, isError, errorMsg, user } = useSelector(
    (state) => state.auth
  );

  const [error, setError] = useState();

  const emailRef = useRef(); // just for referring the email input field
  const errorReference = useRef(); // A reference for error

  const { isLoading } = useLoginMutation();
  const dispatch = useDispatch();

  const {
    loginAttributes,
    email,
    password,
    setEmail,
    setPassword,
    errorMessage,
    errRef,
    setErrorMessage,
    setLoginAttributes,
    loginClicked,
  } = useLogin();

  // To focus on the email field when the component mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // For Error message field when the component mount
  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  // const loginUser = (event) => {
  //     event.preventDefault();
  //     axios.post("http://localhost:5000/authenticationAPI/login",
  //     {
  //         email, password
  //     }).then((response) => {
  //         console.log("response", response)
  //         localStorage.setItem("loginCredintials", JSON.stringify({
  //             userLogin: true,
  //             token: response.data.accessToken
  //         }))
  //     }).catch(error => setError(error.response.data.message))
  // }

  useEffect(() => {
    if (isSuccess) {
      console.log(user);
      navigate("/student");
      toast.success("Welcome!");
    }

    isError && toast.error(errorMsg);
  }, [isSuccess, isError]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="flex md:flex justify-center mt-9 mb-[17rem] xs:px-5 sm:px-10">
          <div className="w-full bg-sky-50 rounded-lg -px-4 md:w-3/4 lg:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <div className="border-b-2 border-white w-full py-10 flex justify-center items-center bg-sky-200">
                <h1 className="text-3xl font-Oswald text-green-700 pt-10">
                  Please login to your account
                </h1>
              </div>

              <div className="w-1/2 bg-sky-50 relative">
                <p
                  ref={errRef}
                  className={
                    errorMessage
                      ? "text-red-700 font-Poppins flex justify-center items-center py-2"
                      : "absolute -left-[9999px]"
                  }
                  aria-live="assertive"
                >
                  {errorMessage}
                </p>
                <form className="text-black" onSubmit={loginClicked}>
                  <div className="py-9 flex flex-col space-y-9">
                    {/* Email field */}
                    <div className="relative flex-row items-center">
                      <FaEnvelope
                        color="gray"
                        className="absolute z-10 mx-3 top-4"
                      />
                      <label
                        htmlFor="email"
                        className="relative cursor-pointer"
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          ref={emailRef}
                          value={email}
                          autoComplete="off"
                          //onChange={handleLoginChanges}
                          onChange={(event) => setEmail(event.target.value)}
                          aria-describedby="email_indicator"
                          placeholder="Enter your Email Address"
                          className={`w-full font-Poppins input-md pl-9 py-3 text-black border-opacity-50 outline-none focus:border-black-500  placeholder-gray-400 placeholder-opacity-1 transition duration-200`}
                          onFocus={() =>
                            setLoginAttributes((prev) => ({
                              ...prev,
                              loginEmailFocus: true,
                            }))
                          }
                          onBlur={() =>
                            setLoginAttributes((prev) => ({
                              ...prev,
                              loginEmailFocus: false,
                            }))
                          }
                        />

                        <span
                          id="email_indicator"
                          className={`${
                            loginAttributes.loginEmailFocus
                              ? "font-Poppins text-black text-opacity-100 absolute left-5 -top-4 px-2 transition duration-200 bg-sky-50 input-text"
                              : "absolute -left-[9999px]"
                          }`}
                        >
                          Email Address
                        </span>
                      </label>
                    </div>

                    {/* password InputField */}

                    <div className="relative flex-row items-center">
                      <FaLock
                        color="gray"
                        className="absolute z-10 mx-3 top-4"
                      />
                      <label
                        htmlFor="password"
                        className="relative cursor-pointer"
                      >
                        <input
                          type={`password`}
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          //onChange={handleLoginChanges}
                          onChange={(event) => setPassword(event.target.value)}
                          className={`w-full font-Poppins input-md pl-9 py-3 text-black border-opacity-50 outline-none focus:border-black-500  placeholder-gray-400 placeholder-opacity-1 transition duration-200 `}
                        />
                        <span className="font-Poppins text-white text-opacity-100 absolute left-5 top-12 px-2 transition duration-200 bg-sky-50 input-password">
                          Password
                        </span>
                      </label>
                    </div>

                    <div className="space-y-2">
                      <Link to={`/forgotpassword`}>
                        <p className="font-Poppins my-0 text-sm text-blue-600 hover:underline">
                          Forgot your password ?
                        </p>
                      </Link>
                      <p className="font-Poppins text-sm m-0">
                        Don't have an account?{" "}
                        <span className="text-sm text-blue-600 hover:underline">
                          <Link to={`/signup`}>Register</Link>
                        </span>{" "}
                        By Clicking here.
                      </p>
                    </div>

                    <div
                      className={`flex justify-start items-center space-x-3`}
                    >
                      <button
                        type="submit"
                        className={`font-Poppins w-full text-sm px-4 bg-[#3C4852] text-white flex justify-center items-center space-x-1`}
                      >
                        <AiOutlineLogin className="mr-2" />
                        Login
                      </button>
                      {/* <button className='font-Poppins w-1/3 text-sm px-4 bg-red-600 text-white'>Cancel</button> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* <section className='container mx-auto flex justify-center items-start'>
           <div className='w-1/3 flex justify-center items-center'>
                <h1 className='font-Oswald tracking-wide text-[#ddd] text-center text-9xl -rotate-6 flex justify-center items-center'>ExitNet.com</h1>
           </div>
        </section> */}
    </React.Fragment>
  );
};
