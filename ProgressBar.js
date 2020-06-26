import React, {useState} from 'react';
import './progress-bar.css';

const Range = (props) => {
    return (
        <div className="progressbar-value " style={{width: `${props.percentRange}%`}}>
        </div>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/>
            <span class='progressbar-label'>{Math.round(props.percentRange)}%</span>
        </div>
    );
};

fetch('http://pb-api.herokuapp.com/bars')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

export const ProgressBarContainer = () => {
    let [percentRange, setProgress] = useState(30);
    const dropdownlist = ["item1", "item2", "item3"]

    return (
        <div className="container">
            <ProgressBar percentRange={percentRange}/>

            <div className="toggle-buttons">
                <select>
                    <option value="Luke Skywalker">Luke Skywalker</option>
                    <option value="C-3PO">C-3PO</option>
                    <option value="R2-D2">R2-D2</option>
                </select>
                <button onClick={() => setProgress(percentRange >0 ?
                    percentRange - 20 : 0)}>Decrease
                </button>
                <button onClick={() => setProgress(percentRange < 100 ? percentRange + 20 : 100)}>Increase</button>
                <button onClick={() => setProgress(0)}>Reset</button>
            </div>
        </div>
    );
};