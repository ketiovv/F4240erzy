import React from 'react'
import "./Stage.css"

// function component
const Stages = ({stages, currentStageNumber}) => {
    return (
        <div className="stages-background">{
            stages.map((stage) => (
                <div className={ stage.stageNumber != currentStageNumber ? "row stage" : "row stage active" }>
                    <div className="col-1 stage-number">
                        {stage.stageNumber}
                    </div>
                    <div className="col-9 stage-amount">
                        {stage.amount == 1000000 ? "F4240" : stage.amount} zł
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Stages