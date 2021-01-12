import React from 'react'
import './Question.css';


const Question = ({question}) => {
    if (question == null) {
        return(
            <div className="container">
                <div className="current-question">      
                    <h1>Trwa ładowanie pytania..</h1>
                </div>
            </div>
            
        )
    }
    else{
        return(
            <div className="container-fluid">
                <div className="current-question">
                    <p>
                        {question.contentOfQuestion}
                    </p>
                </div>
            </div>
        )
    }
}

export default Question
