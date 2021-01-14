import React, {useState} from 'react';
import {questionsAndOptions} from '../QuestionBank/index';
import { EndOfBranchDisplay } from './EndOfBranchDisplay';
import QuestionPresentation from './QuestionPresentation'

export default function QuestionLogic() {

    const [currentQuestion, setCurrentQuestion] = useState(questionsAndOptions[0]);
    const [endOfBranch, setEndOfBranch] = useState(false);
    const [results, setResults] = useState([]);
    
    const handleClick = (event) => {
        handleClickHelper(event); // this function was getting bulky, needed some abstraction
        let pointsToValue = event.target.id; // this value dictates the next question. 
        pointsToValue = parseInt(event.target.id, 10);
        let nextQuestion = questionsAndOptions.find(question => question.questionId === pointsToValue);
        pointsToValue !== 0 ?  setCurrentQuestion(nextQuestion) : setEndOfBranch(true);
    };

    const handleClickHelper = (event) => {
        const answerType = event.target.attributes[1].nodeValue; 
        let resultArray = [...results];
        resultArray.push(answerType);
        setResults(resultArray);
    };

    const getOptionsIntoList = () => {
       return currentQuestion.options.map((option, index) => {
           return <li key={index} id={option.pointsTo} typeofanswer={option.typeOfAnswer} onHandleClick={handleClick}>{option.optionTitle}</li>
        });
    };

    
    return (
        <div className='question-container'>
          <QuestionPresentation questionTitle={currentQuestion.questionTitle} questionImg={currentQuestion.questionImage} children={getOptionsIntoList} endOfBranch={endOfBranch}/>
             {endOfBranch === true ? <EndOfBranchDisplay results={results} /> : null}
        </div>
    );
};