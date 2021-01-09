import React from 'react'
import './Question.css';


const Question = ({question}) => {
    if (question == null) {
        return(
            <div className="current-question">
                <h1>bla bla bla bla bla</h1>
            </div>
        )
    }
    else{
        return(
            <div className="current-question">
                <h1>
                    {question.contentOfQuestion}
                </h1>
            </div>
        )
    }
}

export default Question
