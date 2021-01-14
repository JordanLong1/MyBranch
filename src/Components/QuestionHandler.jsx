import React from 'react'; 

function QuestionHandler({questionTitle, questionImg, children}) {

    let createListOfOptions;

    if (children().length > 0) {
        createListOfOptions = children().map((option, index) => {
            return <li key={index} id={option.props.id} typeofanswer={option.props.typeofanswer} onClick={option.props.onHandleClick}>{option.props.children}</li>
        })
    }

    return (
        <div className='question-section'>
            <h4>{questionTitle}</h4>
            <div className='image-section'><img src={questionImg} alt='' ></img></div>
            <ul>
            {createListOfOptions}
            </ul>
        </div>
    )
}

export default QuestionHandler