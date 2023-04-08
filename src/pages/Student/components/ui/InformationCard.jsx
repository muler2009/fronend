import React from 'react'
import * as MdIcons from 'react-icons/md'

const InformationCards = (props) => {
    const {title, num} = props
  return (
    <React.Fragment>
        <div className={`flex py-5 px-7 space-x-3`}>
            <MdIcons.MdEvent size={50} color='#071466' />
            <div className='flex flex-col justify-center'>
                <span className={`font-Poppins text-sm`}>{title}</span>
                <span className={`inline-block`}>{num}</span>
            </div>
        </div>
    </React.Fragment>
  )
}

export default InformationCards