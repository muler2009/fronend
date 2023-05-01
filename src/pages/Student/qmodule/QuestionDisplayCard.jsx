import React, { useEffect, useState } from "react";
import { useGetQuestionsQuery } from "../../../api/apiSlice";
import Pagination from "../../../components/common/Pagination";
import Questions from "./Questions";

const QuestionDisplayCard = () => {
  const {
    data: questionData,
    isLoading: questionIsLoading,
    error: questionIsError,
  } = useGetQuestionsQuery();

  const [page, setPage] = useState(0);

  const [pageNumber, setPageNumber] = useState(0); // setting the page number
  const [itemPerpage, setItemPerpage] = useState(1); // to set tne number if Items per page

  const [lastIndex, setLastIndex] = useState(0); // get the last question index
  const [currentItem, setCurrentItem] = useState(null);

  const [totalQuestions, setTotalQuestions] = useState(0); // calculating the total number of Questions

  const [totalPage, setTotalPage] = useState(0); // total number of pages
  const [showAnswer, setShowAnswer] = useState(false);

  //const totalPage = 100;

  const [answerSelected, setAnswerSelected] = useState(""); // state for handling the selected choice

  useEffect(() => {
    setLastIndex(pageNumber + itemPerpage); // get the last question index
    setCurrentItem(questionData?.questionstb[pageNumber]);
    setTotalQuestions(questionData?.questionstb?.length); // calculating the total number of Questions

    setTotalPage(Math.ceil(questionData?.questionstb?.length / itemPerpage));
  }, [questionData, pageNumber]);

  // for result calculation
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: [],
    wrongAnswers: [],
  });

  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  //state for showing the result of the exam
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  return (
    <section className={`w-full flex flex-col`}>
      {/* Fragment for displaying question  */}
      {questionIsLoading && <p>Loading data ...</p>}
      {!questionIsLoading && currentItem && (
        <Questions
          questions={currentItem}
          lastIndex={lastIndex}
          totalQuestions={totalQuestions}
          result={result}
          setResult={setResult}
          answerSelected={answerSelected}
          setAnswerSelected={setAnswerSelected}
          selectedAnswerIndex={selectedAnswerIndex}
          setSelectedAnswerIndex={setSelectedAnswerIndex}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          answeredQuestions={answeredQuestions}
          setAnsweredQuestions={setAnsweredQuestions}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />
      )}

      {/* Pagination  */}
      <div
        className={`bg-[#fff] flex items-center justify-center font-Poppins py-5`}
      >
        <Pagination
          data={questionData?.questionstb}
          itemPerpage={itemPerpage}
          totalPage={totalPage}
          pageNumber={pageNumber}
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
          answeredQuestions={answeredQuestions}
          setShowAnswer={setShowAnswer}
        />
      </div>
    </section>
  );
};

export default QuestionDisplayCard;
