import React from "react";
import { VscClose } from "react-icons/vsc";
import { IoInformationCircleSharp } from 'react-icons/io5'
import { GrFormUpload } from 'react-icons/gr'

const ImportFromCSV = (props) => {
    const { importcsv, setImportcsv} = props

    if(!importcsv) 
        return null

    return(
        <React.Fragment>
            <section className='bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center' >
                <div className='flex flex-col bg-white rounded-lg relative container w-[50%] h-[40%] top-20  overflow-hidden'>
                    <div className={`flex justify-between items-center px-5 py-5 after:content-[" "] after:absolute after:top-12 afer:mr-10 after:w-full after:h-[1px] after:bg-[#ddd]`}>
                        <h1 className={`font-Poppins text-[15px] `}>Import from CSV</h1>
                        <div className='bg-zinc-100 rounded-full hover:bg-red-400 cursor-pointer' onClick={() => setImportcsv(prev => !prev)}>
                            <VscClose className='text-xl hover:text-white' />
                        </div> 
                    </div>

                    {/* Information on uploading csv */}

                    <div className={`w-4/5 my-5 mx-auto flex space-x-4 relative`}>
                        <div className={`float-left`}>
                            <IoInformationCircleSharp size={50} />
                        </div>
                        <div className={`flex justify-center items-center after:content-[" "] after:absolute after:top-16 after:w-[50%] after:h-[2px] after:bg-blue-900`}>
                            <p className={`font-Poppins text-sm`}>
                                To import a list of questions, you will need to create a <span className="text-blue-500">.csv, .xls</span> or  <span className="text-blue-500">.xlsx</span> file with a list of questions. You can also download and populate questions with the help of given sample templates.
                            </p>
                        </div>
                    </div>


                    {/* Information on uploading csv */}

                    <div className={`w-2/3 flex flex-col space-y-3  my-5 mx-auto`}>
                        <label className={`font-Poppins`}>Browse a file</label>
                        <input 
                            type={`file`} 
                            className={`font-Poppins input-md text-sm p-0 file:py-2 file:border-0 bg-[#fafafa] `}
                        />
                    </div>

                    {/* Upload action button */}
                    <div className={`flex w-4/5 justify-end mx-auto py-5 rounded-none p-1`}>
                            <button className={`btn-sm px-5 font-Poppins text-sm rounded-none flex space-x-1 justify-center items-center`}>
                                <GrFormUpload size={20} />
                                <h1>Upload</h1>
                            </button>
                        </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ImportFromCSV