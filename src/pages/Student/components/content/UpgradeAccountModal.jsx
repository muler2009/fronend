import React, { useState } from "react";
import * as Vsc from "react-icons/vsc";
import { bank_attribute } from "../../scommon/bankattribute";
import * as Fi from "react-icons/fi";
import * as Md from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpgradeAccountModal = (props) => {
  const { upgradeModalshowState, setUpgradeModalShowState } = props;

  const [page, setPage] = useState(0);

  const title1 = {
    0: "payments",
    1: "upload ",
  };

  const title = ["Payment Account Information", "Upload details"];

  const val = Object.keys(title).length;
  // console.log(val)

  const displayContents = () => {
    if (page === 0) {
      return <PaymentInformation />;
    } else {
      return <UploadPaymentDetails />;
    }
  };

  const uploadSuccessNotification = () => {
    toast.success("You successfully submitted the payment detail!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });
  };

  const nextPage = () => {
    if (page !== title.length - 1) {
      setPage((prev) => prev + 1);
    } else {
      uploadSuccessNotification();
      setUpgradeModalShowState((prev) => !prev);

      return;
    }
  };

  if (!upgradeModalshowState) return null;

  return (
    <section className="bg-black bg-opacity-10 inset-0 fixed top-0  flex justify-center sm:px-10">
      <div
        className={`container mx-auto h-2/3 bg-white relative top-10 rounded-t-lg sm:w-full sm:h-[700px] lg:w-[30%] lg:h-2/3`}
      >
        <div className={`border-b-1 flex flex-col`}>
          <div
            className={`flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-[#f7f7f7] w-full px-5 py-5 `}
          >
            <h1 className={`font-Roboto font-normal text-xl text-black`}>
              {title[page]}
            </h1>
            <Vsc.VscClose
              className={`hover:bg-red-400 cursor-pointer hover:text-white`}
              onClick={() => setUpgradeModalShowState((prev) => !prev)}
            />
          </div>
          <div className={`font-Poppins`}>
            <ToastContainer />
          </div>
          <div
            className={`${
              page === 0
                ? "w-[50%] border-green-200 border-b-4"
                : "w-[100%] border-green-200 border-b-4"
            }`}
          />

          {/* Bank Account Information shower */}
          <div className={`h-[500px] flex justify-center items-center`}>
            {displayContents()}
          </div>

          <div className={`flex justify-end space-x-4 mr-4 font-Poppins`}>
            {/* <button className={`flex justify-end items-center px-5`} onClick={() => {setPage(prev => prev - 1)}}>prev</button> */}

            <button
              className={`px-6 bg-gray-200 text-sm rounded-none disabled:cursor-default disabled:opacity-25`}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
              disabled={page === 0}
            >
              prev
            </button>

            <button
              className={`px-5 bg-gray-200  text-sm rounded-none disabled:cursor-default disabled:opacity-25 duration-200`}
              onClick={() => {
                page !== title.length - 1
                  ? setPage((prev) => prev + 1)
                  : uploadSuccessNotification();
              }}
            >
              {page !== title.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentInformation = () => {
  return (
    <React.Fragment>
      <div className={`flex flex-col px-5 my-5`}>
        {bank_attribute?.map((bank, index) => (
          <div
            className={`bg-white py-3 px-5 flex justify-between items-center font-Poppins cursor-pointer hover:bg-[#eff5fa]  hover:border-[#5584a4] hover:rounded-lg shadow-lg my-2`}
            key={index}
          >
            <div className={`flex justify-between items-center`}>
              <div className={`flex justify-start items-center space-x-4 `}>
                <img src={bank.image} alt={bank.name} className={`w-[9%]`} />
                <p className={`text-sm flex`}>{bank.name}</p>
              </div>
            </div>
            <div className={`text-sm`}>
              <p className={`text-[#5584a4]`}>{bank.account}</p>
            </div>
          </div>
        ))}

        {/* after:content-[""] after:absolute after:top-3 after:h-[1px] after:w-[15%] after:bg-green-400 after:right-1 before:content-[""] before:absolute before:top-3 before:h-[1px] before:w-[15%] before:left-1 before:bg-green-400 */}

        <div className={` my-5 flex flex-col justify-center relative`}>
          <p className={`font-Roboto text-sm text-sky-600 `}>
            {" "}
            Once you paid click next and follow the promote to upgrade yoour
            account
          </p>
          <div
            className={`flex justify-center items-center py-3 after:content-[""] after:absolute after:top-10 after:h-[1.5px] after:w-[35%] after:bg-[#c2c2c2] after:right-1 before:content-[""] before:absolute before:top-10 before:h-[1.5px] before:w-[35%] before:left-1 before:bg-[#ddd]`}
          >
            <Md.MdStarBorder />
            <Md.MdStarBorder />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const UploadPaymentDetails = () => {
  return (
    <React.Fragment>
      <form className={`flex flex-col gap-10 px-10 w-5/6 mx-auto `}>
        <div className={``}>
          <h1
            className={`text-black text-lg font-Roboto py-1 flex justify-start items-center`}
          >
            <Md.MdInfo size={20} className={`mr-2`} color="blue" />
            Instruction
          </h1>
          <ul
            className={`list-disc px-5 font-Roboto text-sm py-2 text-[#6c757d]`}
          >
            <li>Find out the TT Number from the recipt</li>
            <li>Scan/Capture and upload the recipet</li>
          </ul>
        </div>
        <div className={`space-y-2`}>
          <label className={`font-Roboto mb-[0.5rem] text-[15px]`}>
            TT Number
          </label>
          <input
            type={`text`}
            placeholder="TT Number from your recipt"
            className={`font-Poppins input-md text-sm bg-[#fafafa] `}
          />
          <small className={`font-Roboto text-sm text-[#6c757d]`}>
            Enter TT Number from your recipt
          </small>
        </div>
        <div className={`space-y-2`}>
          <label className={`font-Roboto mb-[0.5rem] text-[15px]`}>
            Upload Receipt
          </label>
          <input
            type={`file`}
            className={`font-Poppins input-md text-sm p-0 file:py-2 file:border-0 bg-[#fafafa] `}
          />
          <small className={`font-Roboto  text-sm text-[#6c757d]`}>
            Upload your Receipt
          </small>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UpgradeAccountModal;
