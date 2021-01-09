import React, {Component} from 'react';
import Answers from '../answers/Answers';
import Question from '../questions/Question';
import Stages from '../stages/Stages';

// class component
class Game extends React.Component{
    state = { 
        questions: [],
        answers:[],
        stages:[],
    }

    componentDidMount() {
        // get all questions to variable
        fetch('http://localhost:8000/api/questions')
            .then(res => res.json())
            .then((data) => {
                this.setState({ questions: data })
            })
            .catch(console.log)

        // get all stages to variable
        fetch('http://localhost:8000/api/stages')
            .then(res => res.json())
            .then((data) => {
                this.setState({ stages: data })
            })
            .catch(console.log)

        // get all anwers for question with id to variable
        fetch('http://localhost:8000/api/answers/question/10')
        .then(res => res.json())
        .then((data) => {
            this.setState({ answers: data })
        })
        .catch(console.log)
    }
    
    render (){
        return(
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <Question  question={this.state.questions[0]} />
                    </div>
                    <div className="row">
                        <Answers answers={this.state.answers} />
                    </div>
                </div>
                <div className="col-3">
                    <Stages stages={this.state.stages} currentStageNumber="1" />
                </div>
            </div>
        </div>
        );
    }
}

export default Game
