import React, { useRef, useState } from "react";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  useResetPassTokenMutation,
  useVerifyMutation,
} from "../../api/apiSlice";
import Loading from "./components/Loading";

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
            Successfully Verified!
          </h1>
        </div>
        <div
          className={`py-5 w-3/4 mx-auto before:absolute before:bg-[#ddd] before:content[""] before:h-[1px] before:w-full before:left-0 before:my-2 `}
        >
          <h1 className={`text-center mt-5 font-Oswald tracking-wide text-2xl`}>
            Congratulations
            <br />
            <span className={`font-Poppins text-[15px]`}>
              your email has been successfully verified.
            </span>
          </h1>
        </div>

        <div className={`mx-auto w-2/3 font-Poppins leading-9`}>
          <h1 className={`text-sm py-4`}>
            <span>
              <a
                href="/login"
                className={`font-Poppins text-blue-500 hover:underline text-sm mr-2`}
                onClick={() => Swal.close()}
              >
                Login
              </a>
            </span>
          </h1>
        </div>
      </div>
    ),
  });
};

const ForgotPasswordVerified = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [forgotRequest, { isLoading: isForgotRequestLoading }] =
    useResetPassTokenMutation();

  const forgotRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [forgotIndicator, setForgotIndicatior] = useState(false);

  // useEffect(async () => {
  //   await verifyStudent({
  //     token: params?.token,
  //   })
  //     .then((res) => {
  //       if (res?.data?.success) {
  //         showSuccessAlert(); // navigate("/login");
  //       } else {
  //         toast.error(res.error.data.title);
  //       }
  //     })
  //     .catch((err) => toast.error("Please try again"));
  // }, [params]);
  return (
    <section className="container mx-auto flex justify-center items-start my-10 py-10 h-full bg-[#fafafa]">
      <div
        className={`sm:w-[50%] ss:w-[55%] xs:w-[65%] xxs:w-[90%] xxxs:w-[95%] h-full rounde-sm flex flex-col justify-center items-center shadow-md py-10 my-10 border-2 border-[#7c60b8] relative bg-white`}
      >
        {/* Fragment for displaying the key */}
        <div
          className={`flex justify-center items-center w-24 h-24 border-[1px] rounded-full bg-[#f4ebfd]`}
        >
          {/* <Gi.GiKey size={60} color="#7c60b8" /> */}
        </div>

        {/* Fragment for displaying the key */}
        <div
          className={`mt-4 flex flex-col justify-center items-center w-1/2 mx-auto`}
        >
          <h1 className={`font-Oswald text-3xl py-4 text-center`}>
            News Password?
          </h1>
          <p className={`font-Poppins text-sm py-1 text-[#717888]`}>
            Enter your e-mail address and new password
          </p>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className={`my-10 w-2/3 flex flex-col`}
        >
          <div className="relative  items-center mb-5">
            <div className="flex flex-col gap-3">
              <div>
                <Fa.FaEnvelope
                  color="gray"
                  className="absolute z-10 mx-3 top-4"
                />
                <label htmlFor="email" className="relative cursor-pointer">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={forgotRef}
                    value={email}
                    autoComplete="off"
                    onChange={(event) => setEmail(event.target.value)}
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
              <div>
                <Fa.FaKey
                  color="gray"
                  className="absolute z-10 mt-4 mx-3 top-55"
                />
                <label
                  htmlFor="password"
                  className="relative cursor-pointer mt-2"
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
                  <span className="font-Poppins text-white text-opacity-100 absolute left-5 top-12 px-2 transition duration-200  xxs:bg-[#fdfdff] input-password">
                    Password
                  </span>
                </label>
              </div>

              <div>
                <Fa.FaKey
                  color="gray"
                  className="absolute z-10 mt-4 mx-3 top-35"
                />
                <label htmlFor="password" className="relative cursor-pointer">
                  <input
                    type={`password`}
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    //onChange={handleLoginChanges}
                    onChange={(event) =>
                      setPasswordConfirmation(event.target.value)
                    }
                    className={`w-full font-Poppins input-md pl-9 py-3 text-black border-opacity-50 outline-none focus:border-black-500  placeholder-gray-400 placeholder-opacity-1 transition duration-200 `}
                  />
                  {/* <span className="font-Poppins text-white text-opacity-100 absolute left-5 top-12 px-2 transition duration-200  xxs:bg-[#fdfdff] input-password">
                    Confirm Password
                  </span> */}
                </label>
              </div>
            </div>
          </div>

          {/* for the reset button */}
          <div className={`flex`}>
            {!isForgotRequestLoading ? (
              <button
                className={`btn-sm w-full mx-auto hover:bg-[#28a745] hover:text-white`}
                onClick={async (e) => {
                  e.preventDefault();

                  await forgotRequest({
                    token: params?.token,
                    email,
                    password,
                    password_confirmation,
                  })
                    .then((res) => {
                      if (res.error) {
                        toast.error(
                          res.error.data.title || res.error.data.message
                        );
                      } else {
                        toast.success("Password reset successfully");
                      }
                    })
                    .catch((err) => toast.error("Data is not send"));
                }}
              >
                Reset Password
              </button>
            ) : (
              <div className="w-full text-center">
                <Loading />
              </div>
            )}
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

export default ForgotPasswordVerified;
