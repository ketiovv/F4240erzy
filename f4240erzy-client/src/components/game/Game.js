import React, { useEffect, useState }  from 'react';
import Answers from '../answers/Answers';
import Question from '../questions/Question';
import Stages from '../stages/Stages';
import "./Game.css"

// class component
function Game (){
    const [currentStage, setCurrentStage] = useState(1)
    const [stages, setStages] = useState([])
    const [question, setQuestion] = useState(null);
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        getAllStages();
        getQuestionForStage(currentStage);
    },[])

    const getAllStages = () => {
        fetch('http://localhost:8000/api/stages')
            .then(res => res.json())
            .then((data) => {
                setStages(data)
            })
            .catch(console.log)
    }
    
    const getQuestionForStage = (stageNumber) => {
        fetch(`http://localhost:8000/api/questions/random/${stageNumber}`)
            .then(res => res.json())
            .then((data) => {
                setQuestion(data);
                getAllAnswersToQuestion(data.id);
            })
            .catch(console.log)
    }

    const getAllAnswersToQuestion = (questionId) => {
        fetch(`http://localhost:8000/api/answers/question/${questionId}`)
            .then(res => res.json())
            .then((data) => {
                setAnswers(data)
            })
            .catch(console.log)
    }

    const handleQuestionAnswer = (ifCorrect) => {
        if (ifCorrect == true) {
            if (currentStage < 12) {
                const nextStage = currentStage + 1;
                setCurrentStage(nextStage);
                getQuestionForStage(nextStage);
            }
            else{
                alert("wygrales")
                const nextStage = 1;
                setCurrentStage(nextStage);
                getQuestionForStage(nextStage);
            }
        } else {
            setCurrentStage(1);
            getQuestionForStage(1);
        }
    }

    return(
        <div className="container-fluid"> 
            <div className="row">
                <div className="col-sm-12 col-md-9">
                    <div className="row">
                        <Question question={question} />
                    </div>
                    <div className="row">
                        <Answers answers={answers} handle={ handleQuestionAnswer } />
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                    <Stages stages={stages} currentStageNumber={currentStage} />
                </div>
            </div>
        </div>
    );
}

export default Game
