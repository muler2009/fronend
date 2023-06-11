import React from 'react'
import faq from '../../../assets/images/faq-1.png'

const FAQImage = () => {
  return (
    <div className="flex flex-col bg-white">
         
        <img src={faq} alt="Frequently asked Question" className="object-cover object-center"/>
       
    </div>
  )
}

export default FAQImage