import React from "react";
import {
  AiOutlineCaretRight,
  AiOutlineDashboard,
  AiOutlinePoweroff,
} from "react-icons/ai";

const AdminTopbar = () => {
  return (
    <React.Fragment>
      <section
        className={`bg-white p-0 mx-0 w-full h-24 border-b-1 border-[#ddd]`}
      >
        {/* Wrapper for the content of top bar */}
        <div className={`flex justify-between items-center mx-4 py-3`}>
          {/* Pointer section of the top bar */}
          <div className="flex items-center justify-center space-x-2">
            <h1 className={`font-Oswald text-blue-900 text-2xl tracking-wide`}>
              lefetena.com
            </h1>
          </div>

          {/* Icon section of top bar  */}
          <div className={`mr-10`}>
            <div className={`flex flex-row items-center space-x-1`}>
              <div
                className={`w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 cursor-pointer relative`}
              >
                <AiOutlinePoweroff className={`text-[#143068]`} size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#ddd] bg-white py-3">
          <div className={`flex justify-between`}>
            <div className={`flex px-3 items-center space-x-2`}>
              <h6 className={`font-Poppins text-md`}>Admin</h6>
              <AiOutlineCaretRight />
              <h6 className={`font-Poppins text-sm`}>
                <span className="flex items-center gap-1">
                  <AiOutlineDashboard size={25} />
                  Dashboard
                </span>
              </h6>
            </div>

            {/* Top bar search Box section  */}
            <div className={`w-[40%] mr-10`}>
              <input
                type="text"
                className={`input-sm font-Poppins`}
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AdminTopbar;
