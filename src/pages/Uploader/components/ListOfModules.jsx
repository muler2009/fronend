import React from 'react'
import { useTable, usePagination } from 'react-table'
import { useGetModuleQuery } from '../../../features/module/moduleApiSlice'
import DataTable from '../ucommon/DataTable'


const ListOfModules = () => {

    const {
        isSuccess, 
        isLoading, 
        isError,
        isFetching,
        data: apiResponse
    } =   useGetModuleQuery()
    
    return (
        <React.Fragment>
            {
                isLoading || isFetching && <p>Loading data from ...</p>
            }

            {
                isSuccess && <DataTable tableData={apiResponse} />

            }
        </React.Fragment>
    )
}
export default ListOfModules