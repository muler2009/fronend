import React, { useCallback, useState} from "react";
import { useAddQuestionMutation } from "../../../features/questionBank/questionbankSlice";
import { useDispatch } from "react-redux";

export const useAddQuestion = () => {

    const [addQuestion, { isLoading }] = useAddQuestionMutation()
    const dispatch = useDispatch

    const [choices, setChoices] = useState([])
    const [questionState, setQuestionState] = useState({

    })

    const [questionAttributes, setQuestionAttributes] = useState({
        question : "",    
        correct_answer:"",
        choices: []
        
    })

    const [ch, setCh] = useState([])

    const handleQuestionChanges = (event)  => {
        setQuestionAttributes({
            ...questionAttributes,
            [event.target.name] : event.target.value,
            choices: [
                ...questionAttributes,
                { [event.target.name] : event.target.value}
            ] 
        })
    }


   
   
       
    const onPublishedButtonClicked = (event) => {
        
        try {          
          
                addQuestion(questionAttributes)
                choices.push(event.target.value)
            
            setQuestionAttributes("")
        }catch(error){
            console.log(error.message)
        }
    }


    return { 
        questionAttributes, 
        setQuestionAttributes, 
        handleQuestionChanges,
        onPublishedButtonClicked
    }


}