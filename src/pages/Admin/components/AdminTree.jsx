import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {CiSquarePlus, CiSquareMinus} from 'react-icons/ci'
import { FaUser, FaUserMinus, FaUserPlus } from 'react-icons/fa'

const AdminTree = ({ data }) => {

    return(
        <React.Fragment>
            <div className='text-white text-[15px]'>
                {data.map((node) => (
                    <TreeNode node={node} key={node.key} />
                ))}
            </div>
        </React.Fragment>
    )
}

const TreeNode = ({ node }) => {
    const { children, label, icon } = node;
    const [expand, setExpand] = useState(false)
    const hasChild = node.children ? true : false


    return (
      <React.Fragment>
        <div onClick={() => setExpand(prev => !prev)} className={`mb-3 py-2 flex cursor-pointer focus:bg-white focus:text-black`}>
          {
            hasChild && (
              <div>
                  {
                      !expand ? <FaUserPlus className='flex justify-end text-xl mr-3 cursor-pointer' /> : <FaUserMinus className='text-xl mr-3 cursor-pointer' />
                  }
              </div>
            )}

            <div className='flex flex-row space-x-5'>
                {/* <i className={`mr-1 ${node.icon}`}></i> */}
                <Link to={node.path} className='flex gap-3'>
                  {node.icon}{node.label}     
                </Link>
            </div>

        </div>
        <ul className='pl-5 flex'>            
          { 
            hasChild && expand && 
                <div className={`flex space-x-4`}>

                    <AdminTree data={children} className={`text-blue-500`} />
                </div>
          }
        </ul>
      </React.Fragment>
    );
  }

export default AdminTree