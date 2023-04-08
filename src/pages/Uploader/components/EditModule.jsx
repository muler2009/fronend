import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleModuleQuery } from '../../../features/module/moduleApiSlice'
import ModuleAdderModal from './ModuleAdderModal'

const EditModule = () => {

  const { id } = useParams()

  const { 
      data,
      isLoading,
      isFetching,
      isError
  } = useGetSingleModuleQuery(id)

  console.log(data)

  return (
    <React.Fragment>
       {
        isError && <p>error occured </p>
       }
    </React.Fragment>
  )
}

export default EditModule