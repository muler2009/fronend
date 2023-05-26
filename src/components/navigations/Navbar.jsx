import React, { useState } from "react";
import * as Ai from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { link, weblink } from "../../links/link";
import { FaSearch } from "react-icons/fa";

import logo1 from "../../assets/images/logo1.png";

export const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <section className="border-b-2 shadow-b-lg z-50">
        <div
          className={`flex justify-between items-center h-24 container mx-auto xxs:px-2 xs:px-1 md:px-10 relative`}
        >
          {/* <h1 className='font-Oswald tracking-wide text-blue-900 xs:text-3xl text-2xl'>
                    <Link to={'/'}>
                        PiEcon
                    </Link>
                </h1> */}

          <div className="flex flex-col items-end justify-end py-5">
            <Link to="/">
              <img src={logo1} alt="Pi Logo" className="w-[100px] h-[80px]" />
            </Link>
            {/* <h1 className="font-Oswald text-3xl uppercase xxs:text-2xl xs:[26px] sm:text-[28px] md:text-[30px] flex-nowrap">PI <span className="text-m--brand">Educational</span></h1>
              <p className="text-xs">consultancy</p> */}
          </div>

          <form className={`flex w-[50%] mx-10 xs:hidden lg:flex`}>
            <input
              type="text"
              name="search"
              className="input-md border-black font-Poppins border-r-0 rounded-r-none px-4"
              placeholder="Type to search"
            />
            <span className="px-4 font-Poppins inline-flex items-center min-w-fit border border-l-0 border-black bg-gray-50 text-sm text-black dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
              {/* <FaSearch color='#ddd' className={`mr-5 flex `}/> */}
              Search
            </span>
          </form>

          <ul className={`hidden md:flex md:space-x-4 items-center`}>
            {/* {
                        weblink.map((weblink, index) => {
                            return(
                                <li key={index}>
                                    <Link to={weblink.path}>
                                        <h5 className='font-Poppins text-[14px] flex items-center space-x-3'>
                                        <span className='mx-2'>{weblink.icon}</span> {weblink.label}
                                        </h5>
                                    </Link>
                                </li>
                            )
                        })
                    } */}

            {link.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>
                    <button className="flex items-center btn-sm bg-[#3C4852] text-white px-4 rounded-none">
                      <span className={`mr-2`}>{link.icon}</span>
                      {link.label}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`cursor-pointer block md:hidden`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <Ai.AiOutlineClose size={20} />
            ) : (
              <Ai.AiOutlineMenu size={20} />
            )}
          </div>

          {/* BrrakPoints  */}

          <div
            className={
              open
                ? "fixed top-24 xs:w-[80%] sm:w-[50%] right-0 z-20 bg-white"
                : "fixed left-[-100%]"
            }
          >
            <ul className={`flex-col gap-4 justify-start items-start px-10 `}>
              {/* {
                            weblink.map((weblink, index) => {
                                return(
                                    <li key={index} className={`border-b border-gray-200 w-full py-2`}>
                                        <Link to={weblink.path} className={`flex items-center space-x-4 font-Poppins text-[14px]`}>
                                            <div>{weblink.icon}</div>
                                            <h2>{weblink.label}</h2>
                                            
                                        </Link>
                                    </li>
                                )
                            })
                        } */}

              {link.map((link, index) => {
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
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
