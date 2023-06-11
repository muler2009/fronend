import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { toast } from "react-toastify";
import {
  useGetMeQuery,
  usePostSubscribedQuestionsMutation,
} from "../../../api/apiSlice";
import Pagination from "../../../components/common/Pagination";
import { logout } from "../../../features/auth/myAuthSlice";
import { currentModuleCode } from "../../../features/module/moduleSlice";
import Loading from "../../public/components/Loading";
import Questions from "./Questions";

const QuestionDisplayCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const module_code = useSelector(currentModuleCode);

  // const {
  //   data: questionData,
  //   isLoading: questionIsLoading,
  //   error: questionIsError,
  // } = useGetQuestionsQuery();

  const [getQuestions, { isLoading: questionIsLoading }] =
    usePostSubscribedQuestionsMutation();

  const [questionData, setQuestionData] = useState([]);
  const [time, setTime] = useState([]);
  const [isTimerFirstTime, setIsTimerFirstTime] = useState(true);

  const getQuestionsEffect = async (params) => {
    await getQuestions({
      module_id: params?.moduleId,
    })
      .then((res) => {
        if (res.error) {
          toast.error(res.error.data.title || res.error.data.message);
        } else {
          setQuestionData(res?.data?.questionstb);
          setTime(
            new Date().setSeconds(
              new Date().getSeconds() + res?.data?.rem_time_secs
            )
          );
          // start_time: new Date(res?.data?.start_time),
          // end_time: new Date(res?.data?.end_time),
          // time_allowed: res?.data?.time_allowed,
          // rem_time_secs: res?.data?.rem_time_secs,
          // console.log(res?.data?.message);
          toast.error(res?.data?.message);
        }
      })
      .catch((err) => toast.error("Try again"));
  };

  useEffect(() => {
    getQuestionsEffect(params);
  }, [params]);

  const {
    data: meData,
    isLoading: meLoading,
    error: meError,
  } = useGetMeQuery({ pollingInterval: 600 });

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
    if (questionData && questionData?.length > 0) {
      setLastIndex(pageNumber + itemPerpage); // get the last question index
      setCurrentItem(questionData[pageNumber]);
      setTotalQuestions(questionData?.length); // calculating the total number of Questions

      setTotalPage(Math.ceil(questionData?.length / itemPerpage));
    }
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

  function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({
      expiryTimestamp,
      onExpire: () => dispatch(logout()),
      // onExpire: () =>
      //   console.log(
      //     "expired",
      //     time?.rem_time_secs,
      //     new Date().setSeconds(new Date().getSeconds() + time?.rem_time_secs)
      //   ),
    });

    return (
      <div
        className={`bg-white mx-1 flex justify-between items-center px-10 py-5`}
      >
        <h1 className={`font-Poppins`}>{module_code}</h1>
        <h1 className={`font-Oswald`}>
          <span>Remaining Time</span>&nbsp;&nbsp;{" "}
          {hours + ":" + minutes + ":" + seconds}
        </h1>
      </div>
    );
  }

  if (questionIsLoading)
    return (
      <div className="py-15">
        <Loading />
      </div>
    );

  const currentTime = new Date();
  return (
    <section className={`w-full flex flex-col`}>
      {!questionIsLoading && <MyTimer expiryTimestamp={time} />}
      {/* Fragment for displaying question  */}
      {questionIsLoading && (
        <div className="py-15">
          <Loading />
        </div>
      )}
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
          data={questionData}
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
