import React, {useState} from 'react'
import { accordion } from '../../../common/faqAccordion'

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(true);
  const handleClick = (index) => {
     setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
      <div className={`flex flex-col md:flex space-x-4`}>
        <div className={`flex-1 justify-start flex-col`}>
          <div className="flex flex-col">
            <h1 className="font-Oswald text-2xl flex justify-center items-center">Frequently Asked Questions (FAQ)</h1>
            <div className={`p-3 font-Poppins cursor-pointer`}>
              <div className="flex flex-col gap-2 container mx-auto my-2 bg-white`">
                {
                  accordion?.map((accordion, index) => (
                    <>
                    <div className="flex flex-col border-[1px] p-1">
                        <div className="flex justify-between items-center px-4 pt-3 bg-white" key={index} 
                            onClick={() =>{
                                handleClick(index)
                                setOpen(prev => !prev)
                              }
                              }>
                            <div>{accordion.title}</div>
                            <div>{index === activeIndex ? accordion.mIcon : accordion.pIcon}</div>
                        </div>
                        <div className="font-Poppins">
                          <p className=''>
                              {index === activeIndex && 
                                <ul className="list-disc font-Poppins px-10 py-4 leading-[25px] text-sm">
                                  {
                                    accordion?.content.map(content => (
                                      <li>{content}</li>
                                    ))
                                  }
                                </ul>
                              }
                          </p>
                        </div>

                    </div>
                    </>
                  ))
                  }
              </div>    
            </div>
          </div>  
        </div>
      </div>
  )
}

export default FAQ