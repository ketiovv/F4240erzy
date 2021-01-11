import React, { useEffect, useState }  from 'react';
import Answers from '../answers/Answers';
import Question from '../questions/Question';
import Stages from '../stages/Stages';

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
            alert("nice, next stage!");
            const nextStage = currentStage + 1;
            setCurrentStage(nextStage);
            getQuestionForStage(nextStage);
        } else {
            alert("przegrałeś");
            setCurrentStage(1);
        }
    }

    return(
        <div className="container-fluid"> 
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <Question question={question} />
                    </div>
                    <div className="row">
                        <Answers answers={answers} handle={ handleQuestionAnswer } />
                    </div>
                </div>
                <div className="col-3">
                    <Stages stages={stages} currentStageNumber={currentStage} />
                </div>
            </div>
        </div>
    );
}

export default Game
