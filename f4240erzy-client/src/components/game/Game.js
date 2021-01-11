import React, { useEffect, useState }  from 'react';
import Answers from '../answers/Answers';
import Question from '../questions/Question';
import Stages from '../stages/Stages';

// class component
function Game (){
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([])
    const [stages, setStages] = useState([])
    const [currentStage, setCurrentStage] = useState(1)

    useEffect(() => {
        // get all questions to variable
        fetch('http://localhost:8000/api/questions')
        .then(res => res.json())
        .then((data) => {
            setQuestions(data);
        })
        .catch(console.log)

        // get all stages to variable
        fetch('http://localhost:8000/api/stages')
            .then(res => res.json())
            .then((data) => {
                setStages(data)
            })
            .catch(console.log)

        // get all anwers for question with id to variable
        fetch('http://localhost:8000/api/answers/question/10')
        .then(res => res.json())
        .then((data) => {
            setAnswers(data)
        })
        .catch(console.log)
    },[])

    const HandleQuestionAnswer = (ifCorrect) => {
        if (ifCorrect == true) {
            alert("nice, next stage!");
            setCurrentStage(currentStage + 1);
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
                        <Question  question={questions[0]} />
                    </div>
                    <div className="row">
                        <Answers answers={answers} handle={ HandleQuestionAnswer } />
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
