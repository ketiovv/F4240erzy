import React from 'react'
import './Answer.css'

const Answer = ({ content }) => {
    return(
        <div className="col-6">
            <div className="answer">
                <h2>
                    {content}
                </h2>
            </div>
        </div>
    )
};

export default Answer