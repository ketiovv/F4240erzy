import React from 'react'
import './Answer.css'

const Answer = ({ content, correct }) => {

    const showIfCorrect = () => {
        alert(correct)
    }

    return(
        <div className="col-6">
            <div className={ correct != true ? "answer" : "answer correct"} onClick={ showIfCorrect }>
                <h2>
                    {content}
                </h2>
            </div>
        </div>
    )
};

export default Answer