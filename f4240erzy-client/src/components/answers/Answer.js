import React from 'react'
import './Answer.css'

const Answer = ({ content, correct, handle }) => {
    return(
        <div className="col-6">
            <div className={ "answer"} onClick={ () => handle(correct) }>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
};

export default Answer