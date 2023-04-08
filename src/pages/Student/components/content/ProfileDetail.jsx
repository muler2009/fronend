import React, { useState, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTable } from 'react-table'
import { PROFILE_COLUMN } from '../../../../common/attributes'
import * as Io from 'react-icons/io5'
import * as Ci from 'react-icons/ci'
import * as Md from 'react-icons/md'
import * as Bi from 'react-icons/bi'
import { useGetUserDataQuery } from '../../../../features/users/profileApiSlice'


export const ProfileDetail = (props) => {

   const { id } = useParams()
    
   const [selectedData, setSelectedData] = useState({})
   const showSelectedData = (selected) => {
        setSelectedData(selected)
   }

    const { data, isLoading, isSuccess, isFetching, isError } = useGetUserDataQuery({id})

    const { userAccountInformation } = props

    const useAction = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns, 
            {
                Header: 'Action',
                Cell: ({ row }) => {
                    const rowData = row.values.id                 
                    return(
                        <div className="hidden md:flex md:justify-evently space-x-2">
                            <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                                <Md.MdSummarize className="text-lg"  />
                            </div>
                            <div className="w-6 h-6 flex justify-center items-center hover:rounded-full hover:bg-white hover:text-black hover:scale-125">
                                <Link to={`edit/${rowData}`} onClick={() => showSelectedData(row.values)} > 
                                    <Ci.CiEdit className="text-lg" onClick={() => showSelectedData(row.values)} />
                                </Link>  
                            </div>                                
                        {/* </Link> */}
                        </div>   
                    )
                }
            }
        ])
      }
    
    const tableInstance = useTable({
        columns: PROFILE_COLUMN,
        data:  userAccountInformation,
        initialState: { pageIndex: 0, pageSize: 10 }
    }, useAction, )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return(
        <React.Fragment>
            {/* Fragment for show entries  and addsection button for QuestionList*/}
                    <table className={`table table-striped text-left mb-5 text-[14px] px-2`} {...getTableProps()}>
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
                                rows.map((row) => {
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
        </React.Fragment>
    )
}

export default ProfileDetail


