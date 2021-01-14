import React, {useState} from 'react';
import {questionsAndOptions} from '../QuestionBank/index';
import {EndOfBranchDisplay} from './EndOfBranchDisplay';

import {Menu} from 'react-feather';

export default function DisplayQuestion() {

    const [currentQuestion, setCurrentQuestion] = useState(questionsAndOptions[0]);
    const [endOfBranch, setEndOfBranch] = useState(false);
    const [results, setResults] = useState([]);
    const [learningStyle, setLearningStyle]= useState('');

    const handleClick = (e) => {

        handleClickHelper(e); // this function was getting bulky, needed some abstraction

        let pointsToValue = e.target.id; // this value dictates the next question. 

        pointsToValue = parseInt(e.target.id, 10);

        if ( pointsToValue !== 0) {
            const nextQuestion = questionsAndOptions.find(question => question.questionId === pointsToValue);
            setCurrentQuestion(nextQuestion);  
        } else {
            setEndOfBranch(true);
            dictateLearningStyle(results)
        };
    };

    const handleClickHelper = (e) => {
        const answerType = e.target.attributes[1].nodeValue; 

        let resultArray = [...results];

        resultArray.push(answerType);

        setResults(resultArray);
       
    }

    const dictateLearningStyle = (data) => {
        let count = {}
        let compare = 0
        let mostFrequent; 
    
        for (let i = 0; i < data.length; i++) {
            let current = data[i]
    
            if (count[current] === undefined) {
                count[current] = 1
            } else {
                count[current] = count[current] + 1
            }
    
            if (count[current] > compare) {
                compare = count[current]
                mostFrequent = data[i]
            }
        }
       if (mostFrequent === 'A') {
           setLearningStyle('Visual')
       } else if (mostFrequent === 'B') {
           setLearningStyle('Reading / Writing')
       } else if (mostFrequent === 'C') {
           setLearningStyle('Hybrid. Combination of both')
       }
    }

  
    return (
        <div className='question-container'>
        <div className='question-section'>
            <h4 className='question-header'>{currentQuestion.questionTitle}</h4>
            <div className='image-section'><img src={currentQuestion.questionImage} alt='Learning' /></div>
            <ul>
                {currentQuestion.options.map((option, index) =>

                 <li key={index} id={option.pointsTo} typeofanswer={option.typeOfAnswer} onClick={handleClick}>
                 <Menu className='menu-icon' />
                 {option.optionTitle} </li>)}
            </ul>
        </div>
        {endOfBranch === true ? <EndOfBranchDisplay results={learningStyle}  /> : <div></div>} 
        
        </div>
    );
};



// import React, {useState} from 'react';
// import {questionsAndOptions} from '../QuestionBank/index';
// import QuestionHandler from './QuestionHandler'
// import LearningStyle from './LearningStyle'
// import {Menu} from 'react-feather';

// export default function DisplayQuestion() {

//     const [currentQuestion, setCurrentQuestion] = useState(questionsAndOptions[0]);
//     const [endOfBranch, setEndOfBranch] = useState(false);
//     const [results, setResults] = useState([]);
    
//     const handleClick = (event) => {

//         handleClickHelper(event); // this function was getting bulky, needed some abstraction

//         let pointsToValue = event.target.id; // this value dictates the next question. 

//         pointsToValue = parseInt(event.target.id, 10);

//         let nextQuestion = questionsAndOptions.find(question => question.questionId === pointsToValue)
//         pointsToValue !== 0 ?  setCurrentQuestion(nextQuestion) : setEndOfBranch(true);
//     };

//     const handleClickHelper = (event) => {
//         const answerType = event.target.attributes[1].nodeValue; 

//         let resultArray = [...results];

//         resultArray.push(answerType);

//         setResults(resultArray);
       
//     }

//     const getOptionsIntoList = () => {
//        return currentQuestion.options.map((option, index) => {
//            return <li key={index} id={option.pointsTo} typeofanswer={option.typeOfAnswer} onHandleClick={handleClick}>{option.optionTitle}</li>
//         })
//     }

    
//     return (
//         <div className='question-container'>
//         <div className='question-section'>
//         <QuestionHandler questionTitle={currentQuestion.questionTitle} questionImg={currentQuestion.questionImage} children={getOptionsIntoList}/>
//         {/* <ResultsExtractor results={results} /> */}
//         </div>
//         </div>
//     );
// };