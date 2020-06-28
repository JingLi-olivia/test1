import React, {useState} from 'react';
import './progress-bar.css';

const Range = (props) => {
    return (
        <div className={`progressbar-value ${props.percentRange<=100 ? "" : "warning"}`}
        style={{width: `${props.percentRange}%`}}>
        </div>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/>
            <span className='progressbar-label'>{Math.round(props.percentRange)}%</span>
        </div>
    );
};

export const ProgressBarContainer = (props) => {
    console.log('buttons are: ', props.buttons);
    console.log('bars are: ', props.bars);
    console.log('limit are: ', props.limit);

    var selectorArr=[];

    console.log(props.bars.length);
    for (var i = 1; i <= props.bars.length; i++) { 
        var name= "progress bar "+i;
        var obj = {
            "name": name,
            "value": props.bars[i-1]
         }
         selectorArr.push(obj);
 
    }
    
console.log(props.bars);

    let [percentRange, setProgress] = useState([10,20,100]);
    let [selectorState, setSelectorState] = useState(0);
  
    console.log(percentRange);
    function updateprogressbar(val) {
        console.log("*************************");
        var newVal = percentRange[selectorState]+val;
        var f =0;
        if(newVal >=0){
            if(newVal >props.limit){
                f= props.limit;
            }else{
                f= newVal;
            }
        }
        else{
            f=0
        }
        
        percentRange[selectorState] = f;
        setProgress([...percentRange]);
      }

    return (
        <div className="container">
                {percentRange.map((val) => (
                        <div className="container">
                            <ProgressBar percentRange={val}/>
                        </div>
                    ))}     

            <div className="toggle-buttons">
                <select value={selectorState} onChange={e=>setSelectorState(e.target.value)}>
                    {selectorArr.map((option,index) => (
                        <option value={index}>{option.name}</option>
                    ))}
                </select>
                {props.buttons.map((val) => (
                    <button onClick={() => updateprogressbar(val)}>{val}
                    </button>
                ))}
                <button onClick={() => setProgress(percentRange >0 ?
                    percentRange - 20 : 0)}>Decrease
                </button>
                <button onClick={() => setProgress(percentRange + 20)}>Increase</button>
                <button onClick={() => setProgress(0)}>Reset</button>
            </div>
        </div>
    );
};