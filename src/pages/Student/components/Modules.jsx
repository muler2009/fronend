import React, { useState } from "react";
import * as Go from "react-icons/go";
import * as Gr from "react-icons/gr";
import { Link } from "react-router-dom";
import TableStructure from "./TableStructure";

import { useGetSubscriptionQuery } from "../../../api/apiSlice";
import { MODULE_COLUMN } from "../constants/moduleattributes";
import UpgradeFromModule from "./UpgradeFromModule";

const AllModules = () => {
  const { data, isLoading, isSuccess, isError } = useGetSubscriptionQuery(); // destructuring items from Query
  // const { data, isLoading, isSuccess, isError } = useGetModuleQuery(); // destructuring items from Query
  const [upgradeModalshowState, setUpgradeModalShowState] = useState(false); // to trigger the upgrade account modal on click
  const [dataSelected, setDataSelected] = useState({});

  const getDataSelected = (selected_data) => {
    setDataSelected(selected_data);
    setUpgradeModalShowState((prev) => !prev);
  };

  const useAction = (hooks) => {
    // const [statusChenge, setStatusChange] = useState(row.values.moduleStatus)
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 1,
        Header: "lock",
        Cell: ({ row }) => {
          const rowData = row.values.lock;

          return (
            <div className="flex space-x-2 justify-center cursor-pointer">
              {rowData === "unlocked" ? (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg text-white bg-green-500 disabled:bg-red-500 disabled:text-white`}
                >
                  <Link to={`../new-exam`}>
                    <Gr.GrUnlock size={20} color="white" />
                  </Link>
                </button>
              ) : (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg bg-yellow-500 disabled:bg-red-500 disabled:text-white`}
                  disabled={row.values?.payment === "Not Subscribed"}
                >
                  <Go.GoLock size={20} />
                </button>
              )}
            </div>
          );
        },
      },
      {
        id: 2,
        Header: "Upgrade",
        Cell: ({ row }) => {
          return (
            <div className="flex justify-center items-center space-x-2">
              {row.values.payment === "Free" ? (
                <h1 className={``}> --- </h1>
              ) : row.values.payment === "Pending" ? (
                <h1 className={``}> Pending </h1>
              ) : (
                <div
                  className={`text-sm flex items-center `}
                  onClick={() => getDataSelected(row.values)}
                >
                  <h1
                    className={`text-blue-700 font-Roboto text-sm hover:underline hover:text-blue-600`}
                  >
                    Upgrade
                  </h1>
                </div>
              )}
            </div>
          );
        },
      },
    ]);
  };

  return (
    <React.Fragment>
      {isLoading && <p>Loading Data ....</p>}
      {isSuccess && (
        <div
          className={`block bg-zinc-50 px-5 py-5 xxs:overflow-x-scroll md:overflow-x-scroll border-t-[1px] border-b-[1px]`}
        >
          <TableStructure
            columns={MODULE_COLUMN}
            data={data?.data}
            useAction={useAction}
            dataSelected={dataSelected}
            setDataSelected={setDataSelected}
          />
        </div>
      )}

      <UpgradeFromModule
        upgradeModalshowState={upgradeModalshowState}
        setUpgradeModalShowState={setUpgradeModalShowState}
        dataSelected={dataSelected}
      />
    </React.Fragment>
  );
};

export default AllModules;
