import React, {useState} from 'react'
import {questionsAndOptions} from '../QuestionBank/index'
import {EndOfBranchDisplay} from './EndOfBranchDisplay'

import {Menu} from 'react-feather'

export default function DisplayQuestion() {

    const [currentQuestion, setCurrentQuestion] = useState(questionsAndOptions[0]);
    const [endOfBranch, setEndOfBranch] = useState(false);
    const [results, setResults] = useState([]);
    
    const handleClick = (e) => {

        handleClickHelper(e) // this function was getting bulky, needed some abstraction

        let pointsToValue = e.target.id; 

        pointsToValue = parseInt(e.target.id, 10)

        if ( pointsToValue !== 0) {
            const nextQuestion = questionsAndOptions.find(question => question.questionId === pointsToValue)
            setCurrentQuestion(nextQuestion);  
        } else {
            setEndOfBranch(true)
        }
    }

    const handleClickHelper = (e) => {
        const answerType = e.target.attributes[1].nodeValue; 

        let resultArray = [...results]

        resultArray.push(answerType)

        setResults(resultArray)
    }

    return (
        <div className='question-container'>
        <div className='question-section'>
            <h4 className='question-header'>{currentQuestion.questionTitle}</h4>
            <ul>
                {currentQuestion.options.map((option, index) =>

                 <li key={index} id={option.pointsTo} typeofanswer={option.typeOfAnswer} onClick={handleClick}>
                 <Menu className='menu-icon' />
                 {option.optionTitle} </li>)}
            </ul>
        </div>
        {endOfBranch === true ? <EndOfBranchDisplay results={results} /> : <div></div>}
        </div>
    )
}