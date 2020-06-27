

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
                <div className="buttons">
                    <h5 className="button-title">{button}</h5>
                </div>
                ))}
                {this.state.bars.map((bar) => (
                <div className="bars">
                    <h5 className="bar-title">{bar}</h5>
                </div>
                ))}
                <div className="limit">
                    <h5 className="limit-title">{this.state.limit}</h5>
                </div>
            </div>
        );
    }
}

export default App;