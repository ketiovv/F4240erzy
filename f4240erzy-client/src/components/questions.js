import React from 'react'

const Question = ({ questions }) => {
    return (
        <div>
            <center><h1>Question List</h1></center>
            {questions.map((question) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{question.id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{question.contentOfQuestion}</h6>
                        <p class="card-text">{question.stageId}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Question