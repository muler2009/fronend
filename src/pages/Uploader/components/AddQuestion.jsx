import React, {useState} from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {VscClose} from 'react-icons/vsc'
import { format } from 'date-fns'
import { FaSearch } from 'react-icons/fa';
import { useAddQuestion } from './useAddQuestion';
import { useGetModuleQuery } from '../../../features/module/moduleApiSlice';
import { useAddQuestionMutation } from '../../../features/questionBank/questionbankSlice';


const AddQuestion = (props) => {

  const { show, setShow, uimport, setImport } = props

  if(!show) return null
  if(!uimport) return null

  return (
      <React.Fragment>
          <div className='bg-black bg-opacity-20 inset-0 fixed top-0 backdrop-blur-30 flex justify-center' >
            <div className='flex flex-col bg-white rounded-lg relative container w-2/3 top-10 h-[50rem] overflow-scroll'>

                <div className='flex justify-between sticky top-0 items-center border-b-[1px] border-b-[#ddd] py-3 px-4 bg-zinc'>
                  <h5 className='font-Oswald text-2xl tracking-wide text-black'>Adding Question</h5>
                  <div className='bg-zinc-100 rounded-full hover:bg-red-400 cursor-pointer' onClick={() => setShow(prev => !prev)}>
                    <VscClose className='text-xl hover:text-white' />
                  </div> 
                </div>

                <div className={`px-5 py-10`}>
                  <h1 className={`font-Poppins text-lg flex items-center space-x-1 mb-5`}>
                    <AiFillQuestionCircle size={30}/>
                    <span className={`text-black text-[15px]`}>Question</span>
                  </h1>
                  <EditorBox className={'border-[1px]'} />
                </div>  
            </div>
          </div>
      </React.Fragment>
  )
}



export default AddQuestion


export const EditorBox = () => {

  const { data } = useGetModuleQuery()

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const [inputList, setInputList] = useState([])
  const [expList, setExpList] = useState([])
  const [image, setImage] = useState()


  

  const Input = () => {
    return <input className={`input-md bg-zinc-200 font-Poppins overflow-y-scroll`} type="text" placeholder="Choice" />;
  };

  const Textarea = () => {
    return (
      <textarea className="border-[1px] border-[#ddd] focus:border-[1px] focus:border-[#ddd]" rows={4} placeholder=" "  />
    )
  }
  
  const { questionAttributes, onPublishedButtonClicked, setQuestionAttributes, handleQuestionChanges, choiceChangeHandling} = useAddQuestion()

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  const onExplanationClicked = event => {
    setExpList(expList.concat(<Textarea key={expList.length}/>))
  }

  const [addQuestion] = useAddQuestionMutation()
  const [ch, setCh] = useState([])
  const [a,setA] = useState('')
  const [b,setB] = useState('')
  const [c,setC] = useState('')
  const [d,setD] = useState('')

  return(
    <React.Fragment>
      <section className={`container mx-auto`}>
        <form  className="w-full flex flex-col" onSubmit={(event) => event.preventDefault()}>

        <div className={`flex justify-end items-center space-x-5 pb-5`}>
            <button className={`btn-sm px-5 text-sm rounded-none border-[1px] border-[#c9c9c9]`}>Cancel</button>
            
          </div>

          {/* code section for the first row  */}
          <div className={`flex flex-row space-x-10`}>
          
            <div className={`w-2/3 py-4`}>
              <Editor 
                  editorState={editorState} 
                  onEditorStateChange={setEditorState} 
                  editorStyle={{
                    border: '1px solid #ddd',
                    height: '100px',
                    outline: 'scroll',
                    fontFamily: 'Poppins',
                    padding: "5px 5px",
                    fontSize: '14px'
                    
                  }}
                   
                />

                {/* Adding choices and Correct answer with explanation for the question */}
                <div className={`flex flex-col space-y-4`}>

                   <input 
                      type='text'
                      name='question'
                      value={questionAttributes.question}
                      onChange={handleQuestionChanges}
                      className={`input-sm py-3`}
                   />

                    <h1 className={`font-Poppins text-sm py-2`}>Add Choices</h1>
                      <div className={`flex font-Poppins text-sm`}>
                        <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">Choice A</span>
                        <input 
                          type={`text`} 
                          value={a}
                          name="choice_A"
                         // onChange={handleQuestionChanges}
                          onChange={(e) => setA(e.target.value)}
                          className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50` } />
                      </div>

                      {/* Choice B */}
                      <div className={`flex font-Poppins text-sm`}>
                        <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer">Choice B</span>
                        <input type={`text`} 
                          value={questionAttributes.choices}
                          //value={b}
                          name="choice_B"
                          //onChange={handleQuestionChanges}
                          onChange={(e) => setB(e.target.value)}
                          className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`} />
                      </div>
                      
                        {/* Choice C */}
                        <div className={`flex font-Poppins text-sm`}>
                        <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer"> Choice C</span>
                        <input 
                          type={`text`} 
                          //value={questionAttributes.choice_C}
                          value={c}
                          name="choice_C"
                          //onChange={handleQuestionChanges}
                          onChange={(e) => setC(e.target.value)}
                          className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`} />
                      </div>

                      <div className={`flex font-Poppins text-sm`}>
                        <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer"> Choice D</span>
                        <input 
                          type={`text`} 
                          //value={questionAttributes.choice_D}
                          value={d}
                          name="choice_D"
                          //onChange={handleQuestionChanges}
                          onChange={(e) => setD(e.target.value)}
                          className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`} />
                      </div>

                      <div className={`flex font-Poppins text-sm`}>
                        <span className="px-4 inline-flex items-center min-w-fit border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 cursor-pointer"> Choice E</span>
                        <input type={`text`} className={`input-md font-Poppins overflow-y-scroll border border-l-0 rounded-l-none focus:border-[#ddd] focus:bg-zinc-100 bg-gray-50`} />
                      </div>              
                </div>

            </div>

            {/* question editor section of the fragment */}
            
            <div className={`w-1/3  flex flex-col space-y-5`}>
              <div className={`flex items-center space-x-5 mt-8 `}>
                <label className={`font-Poppins text-red-500`}>Publish to QB *</label>
                <select className={`select-sm w-1/2 font-Poppins`}>
                  <option>--Select Module--</option>
                    {
                      data?.map((module, index) => {
                        return(
                          <option key={index}>{module.moduleName}</option>
                        )
                      })
                    }
                </select>
              </div>

              <div className={`flex items-center space-x-5 mt-8 `}>
                <label className={`font-Poppins text-red-500`}>Difficulty level *</label>
                <select className={`select-sm w-1/2 font-Poppins required`}>
                  <option>--Select level--</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* fragment for Uploading an image */}

              <div className={`py-5`}>
                    <label className={`inline-block font-Poppins mb-[0.5rem]`}>Upload an Image</label>                   
                    <input 
                      type={`file`}
                      className={`font-Poppins input-md text-sm p-0 file:py-2 file:border-0`}
                      onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} 
                    />
                    <small className={`font-Quicksand text-sm text-[#6c757d]`}>upload an image if the question has image reference</small>
                    <img src={image} className={`w-full py-3 object-cover object-center`} />
              </div>
            </div>

          </div>

          {/* code section for the second row  */}
          <div className={`w-full border-t-[1px] flex space-x-5 my-5`}>

                  <div className={` w-1/6 my-2`}>
                    <label htmlFor="answer" className={`font-Poppins text-sm mb-2 text-green-600`}>Select Correct Answer:</label>
                    <select id="answer" className={`select-sm font-Poppins my-2`}>
                      <option>--Select correct--</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                    </select>
                  </div>

                  <div className={`w-4/6 my-2`}>
                    <label htmlFor="answer" className={`font-Poppins text-[14px] text-green-600`}>Explanation</label>
                    <textarea className="border-[1px] my-2 border-[#ddd] focus:border-[1px] focus:border-[#ddd] font-Poppins p-2 text-[14px]" rows={4} placeholder=" "  />
                  </div>

          </div>
          
          {/* code section for the third row  */}
         

          <button className={`btn-sm px-5 text-sm rounded-none border-[1px] bg-[#] border-[#c9c9c9] bg-green-700 text-white`} 
            onClick={
              () => onPublishedButtonClicked
            }
            >Publish</button>


        </form>
   
                  
               {/* Answer and Explanation */}
               
        
            
      </section>   
    </React.Fragment>
  ) 
}