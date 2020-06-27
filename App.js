

import React, {Component} from 'react';

import ProgressBarContainer from './ProgressBar';

class App extends Component {
    state = {
        buttons: [],
        bars: [],
        limit: []
    }
    componentWillMount() {
        fetch('http://pb-api.herokuapp.com/bars')
        .then(res => res.json())
        .then((data) => {
        console.log('test test')
        this.setState(
            {
                buttons: data.buttons,
                bars: data.bars,
                limit: data.limit
            })
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