import { format } from "date-fns";
import React, { useState } from "react";
import * as Ai from "react-icons/ai";
import * as Gr from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import user from "../../../../assets/images/user.jpeg";
import DropDownProfile from "../../../../common/DropDownProfile";
import { currentUserEmail } from "../../../../features/auth/authSlice";
import { logout } from "../../../../features/auth/myAuthSlice";
import { side_navigation } from "../../constants/studentNavigation";

export const StuNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(false);
  const [showNavigationLinks, setShowNavigationLinks] = useState(false);
  const email = useSelector(currentUserEmail);

  return (
    <React.Fragment>
      <section
        className={`py-5 px-4 h-16 bg-[#ffffff] border-b-[1px] border-b-[#dee2e6]`}
      >
        <div className={`flex justify-between items-center`}>
          <div className={`flex justify-between items-center`}>
            <Link
              to="/student"
              className={`font-Poppins text-sm flex justify-start items-center space-x-2 px-3 text-[#071466]`}
            >
              <Ai.AiOutlineDashboard size={25} />
              <span className={`text-xl`}>Dashboard</span>
            </Link>
            <Ai.AiOutlineCaretRight />
            <p className={`font-Poppins text-sm text-[#98a0b8]`}>
              {`${format(new Date(), "EEEE do, MMMM, yyyy")}`}
            </p>
          </div>

          <div
            className={`mr-10 cursor-pointer font-Poppins text-sm hidden lg:flex lg:justify-center lg:items-center lg:space-x-3`}
            onClick={() => setDrop((prev) => !prev)}
          >
            <img
              src={user}
              alt="profile image"
              className={`rounded-full w-10 h-10 object-cover object-center cursor-pointer`}
            />
            <p>{email}</p>
            {drop && <DropDownProfile setDrop={setDrop} />}
          </div>

          <div
            className={`cursor-pointer block lg:hidden`}
            onClick={() => setShowNavigationLinks((prev) => !prev)}
          >
            {showNavigationLinks ? (
              <Ai.AiOutlineClose size={20} />
            ) : (
              <Ai.AiOutlineMenu size={20} />
            )}
          </div>
          {/* for small devices */}
          <div
            className={
              showNavigationLinks
                ? "fixed top-16 w-[40%] left-0 bg-white ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <div className={`flex flex-col`}>
              <ul
                className={`flex flex-col gap-4 justify-start items-start px-10`}
              >
                {side_navigation.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`border-b border-gray-200 w-full py-2`}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center space-x-4 font-Poppins text-[14px]`}
                      >
                        <div>{link.icon}</div>
                        <h2>{link.label}</h2>
                      </Link>
                    </li>
                  );
                })}
                <li
                  className={`flex items-center space-x-4 font-Poppins text-[14px] pb-2`}
                >
                  <Gr.GrPower />
                  <Link
                    // to={`logout`}
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
