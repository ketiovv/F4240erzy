import React, {Component} from 'react';
import Contacts from "./components/contacts";
import Question from './components/questions';
class App extends Component {

    state = { questions: [],
                }

    componentDidMount() {
        fetch('http://localhost:8000/api/questions')
            .then(res => res.json())
            .then((data) => {
                this.setState({ questions: data })
            })
            .catch(console.log)
    }

    render () {
        return (
            <Question questions={this.state.questions} />

        );
    }
}

export default App;