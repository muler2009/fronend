import React from 'react'
import { useTable, usePagination } from 'react-table'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { result_attribute, result_data } from '../../scommon/tAttribute'
import { FaChartBar } from 'react-icons/fa'

const Result = () => {
  
  const useAction = (hooks) => {
    hooks.visibleColumns.push((columns) => [
        ...columns, 
        {
            id: 1,
            Header: 'Action',
            Cell: ({ row }) => {
                const rowData = row.values.id
               
                return(
                    <div className="flex space-x-2 justify-center">
                        <button className={`btn-sm px-5 font-Poppins bg-sky-300 text-black hover:text-black`}>Action</button>
                    </div>
                   
                )
            }
        },
        {
          id: 2,
          Header: 'Staus',
          Cell: ({ row }) => {       
            const rowData = row.values.correct_answer     
              return(
                  <div className="flex justify-center items-center space-x-2">
                    {
                      rowData >= 120 ? <h1 className={`text-sm text-green-500`}>Pass</h1> : <h1 className={`text-sm text-red-500`}>Fail</h1>
                    }
                  </div>
                 
              )
          }
      }
    ])
  }

  const resultTableInstance = useTable({
        columns: result_attribute,
        data: result_data,
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
  } = resultTableInstance


  return (
    <React.Fragment>
        <div className={`py-1 px-1 flex flex-col`}>
            <div className={`bg-[#fff] flex items-center justify-start py-4 space-x-2 px-4`}>
                <span><FaChartBar size={30} color='darkblue' /></span>
                <h1 className={`text-xl font-Oswald tracking-wide`}>Result and stastics </h1>
            </div>

            <div className='bg-white border-[1px] border-[#ddd] pt-5'>

                {/* Code section: Show Entries action */}
                    <ShowEntries pageSize={pageSize} setPageSize={setPageSize} />
           
                {/* Result Table */}
                    <div className={`px-10`}>
                        <table className={`table table-striped text-left mb-5`} {...getTableProps()}>
                            <thead className="capitalize">
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
                            
                            <tbody className={`text-center`} {...getTableBodyProps()}>
                                {
                                    page.map((row, index) => {
                                        prepareRow(row)
                                        return(
                                            
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
                                            
                                        )
                                    })
                                }

                            </tbody>

                        </table>
                    </div>

                {/* code section: Result Pagination section */}
                <div className="flex flex-row justify-between bg-white py-4 px-10 gap-4">
                   <div className="flex">
                        <div className="flex justify-start items-center space-x-3">
                            <span className={`font-Poppins text-sm`}>Goto Page</span>
                            <input 
                                type='number' 
                                className='input-sm w-[30%]'
                                value={pageIndex + 1}
                                onChange={(event) => {
                                    const page_number = event.target.value ? Number(event.target.value) - 1 : 0;
                                    gotoPage(page_number)
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
                        <button className={`${canPreviousPage === true ? 'btn-sm rounded-none bg-blue-500 text-white' : 'btn btn-sm rounded-none'}`} onClick={()=> gotoPage(0)}>First Page</button>
                        <button className={`${canPreviousPage === true ? 'btn-sm rounded-none bg-blue-500 text-white' : 'btn btn-sm rounded-none'}`} onClick={()=> previousPage()}><IoIosArrowBack /></button>
                        <button className={`${canNextPage === true ? 'btn-sm rounded-none bg-blue-500 text-white' : 'btn btn-sm rounded-none'}`}  onClick={()=> nextPage()}><IoIosArrowForward /></button>
                        <button className={`${canNextPage === true ? 'btn-sm rounded-none bg-blue-500 text-white' : 'btn btn-sm rounded-none'}`}  onClick={() => gotoPage(pageCount - 1)}>Last Page</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={`px-1 mb-10 flex flex-col`}>
            <div className={`bg-[#ffffff] w-1/2 font-Poppins text-sm py-10 border-[1px] border-[#ddd] pt-4`}>
                <ResultBarChart />   
            </div>                
        </div>
    </React.Fragment>
  )
}

export const ShowEntries = (props) => {

    const { pageSize, setPageSize } = props
    return(
        <React.Fragment>
            <div className={`flex px-10 flex-nowrap`}>         
                <div className="flex space-x-4">
                    <div className="flex items-center justify-center font-Poppins text-sm">Show Entries</div>
                    <div className={`flex justify-start`}>
                        
                        <select className="select-sm" type="number" value={pageSize} onChange={(event) => setPageSize(Number(event.target.value))}>
                            {
                                [2, 5, 10, 15, 20].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        {`${pageSize}`}
                                    </option>
                                ))
                            }

                        </select>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export const ResultBarChart = () => {

    const data = [
        {
            name: 'Prog001',
            Total_question: 200,
            Correct_answer: 110,
            Wrong_answer: 25,
            Unattempted: 65
        },
        {
            name: 'Mech001',
            Total_question: 200,
            Correct_answer: 120,
            Wrong_answer: 25,
            Unattempted: 55
        },
        {
            name: 'Elec002',
            Total_question: 200,
            Correct_answer: 90,
            Wrong_answer: 20,
            Unattempted: 90
        },
        {
            name: 'Net001',
            Total_question: 200,
            Correct_answer: 90,
            Wrong_answer: 20,
            Unattempted: 90
        }

    ]

    return(
        <React.Fragment>
            <div className='flex'>            
                <ResponsiveContainer width={750} height={300}>
                    <BarChart
                        width={550}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend  />
                    <Bar dataKey="Total_question" fill="#8884d8" />
                    <Bar dataKey="Correct_answer" fill="#42c712" />
                    <Bar dataKey="Wrong_answer" fill="#fc1433" />
                    <Bar dataKey="Unattempted" fill="#dee2e6" />
                </BarChart>
            </ResponsiveContainer>

           
           </div>
        </React.Fragment>
    )
}


export default Result