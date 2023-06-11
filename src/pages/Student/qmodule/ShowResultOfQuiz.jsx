import React from "react";
import * as Vsc from "react-icons/vsc";

const ShowResultOfQuiz = (props) => {
  const { totalQuestions, result, show, setShow, answeredQuestions } = props;
  if (!show) return null;
  return (
    <React.Fragment>
      <section className="bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center xxxs:px-2 ss:px-10 sm:px-16">
        <div
          className={`flex-flex-col bg-[#f7f7f7] relative top-10 xxxs:w-full xxxs:h-[65%] xxxs:top-24 xxxs:overflow-y-scroll mx-auto sm:w-2/3 md:w-1/2 md:h-[65%]`}
        >
          <div
            className={`flex justify-between items-center border-b-[2px] w-full py-5 px-8 border-[#00bdff]`}
          >
            <h1
              className={`font-Oswald tracking-wide uppercase xxxs:text-[20px]`}
            >
              Result Scored
            </h1>
            <Vsc.VscClose
              className={`hover:bg-white cursor-pointer text-[20px]`}
              onClick={() => setShow((prev) => !prev)}
            />
          </div>

          <div
            className={`flex flex-col px-10 font-Poppins mt-5 xxxs:px-5 md:px-10`}
          >
            <div className={`w-full flex px-5 mt-5 py-5 bg-[#ffffff] `}>
              <h1 className="xxxs:text-[14px]">
                You Scored :
                <span className={`mx-3`}>
                  {answeredQuestions?.filter((item) => item?.isCorrect == true)
                    ?.length || 0}
                </span>
              </h1>
            </div>

            <div
              className={`w-full flex flex-col px-5 py-10 mt-4 bg-[#ffffff] rounded-2xl`}
            >
              <div className={``}>
                <h1 className={`font-Poppins xxxs:text-[14px]`}>
                  Total Question:
                  <span className={`mx-3`}>{totalQuestions}</span>
                </h1>
                <div
                  className={`border-[1px] border-[#ddd] rounded-xl h-2 bg-[#f2f2f2]`}
                ></div>
              </div>

              <div className={`my-4`}>
                <h1 className={`font-Poppins xxxs:text-[14px]`}>
                  Correct Answer:
                  <span className={`mx-3`}>
                    {answeredQuestions?.filter(
                      (item) => item?.isCorrect == true
                    )?.length || 0}
                    &nbsp; &nbsp;
                    {/* {"(" +
                      (
                        (answeredQuestions?.filter(
                          (item) => item?.isCorrect == true
                        )?.length || 0 / totalQuestions) * 100
                      ).toFixed(2) +
                      "%)"} */}
                  </span>
                </h1>
              </div>

              <div className={`my-4`}>
                <h1 className={`font-Poppins xxxs:text-[14px]`}>
                  Wrong Answer:
                  <span className={`mx-3`}>
                    {answeredQuestions?.filter(
                      (item) => item?.isCorrect != true
                    )?.length || 0}
                    &nbsp; &nbsp;
                    {/* {"(" +
                      (
                        (answeredQuestions?.filter(
                          (item) => item?.isCorrect != true
                        )?.length || 0 / totalQuestions) * 100
                      ).toFixed(2) +
                      "%)"} */}
                  </span>
                </h1>
              </div>
              <div className={`my-4`}>
                <h1 className={`font-Poppins xxxs:text-[14px]`}>
                  Unattempted:
                  <span className={`mx-3`}>
                    {parseInt(totalQuestions - answeredQuestions?.length || 0)}
                    &nbsp; &nbsp;
                    {/* {"(" +
                      (
                        (parseInt(
                          totalQuestions - answeredQuestions?.length || 0
                        ) /
                          totalQuestions) *
                        100
                      ).toFixed(2) +
                      "%)"} */}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className={`flex justify-end`}>
            <button
              className={`btn-sm bg-red-600 w-1/4 mt-5 mr-10 text-white`}
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
