import React from 'react'
import * as Bs from 'react-icons/bs'

const StartJourney = () =>  (
    <div className={`w-[100px] h-[100px] border-[1px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`flex justify-center flex-col bg-[#f2eef8] w-full h-full rounded-full`}>
        <div className="flex flex-row justify-center ">
            <p className=" font-Poppins font-medium text-[16px] leading-[23px]">
                <span className="text-balck flex justify-center items-center">Start</span>
            </p>
            <Bs.BsArrowUpRight size={20} />

            <p className="font-poppins font-medium text-[15px] leading-[23.4px]">
                <span className="text-red-800">Journey</span>
            </p>
        </div>
        </div>
    </div>
  )


export default StartJourney