import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useTable, usePagination } from 'react-table'
import {HiDownload} from 'react-icons/hi'
import { AiOutlineImport, AiFillEye } from 'react-icons/ai'
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { IoAddCircleSharp } from 'react-icons/io5'
import {IoIosArrowBack, IoIosArrowForward, IoIosSend, IoIosPrint } from 'react-icons/io'
import ImportFromCSV from './ImportFromCSV'
import { COL, data } from '../ucommon/attributes'
import { FaSearch } from 'react-icons/fa'
import { ShowEntries } from '../../Student/components/content/Result'


const UQuestions = () => {

    const [show, setShow] = useState(false)
    const [importcsv, setImportcsv] = useState(false)

    return(
        <React.Fragment>
            <div className={`w-full p-4 flex flex-col`}>
                <h1 className={`font-Oswald text-2xl`}>Uploaded Questions</h1>

                {/* Liks for import, export and downlaod */}
                <div className={`bg-[#ffffff] my-5 w-full border-[1px] border-[#ddd]`}>
                    <p className={`font-Poppins text-sm py-5 px-5`}>
                        Questions is asked for the purpose of testing someone's knowledge, as in an examination. Below is the list of questions created in this account.
                    </p>

                {/* code for: search engine and button groups */}
                    <div className={`flex justify-between`}>
                        {/* Search engine input */}
                        <div className={`px-5 py-5 w-full`}>
                            <div class="relative mt-1 rounded-md shadow-sm">
                                <form action='' method='' className={`flex`}>
                                    <input 
                                        type="text" 
                                        name="search" 
                                        id="search" 
                                        className={`input-md border-r-0 rounded-r-none`}
                                        placeholder="Search" 
                                    />
                                     <span className="px-4 inline-flex items-center min-w-fit  border border-1-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">
                                        <FaSearch color='#ddd' className={`mr-5 flex `}/>
                                    </span>
                                </form>
                            </div>
                        </div>
                        
                        {/* code for: button group */}

                        <div className={`flex justify-end p-5`}>
                            <aside className={`border-[1px] flex rounded-lg p-1 space-x-3`}>
                                <button className={`flex items-center space-x-2 text-[14px] btn-sm px-5 focus:bg-indigo-500 focus:text-white`} 
                                onClick={() => setImportcsv(prev => !prev)}>
                                    <AiOutlineImport />
                                    <p>Import</p>
                                </button>
                                <button className={`flex items-center space-x-2 text-[14px] btn-sm bg-white focus:bg-indigo-500 focus:text-white`}>
                                    <AiOutlineImport />
                                    <p>Export</p>
                                </button>
                                <button className={`flex items-center space-x-2 text-[14px] btn-sm bg-white focus:bg-indigo-500 focus:text-white`}>
                                    <HiDownload size={20}/>
                                    <p>Download</p>
                                </button>
                            </aside>
                            
                        </div>
                    </div>
                </div>

                {/* code for: Question list table */}
                <div className={`bg-white py-2 px-4`}>
                    <QuestionTable />
                </div>

                <ImportFromCSV importcsv={importcsv} setImportcsv={setImportcsv} />
            </div>
        </React.Fragment>
    )
}

export default UQuestions


// Sub-components 

export const QuestionTable = () => {

    const useAction = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns, 
            {
                Header: 'Action',
                Cell: ({ row }) => {
                    const rowData = row.values.id
                   
                    return(
                        <div className="hidden md:flex space-x-2">
                            <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                                <BiEditAlt className="text-lg"  />
                            </div>
                            <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                                <BiTrash className="text-lg"   />
                            </div>
                            <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                                <AiFillEye className="text-lg"  />
                            </div>
                            
                        {/* </Link> */}
                        </div>
                       
                    )
                }
            }
        ])
      }
    
    const tableInstance = useTable({
        columns: COL,
        data: data,
        initialState: { pageIndex: 0, pageSize: 2 }
    }, useAction, usePagination)

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
        previousPage, nextPage, pageCount,
        canNextPage, canPreviousPage, setPageSize, pageOptions, gotoPage, 
    } = tableInstance

    return(
        <React.Fragment>


            {/* Fragment for show entries  and addsection button for QuestionList*/}
            <div className={`flex justify-between mt-5`}>
    
                <ShowEntries pageSize={pageSize} setPageSize={setPageSize} />

                <Link to={`../add-exam`} className={`border-[1px]`}>
                    <button className={`btn-sm px-5 text-sm flex justify-center items-center space-x-2`}>
                        <IoAddCircleSharp size={18}/> 
                        <h6>Add Question</h6>
                    </button>
                </Link>
            </div>



            <table className={`table table-striped text-left mb-5 text-[14px]`} {...getTableProps()}>
                <thead className="capitalize font-normal py-3">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row, index) => {
                            prepareRow(row)
                            return(
                                <Fragment key={row.getRowProps().index} {...row.getRowProps()} >
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return(
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                </Fragment>
                            )
                        })
                    }

                </tbody>

            </table>

            {/* Fragment for pagination section */}

            <div className="w-full flex flex-col bg-white p-4 gap-4">
                <div className="flex justify-center items-start space-x-3">
                    <button className={`${canPreviousPage === true ? 'btn-sm bg-blue-500 text-white' : 'btn btn-sm'}`} onClick={()=> gotoPage(0)}>First Page</button>
                    <button className={`${canPreviousPage === true ? 'btn-sm bg-blue-500 text-white' : 'btn btn-sm'}`} onClick={()=> previousPage()}><IoIosArrowBack /></button>
                    <button className={`${canNextPage === true ? 'btn-sm bg-blue-500 text-white' : 'btn btn-sm'}`}  onClick={()=> nextPage()}><IoIosArrowForward /></button>
                    <button className={`${canNextPage === true ? 'btn-sm bg-blue-500 text-white' : 'btn btn-sm'}`}  onClick={() => gotoPage(pageCount - 1)}>Last Page</button>
                </div>
                <div className="container flex justify-center items-center gap-4 mx-auto">
                    <div className="md:w-1/4 flex justify-center items-center space-x-4">
                        <span className={`font-Poppins text-sm`}>Goto Page</span>
                        <input 
                            type='number' 
                            className='input-sm w-[50%]'
                            value={pageIndex + 1}
                            onChange={(event) => {
                                const page_number = event.target.value ? Number(event.target.value) - 1 : 0;
                                gotoPage(page_number)
                            }}
                        
                        />
                    </div>
                    <div className="hidden md:w-1/4 md:flex justify-start items-center space-x-5">
                        <div className="">
                            <h5 className={`font-Poppins text-sm`}>
                                Page {pageIndex + 1} of {pageOptions.length} |
                            </h5>
                        </div>
                        
                    </div>
                </div>
                   
            </div>
        </React.Fragment>
    )
}