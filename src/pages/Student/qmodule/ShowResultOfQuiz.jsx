import React from 'react'
import * as Vsc from 'react-icons/vsc'

const ShowResultOfQuiz = (props) => {
    const { totalQuestions, result, show, setShow } = props
    if(!show) return null
  return (
    <React.Fragment>
         <section className='bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center sm:px-10' >
          <div className={`w-1/3 flex-flex-col bg-white relative h-2/3 top-10 rounded-t-lg mx-auto sm:w-full sm:h-3/4`}>
              <div className={`flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-[#ddd] w-full px-5 py-3`}>
                  <h1 className={`font-Oswald tracking-wide text-xl py-5`}>Result Scored</h1>
                  <Vsc.VscClose className={`hover:bg-red-400 cursor-pointer`} onClick={() => setShow(prev => !prev)} />
              </div>

              <div className={`flex px-10  py-5 font-Poppins border-b-2`}>
                 
                  <div className={`w-1/3 flex flex-col gap-5`}>
                    <div className={``}>
                      <h1>Total Question</h1>

                    </div>
                      <h1>Total Score</h1>
                      <h1>Correct Answers:</h1>
                      <h1>Wrong Answers</h1>
                      
                  </div>
                  <div className={`w-2/3 flex flex-col gap-5`}>
                    <h2>{totalQuestions}</h2>
                    <h2>{result.score}</h2>
                    <h2>{result.correctAnswers}</h2>
                    <h2>{result.wrongAnswers}</h2>
                  </div>
              </div> 

              <div className={`py-16`}>
                asdasd
              </div> 

              <div className={`flex justify-end border-t-2 py-2`}>
                <button className={`btn-sm bg-red-600 w-1/4  mr-10 text-white`} onClick={() => setShow(prevState => !prevState)}>Close</button>
              </div> 
              
           
         
           
          </div>
         </section>
    </React.Fragment>
  )
}

export default ShowResultOfQuiz