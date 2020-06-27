import React, {useState} from 'react';
import './progress-bar.css';

const Range = (props) => {
    return (
        <div className={`progressbar-value ${props.percentRange<=100 ? "" : "warning"}`}
        style={{width: `${props.percentRange<=100 ? props.percentRange : 100}%`}}>
        </div>
    );
};

const ProgressBar = (props) => {
    let className = 'progress-bar';
    if (props.order === props.currentBar) {
        className += ' bar-active';
    }
    return (
        <div className={className}>
            <Range percentRange={props.percentRange}/>
            <span className='progressbar-label'>{Math.round(props.percentRange)}%</span>
        </div>
    );
};
class ProgressBarContainer extends React.Component {
    componentWillReceiveProps(nextProps) {
		// Any time props.bars changes, update state.
        this.setState({
			bars:nextProps.bars
		});
    }
    constructor(props) {
        super(props);
        this.state = {
            bars: props.bars,
            currentBar: 0
        };
    }
    updateprogressbar(val) {
        var newVal = this.state.bars[this.state.currentBar] + val;
        var f =0;
        if(newVal >=0){
            if(newVal >this.props.limit){
                f= this.props.limit;
            }else{
                f= newVal;
            }
        }
        else{
            f=0
        }
        
		var bars=this.state.bars;
		bars[this.state.currentBar]=f;
		this.setState({bars});
    }
    setSelectorState(val) {
        this.setState({currentBar: val * 1})
    }

    render() {
        return (
            <div className="container">

                <div className="container">
                    {this.state.bars.map((val, index) => (
                        <ProgressBar key={index} order={index} currentBar = {this.state.currentBar} percentRange={val}/>
                        
                    ))}
                </div>

                <div className="toggle-buttons">
                    <select value={this.state.currentBar} onChange={e=>this.setSelectorState(e.target.value)}>
                        {this.props.bars.map((option,index) => (
                            <option key={index} value={index}>progress bar {index + 1}</option>
                        ))}
                    </select>
                    {this.props.buttons.map((val, index) => (
                        <button key={index} onClick={() => this.updateprogressbar(val)}>{val}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}
export default ProgressBarContainer;
