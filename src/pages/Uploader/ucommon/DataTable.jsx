import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useGetModuleQuery } from "../../../features/module/moduleApiSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MODULE_COLUMN } from "./attributes";
import { FormText } from "../../../assets/css/styledComponents";
import * as Io from "react-icons/io5";
import * as Ci from "react-icons/ci";
import * as Md from "react-icons/md";
import { useDeleteModuleMutation } from "../../../features/module/moduleApiSlice";
import ModuleEditModal from "../components/ModuleEditModal";
import ModuleSearch from "../components/ModuleSearch";
import ShowDataEntries from "../../../components/common/ShowDataEntries";
import Loading from "../../public/components/Loading";

export const Table = (props) => {
  const [selectedRow, setSelectedRow] = useState({}); // selecting rows

  const [editModal, setEditModal] = useState(false);

  const selectedDataRow = (selected) => {
    setSelectedRow(selected);
    setEditModal((prev) => !prev);
  };

  const [deleteModule] = useDeleteModuleMutation();

  const { data, isSuccess, isFetching, isError, isLoading } =
    useGetModuleQuery();

  const useAction = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        Header: "Action",
        Cell: ({ row }) => {
          const rowData = row.values.id;
          return (
            <div className="hidden md:flex md:justify-evently space-x-2">
              <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                <Md.MdSummarize className="text-lg" />
              </div>
              <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                <Link
                  to={`edit/${rowData}`}
                  onClick={() => {
                    selectedDataRow(row.values);
                  }}
                >
                  <Ci.CiEdit className="text-lg" />
                </Link>
              </div>

              <div
                className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-red-500 hover:scale-125"
                onClick={() => deleteModule(rowData)}
              >
                <Io.IoTrashOutline size={15} />
              </div>

              {/* </Link> */}
            </div>
          );
        },
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: MODULE_COLUMN,
      data: data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useAction,
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { globalFilter, pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    previousPage,
    nextPage,
    pageCount,
    canNextPage,
    canPreviousPage,
    setPageSize,
    pageOptions,
    gotoPage,
  } = tableInstance;

  return (
    <React.Fragment>
      {/* Fragment for show entries  and addsection button for QuestionList*/}
      <div className={`flex flex-col my-5`}>
        <div className={`flex pt-5 pb-3`}>
          <div className={`w-1/4`}>
            <ShowDataEntries pageSize={pageSize} setPageSize={setPageSize} />
          </div>
          <div className={`w-3/4`}>
            <ModuleSearch
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              preGlobalFilteredRows={preGlobalFilteredRows}
              title="Search"
            />
          </div>
        </div>

        <div className={`flex pb-5`}>
          <div className={`w-1/4`} />
          <div className={`w-3/4`}>
            <h1 className={`font-Poppins text-sm text-[#6c757d] ml-[6%]`}>
              Type to search modules
            </h1>
          </div>
        </div>
      </div>
      {(isFetching || isLoading) && (
        <div className="py-5">
          <Loading />
        </div>
      )}
      {isSuccess && (
        <table
          className={`table table-striped text-left mb-5 text-[14px] px-2`}
          {...getTableProps()}
        >
          <thead className="capitalize font-normal py-3">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().index} {...row.getRowProps()}>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      )}
      {/* Fragment for pagination section */}
      <div className="w-full flex justify-between bg-white p-4 gap-4">
        <div className="w-1/2 flex  items-start space-x-3">
          <button
            className={`${
              canPreviousPage === true
                ? "btn-sm bg-blue-500 text-white"
                : "btn btn-sm"
            }`}
            onClick={() => gotoPage(0)}
          >
            First Page
          </button>
          <button
            className={`${
              canPreviousPage === true
                ? "btn-sm bg-blue-500 text-white"
                : "btn btn-sm"
            }`}
            onClick={() => previousPage()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`${
              canNextPage === true
                ? "btn-sm bg-blue-500 text-white"
                : "btn btn-sm"
            }`}
            onClick={() => nextPage()}
          >
            <IoIosArrowForward />
          </button>
          <button
            className={`${
              canNextPage === true
                ? "btn-sm bg-blue-500 text-white"
                : "btn btn-sm"
            }`}
            onClick={() => gotoPage(pageCount - 1)}
          >
            Last Page
          </button>
        </div>

        <div className=" flex  items-center gap-4 ">
          <div className="flex justify-center items-center space-x-4">
            <span className={`font-Poppins text-sm`}>Goto Page</span>
            <input
              type="number"
              className="input-sm w-[50%]"
              value={pageIndex + 1}
              onChange={(event) => {
                const page_number = event.target.value
                  ? Number(event.target.value) - 1
                  : 0;
                gotoPage(page_number);
              }}
            />
          </div>
          <div className="hidden md:w-1/4 md:flex justify-start items-center space-x-5">
            <div className="">
              <h5 className={`font-Poppins text-sm`}>
                Page {pageIndex + 1} of {pageOptions.length}
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* <ModuleEditModal 
                editModal={editModal} 
                setEditModal={setEditModal}  
                selectedRow={selectedRow}  
                setSelectedRow={setSelectedRow}
                title={`Edit the Module`} 
            />  */}
    </React.Fragment>
  );
};

export default Table;
