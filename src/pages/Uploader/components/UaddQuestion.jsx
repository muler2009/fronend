import React, { useState } from 'react'
import { department } from '../ucommon/attributes'
import { EditorBox } from './AddQuestion'

const UaddQuestion = () => {

  const [display, set] = useState('')
  const handleChange = (event) => {
    event.preventDefault()
    set(event.target.value)
  }
  
  return (
    <React.Fragment>
      <section className={`bg-white mx-4 border-[1px] border-[#ddd] my-2 rounded-tl-xl rounded-tr-xl`}>
        <div className={` px-4 py-3 border-b-[1px]`}>
          <h1 className={`font-Oswald tracking-wide text-lg`}>Adding a Question</h1>
        </div>

          <div className={`w-full`}>
            <div className='flex items-center space-x-5 px-5 my-5 w-1/4'>
                <label htmlFor="dept" className='font-Poppins text-sm'>Department*</label>
                <select id='dept' type='text' name='dept'  className='input-sm my-2 py-1 font-Poppins text-sm' onChange={(event) => handleChange(event)}>
                    <option>---Select your Department---</option>
                      {
                          department.map(department => (
                              <option key={department.deptId} value={department.deptId} >
                                  {department.name}
                              </option>
                          ))
                      }
                </select>
              </div>  

          </div>

        {
          display && <div className={`w-full `}>
            <div className={`px-5 relative bottom-1`}>
              <h1 className={`font-Poppins text-center text-lg before:content-[""] before:absolute before:top-4 before:left-16 before:bg-[#ddd] before:w-[40%] before:h-[1px] after:content-[""] after:absolute after:top-4 after:ml-1 after:bg-[#ddd] after:w-[40%] after:h-[1px]`}>Adding Question</h1>
              <EditorBox />
            </div>
          </div>
        }
      </section>
    </React.Fragment>
   
  )
}

export default UaddQuestion