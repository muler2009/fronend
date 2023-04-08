import React, {useState} from 'react'
import {AiOutlineCheckCircle } from 'react-icons/ai'

const AnswerExplanation = (props) => {
    const { answerSelected } =props

    const [check, setCheck] = useState(false)

  return (
   <React.Fragment>
{
        <button className={`btn-sm text-white px-5 text-sm bg-green-600 rounded-none disabled:opacity-25 disabled:cursor-default`} 
                disabled={!answerSelected ? true : false} 
                onClick={() => setCheck(!check)}
        >
                Check Answer
        </button>}
            {
                check && 
                (
                    <div className={`flex`}>
                            <div className={`w-1/7 p-5 my-5`}>
                                <AiOutlineCheckCircle size={50} color='#4ade80' />
                            </div>

                            <table className={`table table-border mx-5 mb-5 h-full`}>
                                <thead>
                                    <tr>
                                        <th className={`w-[10%]`}>Correct Answer</th>
                                        <th className='w-[70%'>Explanation</th>
                                        <th className={`w-[20%]`}>Remark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`text-center`}>A</td>
                                        <td>
                                            <p className={`px-5  leading-7`}>
                                            Frontend developers typically use plaintext inputs or textarea elements for capturing small-sized text segments, such as a username, address, or city. In some scenarios, they need to let users enter styled, formatted text with multi-media items in web applications. However, plaintext inputs can’t satisfy these requirements, so developers tend to use the rich text editors concept.
                                            </p>
                                        </td>
                                        <td>Chapter 1 and 2</td>
                                    </tr>
                                </tbody>
                            </table>

                    </div>
                )
                    }          
   </React.Fragment>
  )
}

export default AnswerExplanation