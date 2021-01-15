import React from 'react'
import './Answer.css'

const Answer = ({ content, correct, handle }) => {
    return(
        <div className="col-12">
            {/* 
            Cheat version
            <div className={ correct!=true ? "answer" : "answer correct"} onClick={ () => handle(correct) }> 
            */}
            <div className="answer" onClick={ () => handle(correct) }>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
};

export default Answer