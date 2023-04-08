import React, {useState} from 'react'
import ShowResultOfQuiz from './ShowResultOfQuiz'
import images from '../../../assets/images/images.png'

 const QuestionCardModified = (props) => {

    const { question, result, setResult, answerSelected, setAnswerSelected, totalQuestions, selectedAnswerIndex, setSelectedAnswerIndex, page, setPage  } = props
    
    const [show, setShow] = useState(false)
    

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if(answer === question.correct_answer) {
            setAnswerSelected(true) 
            console.log('right')
        }else {
            setAnswerSelected(false)
            console.log('wrong')
        }
    }


    const ChoiceLetter = ["A", "B", "C", "D"]
    let letter = ChoiceLetter.map(letter => letter)


    return(
        <React.Fragment>
            <div className={`my-2 mx-1 bg-white sm:block lg:flex `}>
                <div className={`sm:w-full lg:w-2/3 flex`}>
                    <div className={`w-1/7 p-5 my-5`}>
                        <div className={`w-10 h-10 bg-green-400 rounded-full text-white font-bold flex justify-center items-center`}>
                            <h1 className={`text-xl`}>{question.id}</h1>
                        </div>
                    </div>
                     
                    <div className={`px-4 py-10 flex flex-col font-Poppins text-sm gap-3`}>
                        <div className={`py-4`} >
                            {question.question}
                        </div> 
                       

                        <div className={`my-2 cursor-pointer`}>
                            <div className={`flex flex-col gap-2`}>
                                {
                                    question?.choices.map((answer, index) => (                                         
                                        <div                      
                                            onClick={() => onAnswerSelected(answer, index)} 
                                            key={answer}
                                            className={`w-full flex space-x-3`}
                                        >
                                            <div className={`rounded-full w-10 h-10 flex justify-center items-center
                                                ${selectedAnswerIndex === index 
                                                    ? answer === question.correct_answer 
                                                        ?  'bg-green-500 text-white' : 'bg-red-200'
                                                    : null
                                                }
                                            `}
                                            >
                                                {letter[index]}
                                            </div>

                                            <div  className={`bg-white py-2 w-4/5  ${selectedAnswerIndex === index 
                                                    ? answer === question.correct_answer 
                                                        ?  'text-green-700 font-bold ' : 'text-red-600'
                                                    : null
                                                }`
                                            }>
                                                {answer}
                                            </div>
                                        </div>   
                                ))}
                            </div>
                        </div>

                    </div> 
                </div>

                <div className={`sm:w-full lg:w-1/3 lg:justify-center mx-auto`}>
                    <img src={images} alt="Imgage" className={`w-[80%] h-[80%] object-fill object-center`} />
                </div>
            </div>

            <div className={``}>
                <button onClick={() => setShow(prev => !prev)}>Show Score</button>
            </div>

           

            <ShowResultOfQuiz totalQuestions={totalQuestions} result={result} show={show} setShow={setShow} />
                    


        </React.Fragment>
    )
}

export default QuestionCardModified