

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
            </div>
        );
    }
}

export default App;