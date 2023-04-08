import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { FaBackward, FaForward } from 'react-icons/fa'
import Questions from '../../pages/Student/qmodule/Questions'


const Pagination = (props) => {

 //extracting the attributed from the props   
  const { itemPerpage, showResult, setShowResult, totalPage, lastIndex, setPageNumber, data, result, setResult,  answerSelected, setAnswerSelected, selectedAnswerIndex, setSelectedAnswerIndex} = props

  // selecting the corresponding Clicked page
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerpage) % data.length; // calculating the current page 
    setPageNumber(newOffset); // setting the pagenumber to new offset
    setSelectedAnswerIndex(null); // to unselect the uanswer fot the next question
    setResult((prev) =>   // result calculatins
      answerSelected 
      ? {
          ...prev,
          score: prev.score + 1,
          correctAnswers: prev.correctAnswers + 1,
        } : { 
          ...prev, 
          wrongAnswers: prev.wrongAnswers + 1 
        }     
    )
    if(lastIndex === data.length) {
      
      setShowResult(true)   
    }
  };

  return (
    <React.Fragment>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={lastIndex === data.length ? "Finish" : "Next"}
        pageCount={totalPage}
        onPageChange={handlePageClick}  
        containerClassName={`pagination`}    
        previousClassName={` prevButton`}
        activeClassName={"activePaginationButton"}
        disabledClassName={"disabledPagination"}
        disabledLinkClassName={"Finito"}
        renderOnZeroPageCount={null} 
        onClick={(clickEvent) => {
          console.log('onClick', clickEvent);
          // Return false to prevent standard page change,
          // return false; // --> Will do nothing.
          // return a number to choose the next page,
          // return 4; --> Will go to page 5 (index 4)
          // return nothing (undefined) to let standard behavior take place.
        }}
        
        
        />
          
    </React.Fragment>
  )
}

export default Pagination

