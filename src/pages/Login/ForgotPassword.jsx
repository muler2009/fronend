import React, { useRef, useState } from "react";
import * as Gi from "react-icons/gi";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForgotMutation } from "../../api/apiSlice";

const ForgotPassword = () => {
  const forgotRef = useRef();
  const [forgotpasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotIndicator, setForgotIndicatior] = useState(false);

  const [forgotRequest, { isLoading: isForgotRequestLoading }] =
    useForgotMutation();

  return (
    <section className="container mx-auto flex justify-center items-start my-10 py-10 h-full bg-[#fafafa]">
      <div
        className={`w-[40%] h-full rounde-sm flex flex-col justify-center items-center shadow-md py-10 my-10 border-2 border-[#7c60b8] relative bg-white`}
      >
        {/* Fragment for displaying the key */}
        <div
          className={`flex justify-center items-center w-24 h-24 border-[1px] rounded-full bg-[#f4ebfd]`}
        >
          <Gi.GiKey size={60} color="#7c60b8" />
        </div>

        {/* Fragment for displaying the key */}
        <div
          className={`mt-4 flex flex-col justify-center items-center w-1/2 mx-auto`}
        >
          <h1 className={`font-Oswald text-3xl py-4 text-center`}>
            Forgot Password?
          </h1>
          <p className={`font-Poppins text-sm py-1 text-[#717888]`}>
            Enter your e-mail address below, and we'll e-mail instructions for
            setting a new one.
          </p>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className={`my-10 w-2/3 flex flex-col`}
        >
          <div className="relative flex-row items-center mb-5">
            <Fa.FaEnvelope color="gray" className="absolute z-10 mx-3 top-4" />
            <label htmlFor="email" className="relative cursor-pointer">
              <input
                type="email"
                id="email"
                name="email"
                ref={forgotRef}
                value={forgotpasswordEmail}
                autoComplete="off"
                onChange={(event) => setForgotPasswordEmail(event.target.value)}
                aria-describedby="email_indicator"
                placeholder="Enter your Email Address"
                className={`w-full font-Poppins input-md pl-9 py-3 text-black border-opacity-50 outline-none focus:border-black-500  placeholder-gray-400 placeholder-opacity-1 transition duration-200`}
                onFocus={() => setForgotIndicatior(true)}
                onBlur={() => setForgotIndicatior(false)}
              />
              <p className={`font-Poppins text-xs py-1 text-[#717888]`}>
                Type your email you used to Register!
              </p>

              <span
                id="email_indicator"
                className={`${
                  forgotIndicator
                    ? "font-Poppins text-black text-opacity-100 absolute left-5 -top-4 px-2 transition duration-200 bg-white input-text"
                    : "absolute -left-[9999px]"
                }`}
              >
                Email Address
              </span>
            </label>
          </div>

          {/* for the reset button */}
          <div className={`flex`}>
            <button
              className={`btn-sm w-full mx-auto hover:bg-[#28a745] hover:text-white`}
              onClick={async (e) => {
                e.preventDefault();

                await forgotRequest({ email: forgotpasswordEmail })
                  .then((res) => {
                    if (res.error) {
                      toast.error(
                        res.error.data.title || res.error.data.message
                      );
                    } else {
                      toast.success(
                        "Password reset link is sent. Please check your email."
                      );
                    }
                  })
                  .catch((err) => toast.error("Data is not saved"));
              }}
            >
              Reset Password
            </button>
          </div>

          <div className={`hover:text-blue-700`}>
            <Link
              to={`../login`}
              className={`bg-white btn-sm mx-auto my-5 cursor-pointer flex justify-start items-center space-x-2 hover:underline`}
            >
              <Md.MdOutlineKeyboardBackspace />
              <h1>Back to Login</h1>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
