
import React, { useState } from 'react'
import { useAddQuestion } from '../../Uploader/components/useAddQuestion'
import ShowAnswer from '../components/ShowAnswer'
import ShowResultOfQuiz from './ShowResultOfQuiz'
import QuestionCardModified from './QuestionCardModified'
import { currentModuleCode } from '../../../features/module/moduleSlice' 
import { useSelector } from 'react-redux'

const Questions = (props) => {  

    const module_code = useSelector(currentModuleCode);

    const { 
        data: questions, 
        result, 
        setResult,
        lastIndex,
        answerSelected, 
        setAnswerSelected, 
        totalQuestions, 
        setSelectedAnswerIndex, 
        selectedAnswerIndex, showResult, setShowResult ,
        page,
        setPage
    } = props
 
    return (
        <React.Fragment>

        <div className={`bg-white mx-1 flex justify-between items-center px-10 py-5`}>
        
                <h1 className={`font-Poppins`}>Mock Module{module_code}</h1>           
                <h1 className={`font-Oswald`}>00:00</h1>
        
        </div>
        <div className={`flex flex-col`}>
            {
                questions?.map((question,index) => {
                    return(
                        <QuestionCardModified  
                            question={question} key={index} 
                            result={result} setResult={setResult} 
                            answerSelected={answerSelected} 
                            setAnswerSelected={setAnswerSelected} 
                            totalQuestions={totalQuestions}
                            selectedAnswerIndex={selectedAnswerIndex}
                            setSelectedAnswerIndex={setSelectedAnswerIndex}
                            lastIndex={lastIndex}
                        />            
                    )
                })
            }
        </div>   
        
    </React.Fragment>  
  )
}

// export const QuestionCard = (props) => {

//     const { question, result, setResult, answerSelected, setAnswerSelected, questions  } = props
    
//     const [show, setShow] = useState(false)
//     const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

//     const onAnswerSelected = (answer) => {
//         if(answer === question.correct_answer) {
//             setAnswerSelected(true) 
//             console.log('right')
//         }else {
//             setAnswerSelected(false)
//             console.log('wrong')
//         }
//     }

//     return(
//         <React.Fragment>
//             <div className={`w-full flex my-2 mx-1 bg-white`}>
//                 <div className={`w-2/3 flex`}>
//                     <div className={`w-1/7 p-5 my-5`}>
//                         <div className={`w-10 h-10 bg-green-400 rounded-full text-white font-bold flex justify-center items-center`}>
//                             <h1 className={`text-xl`}>{question.id}</h1>
//                         </div>
//                     </div>
//                     <form onSubmit={(event) => event.preventDefault()}>    
//                         <div className={`px-4 py-10 flex flex-col font-Poppins text-sm gap-3`}>
//                             <div className={`py-4`} >
//                                 {question.question}
//                             </div>  

//                             <div className={`flex bg-gray-100 py-3 px-4 cursor-pointer`}  onClick={() => onAnswerSelected(question.choice_A)}>
                           
//                                 <div 
//                                     type={`text`} 
//                                     name="choice_A" 
//                                     id="choice_A"
//                                     value={question.choice_A} 
//                                     className={`cursor-pointer`}
//                                     //checked={answerSelected === question.choice_A}
//                                     //onChange={(event) => setAnswerSelected(event.target.value)}
                                     
//                                     placeholder={question.choice_A}
//                                 >{question.choice_A}</div>
                                    
                           
//                         </div> 

//                         <div className={`flex bg-gray-100 py-3 px-4`}>
//                             <label  className='flex space-x-3'>
//                                 <input 
//                                     type={`text`} 
//                                     name="choice_B"
//                                     id="choice_B" 
//                                     value={question.choice_B} 
//                                     className={`w-5 h-5 cursor-pointer`}
//                                     onChange={(event) => setAnswerSelected(event.target.value)}
//                                     // checked={answerSelected === question.choice_B}
//                                     onClick={() => onAnswerSelected(question.choice_B)}        

//                                 />
//                                 <p>{question.choice_B}</p>
//                             </label>
//                             {/* <li onClick={() => onAnswerSelected(answerSelected)}>{question.choice_B}</li> */}
//                         </div> 

//                         <div className={`flex bg-gray-100 py-3 px-4`}>
//                             <label htmlFor="choice_C" className='flex space-x-3'>
//                                 <input 
//                                     type={`text`} 
//                                     name="choice_C"
//                                     id="choice_C" 
//                                     value={question.choice_C} 
//                                     className={`w-5 h-5 cursor-pointer`}
//                                     //checked={answerSelected === question.choice_C}
//                                     onChange={(event) => setAnswerSelected(event.target.value)}
//                                     onClick={() => onAnswerSelected(question.choice_C)}   
//                                 />
//                                 <p>{question.choice_C}</p>
//                             </label>
//                         </div> 
                        
//                         <div className={`flex bg-gray-100 py-3 px-4`}>
//                             <label htmlFor="choice_D" className='flex space-x-3'>
//                                 <input 
//                                     type={`text`} 
//                                     name="choice_D"
//                                     id="choice_D" 
//                                     value={question.choice_D} 
//                                     className={`w-5 h-5 cursor-pointer`}
//                                     //checked={answerSelected === question.choice_D}
//                                     onChange={(event) => setAnswerSelected(event.target.value)}
//                                     onClick={() => onAnswerSelected(question.choice_D)} 
//                                 />
//                                 <p>{question.choice_D}</p>
//                             </label>
//                         </div> 
//                         </div>
//                     </form>
//                 </div>
//                 {/* Image section  */}

//                 <div className={`w-1/3 flex flex-col font-Poppins text-sm`}>
//                     {
//                         question?.image && (<img src={question.image} alt="Figure" /> )
//                     }

//                     <div className={``}>
//                         {question.caption}
//                     </div>
//                 </div>   
                                
//             </div>
               
//             <div className={``}>
//                 <button onClick={() => setShow(prev => !prev)}>Show Score</button>
//             </div>

//             <ShowResultOfQuiz questions={questions} result={result} show={show} setShow={setShow} />

                    


//         </React.Fragment>
//     )
// }
           

// export const QuestionCardModified2 = (props) => {

//     const { question, result, setResult, answerSelected, setAnswerSelected, totalQuestions, key  } = props
    
//     const [show, setShow] = useState(false)
//     const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

//     const onAnswerSelected = (answer) => {
        
//         if(answer === question.correct_answer) {
//             setAnswerSelected(true) 
//             console.log('right')
//         }else {
//             setAnswerSelected(false)
//             console.log('wrong')
//         }
//     }

//     const [clicked, setClicked] = useState(false)

//     return(
//         <React.Fragment>
//             <div className={`w-full flex my-2 mx-1 bg-white`}>
//                 <div className={`w-2/3 flex`}>
//                     <div className={`w-1/7 p-5 my-5`}>
//                         <div className={`w-10 h-10 bg-green-400 rounded-full text-white font-bold flex justify-center items-center`}>
//                             <h1 className={`text-xl`}>{question.id}</h1>
//                         </div>
//                     </div>
//                     <form onSubmit={(event) => event.preventDefault()}>    
//                         <div className={`px-4 py-10 flex flex-col font-Poppins text-sm gap-3`}>
//                             <div className={`py-4`} >
//                                 {question.question}
//                             </div>  

//                             <div className={`flex bg-gray-100 py-3 px-4 cursor-pointer ${clicked ? "bg-green-500": 'white'}`}  
//                                 >
                           
//                                 <div 
                                    
//                                     type={`text`} 
//                                     name="choice_A" 
//                                     id="selected"
//                                     value={question.choice_A} 
//                                     onClick={
//                                         () => 
//                                             onAnswerSelected(question.choice_A)
                                            
//                                     }
                                  
                                   
//                                 >{question.choice_A}</div>
                                    
                           
//                         </div> 

//                         <div className={`flex bg-gray-100 py-3 px-4`}>
                            
//                                 <div 
//                                     type={`text`} 
//                                     name="choice_B"
//                                     id="choice_B" 
//                                     value={question.choice_B} 
//                                     className={`cursor-pointer`}
//                                     onChange={(event) => setAnswerSelected(event.target.value)}
//                                     // checked={answerSelected === question.choice_B}
//                                     onClick={() => onAnswerSelected(question.choice_B)}        

//                                 ><p>{question.choice_B}</p> </div>
                           
//                             {/* <li onClick={() => onAnswerSelected(answerSelected)}>{question.choice_B}</li> */}
//                         </div> 

//                         <div className={`flex bg-gray-100 py-3 px-4`}>
                           
//                                 <div 
//                                     type={`text`} 
//                                     name="choice_C"
//                                     id="choice_C" 
//                                     value={question.choice_C} 
//                                     className={`cursor-pointer`}
//                                     //checked={answerSelected === question.choice_C}
//                                     onChange={(event) => setAnswerSelected(event.target.value)}
//                                     onClick={() => onAnswerSelected(question.choice_C)}   
//                                 >

//                                 <p>{question.choice_C}</p>
//                                 </div>
                            
//                         </div> 
                        
//                         <div className={`flex bg-gray-100 py-3 px-4`}>
                           
//                                 <div 
//                                     type={`text`} 
//                                     name="choice_D"
//                                     id="choice_D" 
//                                     value={question.choice_D} 
//                                     className={`w-full cursor-pointer`}
//                                     //checked={answerSelected === question.choice_D}
//                                     onChange={(event) => setAnswerSelected(event.target.value)}
//                                     onClick={() => onAnswerSelected(question.choice_D)} 
//                                 >
//                                     <p>{question.choice_D}</p>

//                                 </div>
                            
//                         </div> 
//                         </div>
//                     </form>
//                 </div>
//                 {/* Image section  */}

//                 <div className={`w-1/3 flex flex-col font-Poppins text-sm`}>
//                     {
//                         question?.image && (<img src={question.image} alt="Figure" /> )
//                     }

//                     <div className={``}>
//                         {question.caption}
//                     </div>
//                 </div>   
                                
//             </div>

//             {result.score}
               
//             <div className={``}>
//                 <button onClick={() => setShow(prev => !prev)}>Show Score</button>
//             </div>

//             <ShowResultOfQuiz totalQuestions={totalQuestions} result={result} show={show} setShow={setShow} />

                    


//         </React.Fragment>
//     )
// }
      















export default Questions











export const QuestionCard2 = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { data: question } =props

   
    return(
        <React.Fragment>
            <h2>
            Question: {currentQuestion + 1} out of {question.length}
          </h2>
          
            {
                question?.map((q, index) => (
                    <>
                        <h3 key={index}>{q.question}</h3>
                        <ul>
                            {
                                q?.options?.map((option) => {
                                    return(
                                        <li key={option.id}>{option.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </>
                )
          
                )}
          
          
        </React.Fragment>
    )
}