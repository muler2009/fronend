import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Hi from "react-icons/hi";

import { AiOutlineLogin } from "react-icons/ai";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../components/common/Spinner";
import { useState } from "react";
import { userLogin } from "../../features/auth/myAuthSlice";
import Loading from "../public/components/Loading";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, isError, errorMsg, data } = useSelector((state) => state);
  const { user } = useSelector((state) => state.auth);

  const emailRef = useRef(); // just for referring the email input field

  // const { isLoading } = useLoginMutation();
  // const dispatch = useDispatch();

  const [loginAttributes, setLoginAttributes] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  // const [errRef, setErrRef] = useState();
  // const [errRef, setErrRef] = useState();

  // useEffect(() => {
  //   const {
  //     loginAttributes,
  //     email,home
  //     errRef,
  //     setErrorMessage,
  //     setLoginAttributes,
  //     loginClicked,
  //   } = useLogin();
  //   setLoginAttributes(loginAttributes);
  // });
  const loginClicked = async (event) => {
    event.preventDefault();

    if (isLoginClicked) return;
    if (!email || !password) {
      toast.error("Please fill required fields");
      return;
    }

    setIsLoginClicked(true);
    dispatch(userLogin({ email, password })).then((value) => {
      setIsLoginClicked(false);
    });
  };
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
    // console.log(user);
    if (user?.token) {
      navigate("/student");
      toast.success("Welcome!");
    }
  }, [user]);

  useEffect(() => {
    isError && toast.error(errorMsg);
  }, [isError]);

  return (
    <React.Fragment>
      {false ? (
        <Spinner />
      ) : (
        <section className="flex md:flex justify-center items-center xxs:bg-[#fdfdff] xs:px-5 sm:px-10">
          <div className="rounded-lg -px-4 xxs:mx-5 sm:w-full lg:w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="border-b-2 border-white w-full pt-10 pb-3 flex flex-col justify-center items-center">
                <Hi.HiUserCircle className="text-opacity-30 text-red-700 text-[120px]" />
                <h1 className="text-3xl font-Oswald pt-10 uppercase xxs:text-[35px]">
                  Login
                </h1>
                <p className="font-Poppins text-sm text-[#5c727d] my-2 text-[13px] xxxs:px-5">
                  Use the email and password you used on the registration
                </p>
              </div>

              <div className="xxxs:w-full xxxs:px-5 xxs:w-full xxs:px-0 ss:w-full sm:w-4/5 sm:px-10 md:w-2/3 lg:w-1/3 lg:mx-auto relative">
                {/* <p
                  ref={errRef}
                  className={
                    errorMessage
                      ? "text-red-700 font-Poppins flex justify-center items-center py-2"
                      : "absolute -left-[9999px]"
                  }
                  aria-live="assertive"
                >
                  {errorMessage}
                </p> */}
                <form className="text-black mb-[12rem]" onSubmit={loginClicked}>
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
                            loginAttributes?.loginEmailFocus
                              ? "font-Poppins text-black text-opacity-100 absolute left-5 -top-4 px-2 transition duration-200 xxxs:bg-white xxs:bg-[#fdfdff] input-text"
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
                        <span className="font-Poppins text-white text-opacity-100 absolute left-5 top-12 px-2 transition duration-200 xxxs:bg-white xxs:bg-[#fdfdff] input-password">
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
                      {isLoginClicked ? (
                        <div className="w-full text-center">
                          <Loading />
                          {/* <button
                            type="submit"
                            onClick={() => setIsLoginClicked(false)}
                            className={`font-Poppins w-full text-sm px-4 bg-[#3C4852] text-white flex justify-center items-center space-x-1`}
                          >
                            <AiOutlineLogin className="mr-2" />
                            Login
                          </button> */}
                        </div>
                      ) : (
                        <button
                          type="submit"
                          onClick={() => setIsLoginClicked(false)}
                          className={`font-Poppins w-full text-sm px-4 bg-[#3C4852] text-white flex justify-center items-center space-x-1`}
                        >
                          <AiOutlineLogin className="mr-2" />
                          Login
                        </button>
                      )}
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
