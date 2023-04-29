import React, { useState } from "react";
import * as Go from "react-icons/go";
import * as Gr from "react-icons/gr";
import * as Hi from "react-icons/hi2";
import { Link } from "react-router-dom";
import TableStructure from "../ui/TableStructure";
import { ShowEntries } from "./Result";
import { useGetModuleQuery } from "../../../../features/module/moduleApiSlice";
import { MODULE_COLUMN } from "../../../../common/attributes";
import UpgradeAccountModal from "./UpgradeAccountModal";
import UpgradeFromModule from "./UpgradeFromModule";
import { useGetQuestionsQuery } from "../../../../api/apiSlice";

const AllModules = () => {
  const { data, isLoading, isSuccess, isError } = useGetModuleQuery(); // destructuring items from Query
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
        Header: "status",
        Cell: ({ row }) => {
          const rowData = row.values.moduleStatus;
          console.log(String(rowData));

          return (
            <div className="flex space-x-2 justify-center cursor-pointer">
              {rowData === true ? (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg text-white bg-green-500 disabled:bg-red-500 disabled:text-white`}
                >
                  <Link to={`../new-exam`}>
                    <Gr.GrUnlock size={20} color="white" />
                  </Link>
                </button>
              ) : (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg bg-green-500 disabled:bg-red-500 disabled:text-white`}
                  disabled={!rowData ? true : false}
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
              {row.values.moduleStatus === true ? (
                <h1 className={``}> --- </h1>
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
      {isLoading && <p>Loading Datat ....</p>}
      {isSuccess && (
        <div className={`bg-white px-5 py-5`}>
          <TableStructure
            columns={MODULE_COLUMN}
            data={data}
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
