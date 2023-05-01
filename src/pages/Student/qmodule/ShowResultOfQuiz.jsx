import React from "react";
import * as Vsc from "react-icons/vsc";

const ShowResultOfQuiz = (props) => {
  const { totalQuestions, result, show, setShow, answeredQuestions } = props;
  if (!show) return null;
  return (
    <React.Fragment>
      <section className="bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center sm:px-10">
        <div
          className={`flex-flex-col bg-[#f7f7f7] relative top-10 rounded-t-2xl mx-auto sm:w-full sm:h-3/4 lg:w-1/3 lg:h-[6clee5%]`}
        >
          <div
            className={`flex justify-between items-center rounded-xl rounded-tr-lg bg-green-400 w-full h-[150px] px-5`}
          >
            <h1 className={`font-Roboto tracking-wide text-xl`}>
              Result Scored
            </h1>
            <Vsc.VscClose
              className={`hover:bg-white cursor-pointer`}
              onClick={() => setShow((prev) => !prev)}
            />
          </div>

          <div className={`flex flex-col px-10 font-Poppins`}>
            <div
              className={`w-full flex px-5 py-10 -my-16 bg-[#ffffff] rounded-2xl`}
            >
              <h1>
                You Scored:
                <span className={`mx-3`}>
                  {
                    answeredQuestions?.filter((item) => item?.isCorrect == true)
                      ?.length
                  }
                </span>
              </h1>
            </div>

            <div
              className={`w-full flex flex-col px-5 py-10 my-20 bg-[#ffffff] rounded-2xl`}
            >
              <div className={``}>
                <h1 className={`font-Roboto`}>
                  Total Question:
                  <span className={`mx-3`}>{totalQuestions}</span>
                </h1>
                <div
                  className={`border-[1px] border-[#ddd] rounded-xl h-2 bg-[#f2f2f2]`}
                ></div>
              </div>

              <div className={`my-4`}>
                <h1 className={`font-Roboto`}>
                  Correct Answer:
                  <span className={`mx-3`}>
                    {
                      answeredQuestions?.filter(
                        (item) => item?.isCorrect == true
                      )?.length
                    }
                    &nbsp; &nbsp;
                    {"(" +
                      (
                        (answeredQuestions?.filter(
                          (item) => item?.isCorrect == true
                        )?.length /
                          totalQuestions) *
                        100
                      ).toFixed(2) +
                      "%)"}
                  </span>
                </h1>
              </div>

              <div className={`my-4`}>
                <h1 className={`font-Roboto`}>
                  Wrong Answer:
                  <span className={`mx-3`}>
                    {
                      answeredQuestions?.filter(
                        (item) => item?.isCorrect != true
                      )?.length
                    }
                    &nbsp; &nbsp;
                    {"(" +
                      (answeredQuestions?.filter(
                        (item) => item?.isCorrect != true
                      )?.length /
                        totalQuestions) *
                        100 +
                      "%)"}
                  </span>
                </h1>
              </div>
              <div className={`my-4`}>
                <h1 className={`font-Roboto`}>
                  Unattempted:
                  <span className={`mx-3`}>
                    {parseInt(totalQuestions - answeredQuestions?.length)}
                    &nbsp; &nbsp;
                    {"(" +
                      (
                        (parseInt(totalQuestions - answeredQuestions?.length) /
                          totalQuestions) *
                        100
                      ).toFixed(2) +
                      "%)"}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className={`flex justify-end border-t-2 `}>
            <button
              className={`btn-sm bg-red-600 w-1/4  mr-10 text-white`}
              onClick={() => setShow((prevState) => !prevState)}
            >
              Close
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ShowResultOfQuiz;
