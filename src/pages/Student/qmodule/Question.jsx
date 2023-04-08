import React, {useState} from 'react'
import {format} from 'date-fns'
import {GoFileSubmodule} from 'react-icons/go'
import { AiFillQuestionCircle, AiOutlineCaretRight, AiOutlineDashboard } from 'react-icons/ai'
import images from '../../../assets/images/images.png'
import { GrPlayFill, GrStopFill } from 'react-icons/gr'
import {IoInformationCircle} from 'react-icons/io5'
import { Link, Navigate } from 'react-router-dom'


const Question = () => {
    const [show, setShow] = useState(false)
  return (
   <React.Fragment>
        <section className={`w-full px-4 my-4`}>
            <div className={`flex px-3 items-center space-x-2 bg-[#fff6f9] py-5 mb-5 border-[1px] border-[#c9c9c9]`} >
                <Link to='../dashboard'>
                    <h6 className={`font-Poppins text-sm`}><span className='flex items-center gap-1 hover:underline'>
                        <AiOutlineDashboard size={25} />Dashboard</span>    
                    </h6>
                </Link>
                <AiOutlineCaretRight />
                <h6 className={`font-Poppins text-sm]`}>Module-1</h6>
            </div>

            <div className={`flex space-x-4`}>
                <div className={`w-3/4 border-[1px] rounded-t-lg border-[#ddd]`}>
                    <div className={`bg-[#f7f7f7] px-3 py-2 flex justify-start items-center space-x-4`}>
                            <GoFileSubmodule />
                            <h1 className={`font-Poppins`}>Module -1</h1>
                    </div>
                    <div className={`flex flex-col `}>
                        <div className={`flex justify-between items-center py-2 mr-4`}>
                            <h6 className={`py-2 font-Poppins px-4 text-sm`}>Sample Test</h6>
                                <button className={`flex justify-center space-x-4 items-center font-Poppins text-sm px-6 rounded-none text-zinc-200 ${!show ? ' bg-[#0073aa]' : 'bg-red-600 text-zinc-200'}`} onClick={() => setShow((!show))}>
                                    {!show ? <GrPlayFill color='white' className={`text-white`} /> : <GrStopFill />}
                                    {/* {!show ? "Start Mock" : "Close Mock"} */}
                                </button>
                        </div>
                        
                        <div className={`px-3 font-Poppins`}>
                            <h2 className={`font-Poppins text-red-700 text-sm`}>A kind of instruction regarding the module</h2>
                        </div>
                          
                    </div>   
                      

                </div>

                <div className={`w-1/4 p-1 rounded-t-lg`}>
                    <Card />
                </div>
            </div>
            {
                            show && <Quest />
                        }
        </section>      

   </React.Fragment>
  )
}

const Quest = () => {
    return(
        <React.Fragment>

            <section className={`my-4 border-[1px] border-[#ddd]`}>
                <div className={`bg-[#f7f7f7] px-3 py-2 flex justify-start items-center space-x-4`}>
                    <AiFillQuestionCircle />
                    <h1 className={`font-Poppins text-sm`}>Question 1</h1>
                </div>

            {/* Question box  */}
            <div className={`flex`}>

                <div className={`w-2/3 flex flex-col p-4`}>
                    <p className={`font-Poppins text-sm text-left`}>
                        Modulation is a functionality provided by physical layer of SRM of Mobile computing system. Which one best explain Modulation.
                    </p> 

                    {/* Choice for the questions                    */}
                    <form className='py-3 flex flex-col gap-1'> 
                        <label className={`flex space-x-3`}>
                            <div className={``}>
                                <input type='radio' className='w-5 h-5' />
                            </div>
                                <p className={`font-Poppins text-sm`}>a technique of Converting Analog signal to Digital signal</p>
                        </label>

                        <label className={`flex space-x-3`}>
                            <div className={``}>
                                <input type='radio' className='w-5 h-5' />
                            </div>
                                <p className={`font-Poppins text-sm`}>a technique of Converting Analog data to Digital signal</p>
                        </label>

                        <label className={`flex space-x-3`}>
                            <div className={``}>
                                <input type='radio' className='w-5 h-5' />
                            </div>
                                <p className={`font-Poppins text-sm`}>a technique of modulating Analog/Digital data to Analog/Digital signal</p>
                        </label>

                        <label className={`flex space-x-3`}>
                            <div className={``}>
                                <input type='radio' className='w-5 h-5' />
                            </div>
                                <p className={`font-Poppins text-sm`}>process of encoding source data onto a carrier signal by changing wave properties</p>
                        </label>


                    </form>


                </div>

                {/* Diagram for Question */}

               <div className={`w-1/3 flex justify-center items-center`}>
                    <img src={images} className={`object-cover object-center flex justify-center items-center `} alt="" />
               </div>   
            </div>
            </section>
        
            <section className={`mx-5 my-4`}>
                <button className={`font-Poppins text-sm px-5 rounded-none bg-green-500 text-zinc-200`}>
                    Check Answer
                </button>
            </section>

            <section className={`mx-5 my-4 border-[1px] border-[#ddd]`}>
            <div className={`bg-[#f7f7f7] px-3 py-2 flex justify-start items-center space-x-4`}>
                <AiFillQuestionCircle />
                <h1 className={`font-Poppins text-sm`}>Explanation</h1>
            </div>
            <div className={`p-5`}>
                <h1 className={`font-Poppins text-sm`}>Explanation for the question </h1>
            </div>
            </section>


        </React.Fragment>
    )
}


const Card = () => {

    return(
        <React.Fragment>
            <div className={`flex flex-col`}>
                <div className={`bg-[#0073aa] py-3 px-2 rounded-t-lg flex gap-1`}>
                    <IoInformationCircle color='white' size={20} className={`flex items-center`} />
                    <h5 className={`font-Poppins text-[14px] text-zinc-300`}>
                        <span className='text-center text-sm font-Poppins'>
                            {`${format(new Date(), 'EEEE do, MMMM, yyyy')}`}
                        </span> 
                    </h5> 
                </div>
                
                <div className={`flex flex-col font-Poppins justify-between items-center border-t-[1px]  border-b-[1px]`}>
                    <h5 className={`text-sm text-black px-3 py-2 `}>Module-1: Networking </h5>
                </div>

                <div className={`p-2 font-normal`}>
                    <table className={`table table-striped gap-2 font-normal `}>
                        <tbody>
                            <tr className='hover:scale-105'>
                                <th className='font-normal'>Duration</th>
                                <td>15:00 min</td>
                            </tr>
                            <tr>
                                <th>Remaining Time</th>
                                <td>10:00 Miniuted</td>
                            </tr>
                            <tr>
                                <th>Attempted Queastion</th>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </React.Fragment>   
    )
}

export default Question