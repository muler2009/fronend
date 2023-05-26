import { Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetSubscriptionQuery } from "../../../api/apiSlice";
import { COMPETENCY } from "../constants/constants";
import ShowResultOfQuiz from "../qmodule/ShowResultOfQuiz";
import UpgradeAccountModal from "./UpgradeAccountModal";

export const InformationCard = () => {
  const [upgradeModalshowState, setUpgradeModalShowState] = useState(false);
  const [show, setShow] = useState(false);

  // const { data } = useGetModuleQuery();

  const { data, isLoading, isSuccess, isError } = useGetSubscriptionQuery(); // destructuring items from Query
  const [department, setDepartment] = useState("");

  useEffect(() => {
    data?.data && setDepartment(data?.data[0]?.department);
  }, [data]);

  if (isLoading || isError) return;

  return (
    <React.Fragment>
      <section className={`w-full md:flex my-1 bg-zinc-50 py-5`}>
        <div
          className={`flex flex-1 flex-wrap mx-10 ss:mx-16 sm:px-5 sm:flex md:flex-nowrap md:space-x-3`}
        >
          <div
            className={`w-full sm:justify-center border-[1px] border-b-[4px] border-b-sky-500 bg-white rounded-lg `}
          >
            <div
              className={`w-full flex justify-between items-center py-5 px-7 space-x-3`}
            >
              <div className="flex flex-col space-y-4 items-center">
                <h1 className="text-sm font-Poppins text-[#828692]">
                  Competency
                </h1>
                <div className="flex flex-row flex-wrap gap-2">
                  {COMPETENCY?.find(
                    (item) => item?.department === department
                  )?.competency?.map((item) => (
                    <Chip label={item} />
                  ))}
                </div>
                <div className={`font-Poppins`}>
                  <h2 className={`text-black text-6xl font-Roboto`}>
                    {/* {
                      data?.filter((active) => {
                        return active.moduleStatus;
                      }).length
                    } */}
                  </h2>
                </div>
              </div>
              {/* <div className="flex mt-10 space-x-2 items-end justify-end border-[2px] ring-2 ring-sky-500 text-white  rounded-[50px] px-4 py-1 font-Poppins text-sm bg-sky-500">
                <h1 onClick={() => setShow((prev) => !prev)}>Show Result</h1>
              </div> */}
            </div>
          </div>
        </div>

        <UpgradeAccountModal
          upgradeModalshowState={upgradeModalshowState}
          setUpgradeModalShowState={setUpgradeModalShowState}
        />
        <ShowResultOfQuiz show={show} setShow={setShow} />
      </section>
    </React.Fragment>
  );
};
