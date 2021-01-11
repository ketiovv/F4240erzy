import React from 'react'
import Answer from './Answer'

const Answers = ({ answers}) => {

        return(
            <div className="container">
                <div className="row">{
                    answers.map((answer) => ( 
                        <Answer content={answer.contentOfAnswer} correct={answer.correct} />
                    ))
                }
                </div>
            </div>
        )
};

export default Answers