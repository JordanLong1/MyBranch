import React, {useState} from 'react'
import {questionsAndOptions} from '../QuestionBank/index'

export default function DisplayQuestion() {

    const [currentQuestion, setCurrentQuestion] = useState(questionsAndOptions[0]);


    const handleClick = (e) => {
        let pointsToValue = e.target.id; 

        pointsToValue = parseInt(e.target.id, 10)

        
        const nextQuestion = questionsAndOptions.find(question => question.questionId === pointsToValue)
        setCurrentQuestion(nextQuestion)

    }

    return (
        <div className='question-container'>

        <div className='question-section'>
            <h4 className='question-header'>{currentQuestion.questionTitle}</h4>
            <ul>
                {currentQuestion.options.map((option, index) => <li key={index} id={option.pointsTo} onClick={handleClick}>{option.optionTitle}</li>)}
            </ul>
        </div>
        
        </div>
    )
}