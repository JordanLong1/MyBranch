import React from 'react'; 

function QuestionHandler(props) {

    let makeListOfOptions;

    if (props.children().length > 0) {
        makeListOfOptions = props.children().map((option, index) => {
            return <li key={index} id={option.props.id} typeofanswer={option.props.typeofanswer} onClick={option.props.onHandleClick}>{option.props.children}</li>
        })
    }


    return (
        <div>
            <h4>{props.questionTitle}</h4>
            <div><img src={props.questionImg} alt='' ></img></div>
            <ul>
            {makeListOfOptions}
            </ul>
        </div>
    )
}

export default QuestionHandler