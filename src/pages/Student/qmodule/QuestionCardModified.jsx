import React, { useState } from "react";
import ShowResultOfQuiz from "./ShowResultOfQuiz";
import images from "../../../assets/images/images.png";

const QuestionCardModified = (props) => {
  const {
    question,
    result,
    setResult,
    answerSelected,
    setAnswerSelected,
    totalQuestions,
    selectedAnswerIndex,
    setSelectedAnswerIndex,
    pageNumber,
    setPageNumber,
    answeredQuestions,
    setAnsweredQuestions,
    showAnswer,
    setShowAnswer,
  } = props;

  const [show, setShow] = useState(false);

  const onAnswerSelected = (question, answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === question.correct_answer) {
      setAnswerSelected(true);
      setAnsweredQuestions((prev) => [
        ...prev?.filter((item) => item?.pageNumber !== pageNumber),
        { pageNumber: pageNumber, isCorrect: true },
      ]);
    } else {
      setAnswerSelected(false);
      setAnsweredQuestions((prev) => [
        ...prev?.filter((item) => item?.pageNumber !== pageNumber),
        { pageNumber: pageNumber, isCorrect: false },
      ]);
    }
  };

  const ChoiceLetter = ["A", "B", "C", "D"];
  let letter = ChoiceLetter.map((letter) => letter);

  return (
    <React.Fragment>
      <div className={`my-2 mx-1 bg-white sm:block lg:flex `}>
        <div className={`sm:w-full lg:w-2/3 flex`}>
          <div className={`w-1/7 p-5 my-5`}>
            <div
              className={`w-10 h-10 bg-green-400 rounded-full text-white font-bold flex justify-center items-center`}
            >
              <h1 className={`text-xl`}>{question.id}</h1>
            </div>
          </div>

          <div
            className={`px-4 py-10 flex flex-col font-Poppins text-sm gap-3`}
          >
            <div className={`py-4`}>{question.question}</div>

            <div className={`my-2 cursor-pointer`}>
              <div className={`flex flex-col gap-2`}>
                {question?.choices.map((answer, index) => (
                  <div
                    onClick={(e) => onAnswerSelected(question, answer, index)}
                    key={answer}
                    className={`w-full flex space-x-3`}
                  >
                    <div
                      className={`rounded-full w-10 h-10 flex justify-center items-center
                       ${
                         answer === question.correct_answer && showAnswer
                           ? "bg-green-500 text-white"
                           : null
                       }
                       ${
                         selectedAnswerIndex === index
                           ? "font-bold text-base text-gray-700"
                           : null
                       }`}
                    >
                      {letter[index]}
                    </div>

                    <div
                      className={`bg-white py-2 w-4/5 
                      ${
                        selectedAnswerIndex === index
                          ? "font-bold text-base text-gray-700"
                          : null
                      }`}
                    >
                      {answer}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col mt-10">
                  <div>
                    <button
                      onClick={() => setShowAnswer((prev) => !prev)}
                      className="px-4 bg-green-400 text-white"
                    >
                      Show Answer
                    </button>
                  </div>
                  {showAnswer && (
                    <div className="pt-4">{question.explanation}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {question?.images && (
          <div className={`sm:w-full lg:w-1/3 lg:justify-center mx-auto`}>
            <img
              src={question?.images}
              alt="Imgage"
              className={`w-[80%] h-[80%] object-fill object-center`}
            />
          </div>
        )}
      </div>

      <div className={``}>
        <button onClick={() => setShow((prev) => !prev)}>Show Score</button>
      </div>

      <ShowResultOfQuiz
        totalQuestions={totalQuestions}
        result={result}
        answeredQuestions={answeredQuestions}
        show={show}
        setShow={setShow}
      />
    </React.Fragment>
  );
};

export default QuestionCardModified;
