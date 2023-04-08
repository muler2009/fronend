import React, {useState} from 'react'
import { link_data } from '../../../../common/sideBarData'
import {CiSquareMinus, CiSquarePlus} from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Tree = ({ data }) => {

    return(
        <React.Fragment>
            <div className=''>
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
        <div onClick={() => setExpand(prev => !prev)} className={`mb-3 flex cursor-pointer`}>
          {
            hasChild && (
              <div>
                  {
                      !expand ? <CiSquarePlus className='flex justify-end text-xl mr-3 cursor-pointer' /> : <CiSquareMinus className='text-xl mr-3 cursor-pointer' />
                  }
              </div>
            )}
            <div className='flex'>
                <i className={`mr-1 ${node.icon}`}></i>
                <Link to={node.path}>
                  {node.label}     
                </Link>
            </div>
        </div>
        <ul className='pl-5 border-l-2 '>
          {
            hasChild && expand && <Tree data={children} className={`text-blue-500`} />
          }
        </ul>
      </React.Fragment>
    );
  }
  

export default Tree