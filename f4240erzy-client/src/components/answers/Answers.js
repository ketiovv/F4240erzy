import React from 'react'
import Answer from './Answer'

function Answers(props) {
        return(
            <div className="container">
                <div className="row">{
                    props.answers.map((answer) => ( 
                        <Answer content={answer.contentOfAnswer} correct={answer.correct} />
                    ))
                }
                </div>
                <div className="row">
                    <button>test</button>
                </div>
            </div>
        )
};

export default Answers