import React from 'react'
import * as FaIcons from 'react-icons/fa'

const InformationBox = (props) => {
  return (
    <div className={`bg-[#fff] flex items-center justify-start py-4 space-x-2 px-4`}>
        <span><FaIcons.FaChartBar size={30} color='darkblue' /></span>
        <h1 className={`text-xl font-Oswald tracking-wide`}></h1>
    </div>
  )
}

export default InformationBox