import React, { Fragment } from "react";
import {
  useTable,
  useRowSelect,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";
import ShowDataEntries from "../../../components/common/ShowDataEntries";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ModuleSearch from "../../../components/ModuleSearch";

const TableStructure = ({ columns, data, useAction }) => {
  const tableHookInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 5,
        hiddenColumns: ["lock", "pending"],
      },
    },
    useAction,
    useGlobalFilter,
    usePagination,
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { globalFilter, selectedRowIds, pageIndex, pageSize },
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
  } = tableHookInstance;

  return (
    <React.Fragment>
      <div
        className={`w-full flex space-x-5 py-10 px-5 border-b-[2px] border-[#ddd]`}
      >
        <ShowDataEntries pageSize={pageSize} setPageSize={setPageSize} />

        <div className={`w-3/4 font-Poppins`}>
          <ModuleSearch
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            preGlobalFilteredRows={preGlobalFilteredRows}
            title={"Search"}
          />
        </div>
      </div>

      {/* displaying table */}

      <table
        className={`table table-striped text-left mb-5 text-[14px] px-2`}
        {...getTableProps()}
      >
        <thead className="capitalize font-normal py-3">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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

      <div className="flex md:flex flex-wrap justify-between items-center bg-white py-4 px-10 gap-4">
        <div className="xs:w-full flex flex-1">
          <div className="flex justify-start items-center space-x-3">
            <span className={`font-Poppins text-sm`}>Goto Page</span>
            <input
              type="number"
              className="input-sm w-[30%]"
              value={pageIndex + 1}
              onChange={(event) => {
                const page_number = event.target.value
                  ? Number(event.target.value) - 1
                  : 0;
                gotoPage(page_number);
              }}
            />
          </div>
        </div>

        {/* code section: Page section */}

        <div className="flex justify-start items-center space-x-5">
          <div className="">
            <h5 className={`font-Poppins text-sm`}>
              Page {pageIndex + 1} of {pageOptions.length}
            </h5>
          </div>
        </div>

        {/* code section: Pagination section */}

        <div className="flex space-x-3">
          <button
            className={`${
              canPreviousPage === true
                ? "btn-sm rounded-none bg-blue-500 text-white"
                : "btn btn-sm rounded-none"
            }`}
            onClick={() => gotoPage(0)}
          >
            First Page
          </button>
          <button
            className={`${
              canPreviousPage === true
                ? "btn-sm rounded-none bg-blue-500 text-white"
                : "btn btn-sm rounded-none"
            }`}
            onClick={() => previousPage()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`${
              canNextPage === true
                ? "btn-sm rounded-none bg-blue-500 text-white"
                : "btn btn-sm rounded-none"
            }`}
            onClick={() => nextPage()}
          >
            <IoIosArrowForward />
          </button>
          <button
            className={`${
              canNextPage === true
                ? "btn-sm rounded-none bg-blue-500 text-white"
                : "btn btn-sm rounded-none"
            }`}
            onClick={() => gotoPage(pageCount - 1)}
          >
            Last Page
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TableStructure;
