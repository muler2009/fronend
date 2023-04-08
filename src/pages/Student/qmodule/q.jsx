import React from 'react'
import { QuestionCard } from './Questions'

const q = (props) => {

  const { data: questions, result, setResult} = props

  return (
    <React.Fragment>
            <div className={`flex flex-col space-x-1`}>
                {
                    questions?.map((question,index) => {
                        return(
                            <QuestionCard question={question} key={index} result={result} setResult={setResult} />            
                        )
                    })
                
                }
            </div>

           
    </React.Fragment>
  )
}

export default q