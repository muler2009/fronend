import React, { useRef, useState } from 'react'
import * as Gr from 'react-icons/gr'
import Papa from 'papaparse'
import { useImportQuestionMutation } from '../../../features/questionBank/questionbankSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const UploadingCSVQuestion = () => {


    const allowdFileExtension = [`csv`]
    // This state will store the parsed data
    // It will store the file uploaded by the user
    const [file, setFile] = useState("");

    const [dataValues, setDataValues] = useState([])
    const [csvQuestion, setCsvQuestion] = useState([])
    const [csvQuestionHeader, setCsvQuestionHeader] = useState([ ])

    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");

    
    const handleFileChange = (e) => {
        setError('');
    
        // Check if user has entered the file
        if (e.target.files.length) {
          const inputFile = e.target.files[0];
    
          // Check the file extensions, if it not
          // included in the allowed extensions
          // we show the error
          const fileExtension = inputFile?.type.split('/')[1];
          if (!allowedExtensions.includes(fileExtension)) {
            setError('Please input a csv file');
            return;
          }
    
          // If input type is correct set the state
          setFile(inputFile);
        }
      };
    const handleParse = (event) => {      

        const reader = new FileReader();

        // reader.onload = async({target}) => {
        //     const csv = Papa.parse(
        //         target.result, {
        //             header: true,
        //             skipEmptyLines: true,
        //             complete: function(result) {
        //                 const columnsArray = [];
        //                 const dataArray = [];

        //                 result.data.map((d)=> {
        //                 columnsArray.push(Object.keys(d));
        //                 dataArray.push(Object.values(d));
                   

        //          });

        //            console.log(result.data)
        //            setDataValues(result.data)
        //            setCsvQuestionHeader(columnsArray[0])
        //            setCsvQuestion(dataArray)
                        
        //             }
        //         }
        //         )
        //         reader.readAsText(file);
        // }

        const res = Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function(result){
                const columnsArray = [];
                const dataArray = [];

                result.data.map((d)=> {
                    columnsArray.push(Object.keys(d));
                    dataArray.push(Object.values(d));
                   

                });

                console.log(result.data)
                setDataValues(result.data)
                setCsvQuestionHeader(columnsArray[0])
                setCsvQuestion(dataArray)
            }
        }
        )
        return res
    }

    const onUploadClicked = async(res) => {
        try {
            const response = await axios.post(`http://localhost:5000/questionsfromcsv`, res,
            {
                "Content-Type": "application/json",
            })
            
        }catch(error){
            console.log(error.message)
        }
  }

   
    return (
        <React.Fragment>
            <div className={`w-full p-5`}>
                <div className={`flex flex-col justify-center items-center`}>
                    <h1>Testing CSV </h1>

                    <div className={`w-2/3 flex flex-col space-y-3  my-5 mx-auto`}>
                        <label htmlFor='importCSV' className={`font-Poppins`}>Browse a file</label>
                        <input 
                            type={`file`} 
                            id='importCSV'
                            name='importCSV'
                            accept={`.csv`}
                            onChange={handleParse}
                            className={`font-Poppins input-md text-sm p-0 file:py-2 file:border-0 bg-[#fafafa] `}
                        />
                    </div>

                        {/* Upload action button */}
                    <div className={`flex w-4/5 justify-end mx-auto py-5 rounded-none p-1`}>
                        <button className={`btn-sm px-5 font-Poppins text-sm rounded-none flex space-x-1 justify-center items-center`}
                        onClick={onUploadClicked}
                        >
                            <Gr.GrFormUpload size={20} />
                            <h1>Upload</h1>
                        </button>
                    </div>

                    

                    <div className={``}>
                        <table className={`table table-striped`}>
                            <thead>
                                <tr>
                                    {
                                        csvQuestionHeader.map((col, index) => {
                                            return(
                                                <th key={index}>
                                                    {col}
                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    csvQuestion.map((v, index) => (
                                        <tr key={index}>
                                            {
                                                v.map((value, index) => (
                                                    <td key={index}>
                                                        {value}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className={``}>
                        
                            {
                                dataValues.map((data, index) => {
                                    return(
                                        <li key={index}>
                                            {JSON.stringify(data)}
                                        </li>
                                    )
                                })
                            }
                        
                    </div>
             
                </div>
            </div>
        </React.Fragment>
    )
}




// Allowed extensions for input file
const allowedExtensions = ['csv' || 'txt'];

const App = () => {

  const [importQuestion] = useImportQuestionMutation()
  const dispatch = useDispatch()
  

  // This state will store the parsed data
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState('');

  // It will store the file uploaded by the user
  const [file, setFile] = useState('');

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError('');

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split('/')[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError('Please input a csv file');
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError('Enter a valid file');

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true, skipEmptyLines: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      setData(parsedData);
    };
   reader.readAsText(JSON.stringify(file))
  };

  console.log(file)


  const onUploadClicked = async(file) => {
        try {
            const response = await axios.post(`http://localhost:5000/questionsfromcsv`, file,
            {
                "Content-Type": "application/json",
            })
            return (setData(response.data))
            
        }catch(error){
            console.log(error.message)
        }
  }






  return (
    <div>
      <div className={`w-2/3 flex flex-col space-y-3  my-5 mx-auto`}>
                        <label htmlFor='importCSV' className={`font-Poppins`}>Browse a file</label>
                        <input 
                            type={`file`} 
                            id='importCSV'
                            name='importCSV'
                            accept={`.csv`}
                            onChange={handleFileChange}
                            className={`font-Poppins input-md text-sm p-0 file:py-2 file:border-0 bg-[#fafafa] `}
                        />
                    </div>

                        {/* Upload action button */}
                    <div className={`flex w-4/5 justify-end mx-auto py-5 rounded-none p-1`}>
                        <button className={`btn-sm px-5 font-Poppins text-sm rounded-none flex space-x-1 justify-center items-center`}
                        onClick={handleParse}
                        >
                            <Gr.GrFormUpload size={20} />
                            <h1>Upload</h1>
                        </button>
                    </div>
        <div style={{ marginTop: '3rem' }}>
            {error ? error : data.map((col, idx) => <div key={idx}>{JSON.stringify(col)}</div>)}
        </div>
    </div>
  );
};

  
//export default App;
export default UploadingCSVQuestion