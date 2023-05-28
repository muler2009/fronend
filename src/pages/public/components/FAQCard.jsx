import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Div } from '../../../assets/css/styledComponents'
import { motion } from 'framer-motion'
import { registration_processes } from '../constants/constants'
import Mockmodal from './Mockmodal'

const FAQCard = () => { 
    const faqMainVariants = {
        init: {
            opacity: 0,
            y: 75
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                when: "beforeChildren",
                staggerChildren: 0.3,
                staggerDirection: -1
              }
        }
    }

    const faqComponentVariant = {
        init: { 
            opacity: 0,
            y: 10, 
        },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
          }
      }
    }

  return (
    <motion.div variants={faqMainVariants} initial="init" animate="visible" className='relative flex flex-col mt-16'>
        <motion.div variants={faqComponentVariant} className="before:xxs:w-0 before:content-[''] before:absolute before:top-[2%] before:w-[35%] before:h-[1px] before:left-0 before:bg-[#ddd] after:xxs:w-0 after:content-[''] after:absolute after:top-[2%] after:w-[35%] after:h-[1px] after:right-0 after:bg-[#ddd]" >
            <motion.h1  className="font-Oswald pb-10 xxs:text-[35px] lg:text-[25px] tracking-normal uppercase flex justify-center items-center after:xxs:content-[''] after:xxs:absolute after:xxs:top-16 after:xxs:w-[35%] after:xxs:h-[1px] after:xxs:-bottom-[0%] after:xxs:bg-[#ddd]"
            >Steps to Follow</motion.h1>
        </motion.div>

        {
            registration_processes?.map((reg, index) => (
                <motion.div key={index} variants={faqComponentVariant} className="flex justify-start items-center lg:space-x-16">           
                    <div className="flex space-x-5 p-1 xs:w-full lg:w-full bg-white rounded-lg mt-6 shadow-lg">
                        <div className="pl-5 pr-7 py-4 bg-[#00bdff] rounded-l-lg">
                            <h1 className="font-Oswald uppercase text-[25px] font-semibold text-white">
                                {reg.step} <br />
                                {reg.step_no}
                            </h1>
                        </div>
                        <div className='flex flex-col py-3'>
                            <h1 className="font-Oswald uppercase text-[#3C4852] mb-3 text-[25px]">{reg.title}</h1>
                            <div>
                                {
                                    reg?.process.map((pro ,index) => (
                                        <ul key={index} className="list-disc text-[#3C4852] font-Poppins text-sm pl-3 pr-5 leading-6">
                                            <li>{pro.list_one}</li>
                                            <li>{pro.list_two}</li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </motion.div>
            ))
        }
    </motion.div>
  )
}

export default FAQCard