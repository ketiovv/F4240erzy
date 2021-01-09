import React from 'react'

// function component
const Stages = ({stages,currentStageNumber}) => {
    return (
        <div>{
            stages.map((stage) => (
                <div className={ stage.stageNumber != currentStageNumber ? "card" : "card text-white bg-secondary" }>
                    <div className="card-body">
                        <h5 className="card-title">
                            Stage #{stage.stageNumber}
                        </h5>
                        <h6 className="card-subtitle mb-2">
                            Amount: {stage.amount}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Stages