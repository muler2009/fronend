import React, { useState } from 'react'
import { FaQuestion, FaQuestionCircle } from 'react-icons/fa'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import images from '../../../assets/images/images.png'
import Pagination from '../../../components/common/Pagination'
import {useGetQuestionQuery} from '../../../features/questionBank/questionbankSlice'
import Questions, {QuestionCard2} from './Questions'
import AnswerExplanation from './AnswerExplanation'

const QuestionDisplayCard = () => {
    const [page, setPage] = useState(0);
    const {
        data = [],
        isLoading,
        isError,
        isSuccess,
        isFetching
    } = useGetQuestionQuery(page)

const [pageNumber, setPageNumber] = useState(0) // setting the page number
const [itemPerpage, setItemPerpage] = useState(1) // to set tne number if Items per page

 
const lastIndex = pageNumber + itemPerpage // get the last question index
const currentItem = data.slice(pageNumber, lastIndex)

const totalQuestions = data.length // calculating the total number of Questions

const totalPage = Math.ceil( data.length / itemPerpage) // total number of pages 
//const totalPage = 100;

const [answerSelected, setAnswerSelected] = useState('')  // state for handling the selected choice 

// for result calculation
const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
})

//state for showing the result of the exam 
const [showResult, setShowResult] = useState(false)
const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)


  return (
    <section className={`w-full flex flex-col`}>

        {/* Fragment for displaying question  */}

        { isLoading && <p>Loading data ...</p>}
        {
            isSuccess && 
            (
                <Questions 
                    data={currentItem} 
                    lastIndex={lastIndex}
                    totalQuestions={totalQuestions}
                    result={result} 
                    setResult={setResult} 
                    answerSelected={answerSelected} 
                    setAnswerSelected={setAnswerSelected}
                    selectedAnswerIndex={selectedAnswerIndex}
                    setSelectedAnswerIndex={setSelectedAnswerIndex}
                />               
            )
                    
        }       

        {/* Pagination  */}
        <div className={`bg-[#fff] flex items-center justify-center font-Poppins py-5`}>
            <Pagination 
                data={data}
                itemPerpage={itemPerpage} 
                totalPage={totalPage}
                setPageNumber={setPageNumber}
                result={result}
                setResult={setResult}
                answerSelected={answerSelected} 
                setAnswerSelected={setAnswerSelected}
                selectedAnswerIndex={selectedAnswerIndex}
                setSelectedAnswerIndex={setSelectedAnswerIndex}
                lastIndex={lastIndex}
                showResult={showResult}
                setShowResult={setShowResult}
                page={page}
                setPage={setPage}
                totalQuestions={totalQuestions}
            />        
        </div>

       

    </section>
  )
}

export default QuestionDisplayCard