import React from 'react'
import { subscribtion } from '../constants/constants'
import { FaSearch } from 'react-icons/fa'
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs' 
import { useSpring, animated, config } from 'react-spring';
import useAnimations from '../../../hooksForAnimation/useAnimations';

const Subscribe = () => {

  const {fade} = useAnimations()

  const slideLeft = useSpring({ 
    from: { marginLeft: -100 }, 
    to: { marginLeft: 0, delay: 200} ,
    config: { delay: 1000, duration: 1000 }
  })

  return (
    <section className="bg-white flex md:flex bg-opacity-40 py-5 my-5">
      <div className="flex-1 py-10">
        <div className="container mx-auto xs:px-[5px] flex flex-col relative">

          {/* Heading  */}
          <div className={`flex justify-center py-5`}>
            <h1 className='font-Oswald text-3xl before:xs:none after:xs:none before:content-[""] before:absolute before:top-10 before:left-32 before:h-[1px] before:w-1/3 before:bg-[#f2f2f2] before:mr-5 after:content-[""] after:absolute after:top-10 after:right-32 after:h-[1px] after:w-1/3 after:bg-[#f2f2f2]'>Your Subscription Offer</h1>
          </div>

          {/* Subscription plan */}
          <div className='flex flex-wrap justify-center items-center'>
            <div className={`w-full xs:mx-5 sm:w-1/3 sm:mx-5 ss:mx-16 md:w-1/5 shadow-md ring-2 ring-[#09bdd9] rounded-sm my-3 flex flex-col relative border-tl-[50%]`} >
                <div className={`p-5 flex justify-center items-center relative`}>
                  <h1 className="font-Poppins text-xl font-normal my-4 flex">Mock
                    <span className={`absolute -top-3 -right-4 w-20 h-20 border-[1px] rounded-full font-Poppins bg-red-600 text-white flex justify-center items-center text-[16px] font-normal`}>Free</span>
                  </h1>
                </div>

                <div className={`flex flex-col items-center justify-center font-Poppins `}>
                  <div className="flex-1">
                    <h1 className="text-[20px] p-3.5 text-white bg-[#09bdd9] rounded-lg">
                       Open
                    </h1>
                    <div className="flex items-end my-5 space-x-2">
                      <div className="font-Poppins text-sm w-[60px] h-[60px] rounded-full bg-[#09bdd9] flex justify-center items-center relative text-white ">
                        25
                        <span className='absolute -top-[-5px] ml-6 text-white font-semibold text-[15px]'>+</span>
                      </div>
                      <span className="font-Poppins text-sm">question</span>

                    </div>
                  </div>
                </div>

                <div className={`mx-10 font-Poppins my-5 `}>
                  <ul className="font-Poppins">
                        <li className="flex flex-row space-x-3 justify-start items-center text-[12px]">
                          <Ai.AiFillRightCircle color='#09bdd9' size={20}/>
                          <p>With full explanantion</p>
                        </li>
                        <li className="flex flex-row space-x-3 justify-start items-center text-[12px]">
                          <Ai.AiFillRightCircle color='#09bdd9' size={20}/>
                          <p> demonestration</p>
                        </li>
                        <li className="flex flex-row space-x-3 justify-start items-center text-[12px]">
                          <Ai.AiFillRightCircle color='#09bdd9' size={20}/>
                          <p>Recommendations</p>
                        </li>
                    </ul>
                </div>

                <div className="w-full mx-auto">
                  <button className="btn-sm px-10 bg-[#09bdd9] rounded-none text-white my-6 w-full hover:bg-opacity-75 hover:text-black">Start the Mock</button>
                </div>
            </div>

            {/* Payment Subscription plan */}

            {
              subscribtion?.map((subsricbe, index) => (
                <div className={`w-full sm:w-1/3 sm:mx-5 ss:mx-16 md:w-1/5 shadow-md ring-2 ring-[#09bdd9] rounded-sm my-3 flex flex-col relative ${index === subscribtion[0] ? "ml-5" : "mx-5"}`} key={index}>
                  <div className={`p-5 flex justify-center items-center`}>
                    <h1 className="font-Poppins text-xl font-normal my-4">{subsricbe.title}</h1>
                  </div>

                  <div className={`flex flex-col items-center justify-center font-Poppins `}>
                    <div className="flex-1">
                      <h1 className="text-[40px] text-black">
                        {subsricbe.cost}{" "}
                          <span>{index === subscribtion ? null : "ETB"}</span>
                      </h1>
                      <div className="flex items-end my-5 space-x-2">
                        <div className="font-Poppins text-sm w-[60px] h-[60px] rounded-full bg-[#09bdd9] flex justify-center items-center relative text-white ">
                          {subsricbe.perQuestion}{" "}
                          <span className='absolute -top-[-5px] ml-6 text-white font-semibold text-[15px]'>+</span>
                        </div>
                        <span className="font-Poppins text-sm">question</span>

                      </div>
                    </div>
                  </div>

                  <div className={`mx-10 font-Poppins my-5 `}>
                    {
                      subsricbe?.explaination?.map((explain,index) => (
                        <ul className="list-none">
                          <li className="flex flex-row space-x-3 justify-start items-center text-[12px]" key={index}>
                            <Ai.AiFillRightCircle color='#09bdd9' size={20}/>
                            <p>{explain.ex}</p>
                          </li>
                          <li className="flex flex-row space-x-3 justify-start items-center text-[12px]" key={index}>
                            <Ai.AiFillRightCircle color='#09bdd9' size={20}/>
                            <p>{explain.demo}</p>
                          </li>
                          <li className="flex flex-row space-x-3 justify-start items-center text-[12px]" key={index}>
                            <Ai.AiFillRightCircle color='#09bdd9' size={20}/>
                            <p>{explain.recommendations}</p>
                          </li>
                        </ul>
                        
                      ))
                    }
                  </div>

                  <div className="w-full mx-auto">
                  <button className="btn-sm px-10 bg-[#09bdd9] rounded-none text-white my-6 w-full">Get Access</button>
                  </div>
                </div>
                
              ))
            }
          </div>

        </div>
      </div>
       
    </section>
  )
}

export default Subscribe