

import React, {Component} from 'react';

import {ProgressBarContainer} from './ProgressBar';

class App extends Component {
    state = {
        buttons: [],
        bars: [],
        limit: []
    }
    componentWillMount() {
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
                <ProgressBarContainer buttons={this.state.buttons} bars={this.state.bars} limit={this.state.limit} />

                <h1>My Todos</h1>
                {this.state.buttons.map((button) => (
                <div className="buttons">
                    <h5 className="button-title">{button}</h5>
                </div>
                ))}
                <select>
                    {this.state.bars.map((bar) => (
                        <option value="{bar}">{bar}</option>
                    ))}
                </select>
                <div className="limit">
                    <h5 className="limit-title">limit: {this.state.limit}</h5>
                </div>
            </div>
        );
    }
}

export default App;