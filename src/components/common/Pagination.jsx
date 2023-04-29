import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaBackward, FaForward } from "react-icons/fa";
import Questions from "../../pages/Student/qmodule/Questions";
import ShowResultOfQuiz from "../../pages/Student/qmodule/ShowResultOfQuiz";

const Pagination = (props) => {
  const [show, setShow] = useState(false);

  //extracting the attributed from the props
  const {
    itemPerpage,
    totalQuestions,
    showResult,
    setShowResult,
    totalPage,
    lastIndex,
    pageNumber,
    setPageNumber,
    data,
    result,
    setResult,
    answerSelected,
    setAnswerSelected,
    selectedAnswerIndex,
    setSelectedAnswerIndex,
    answeredQuestions,
  } = props;

  // selecting the corresponding Clicked page
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerpage) % data.length; // calculating the current page
    setPageNumber(newOffset); // setting the pagenumber to new offset
    setSelectedAnswerIndex(null); // to unselect the uanswer fot the next question
    setResult(
      (
        prev // result calculatins
      ) =>
        answerSelected
          ? {
              ...prev,
              score: prev.score + 1,
              correctAnswers: prev.correctAnswers + 1,
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
            }
    );
    if (lastIndex === data.length) {
      setShowResult(true);
    }
  };

  const answered = answeredQuestions?.find(
    (item) => item?.pageNumber == pageNumber
  );

  // console.log(answered);

  return (
    <React.Fragment>
      <ReactPaginate
        breakLabel="..."
        previousLabel={"Previous"}
        nextLabel={lastIndex === data?.length ? "Finish" : "Next"}
        pageCount={totalPage}
        onPageChange={handlePageClick}
        containerClassName={`pagination`}
        previousClassName={`prevButton`}
        // activeClassName={"activePaginationButton"}
        activeClassName={
          answered
            ? answered.isCorrect
              ? "correctPaginationButton"
              : "wrongPaginationButton"
            : "activePaginationButton"
        }
        // disabledClassName={"disabledPagination"}
        disabledLinkClassName={"Finito"}
        renderOnZeroPageCount={null}
        onClick={() =>
          lastIndex === data.length ? setShow((prev) => !prev) : null
        }
      />

      <ShowResultOfQuiz
        totalQuestions={totalQuestions}
        result={result}
        show={show}
        setShow={setShow}
      />
    </React.Fragment>
  );
};

export default Pagination;
