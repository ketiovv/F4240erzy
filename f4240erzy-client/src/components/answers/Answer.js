import React from 'react'
import './Answer.css'

const Answer = ({ content, correct, }) => {

    const test = () => {
        alert(correct)
    }

    return(
        <div className="col-6">
            <div className={ correct != true ? "answer" : "answer correct"} onClick={ test }>
                <h2>
                    {content}
                </h2>
            </div>
        </div>
    )
};

export default Answer