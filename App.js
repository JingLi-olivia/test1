

import React, {Component} from 'react';

import {ProgressBarContainer} from './ProgressBar';

class App extends Component {
    state = {
        buttons: [],
        bars: [],
        limit: []
    }
    componentDidMount() {
        fetch('http://pb-api.herokuapp.com/bars')
        // fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data) => {
        this.setState(
            {
                buttons: data.buttons,
                bars: data.bars,
                limit: data.limit
            })
        console.log(this.state.buttons)
        console.log(this.state.bars)
        console.log(this.state.limit)
        })
        .catch(console.log)
    }
    render() {
        return (
            <div className="App">
                {/* <ProgressBarContainer/> */}

                <h1>My Todos</h1>
                {this.state.buttons.map((button) => (
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{button[0]}</h5>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default App;