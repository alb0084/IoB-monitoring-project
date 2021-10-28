import { /*useEffect*/ useEffect, useState } from "react";
// import {getRandomInt} from '../library_functions/randomInt';
import classes from './Statuswindows.module.css';

const Statuswindows =(props)=>{
    const [param,checkParam]=useState(false);
    const [paramDisplayChart,setParamDisplayChart ] = useState(false);

    const handlerButtonSwitch = () => checkParam(( prevStateParam ) =>{ 
        props.getValStatusWindows(param)
        return !prevStateParam
    });

    const handlerShowChart = () => setParamDisplayChart(( preValDisplayChart ) =>{ 
        props.getValstatusChart(paramDisplayChart)
        return !preValDisplayChart;
    });
    return (
        <div style={{width:'308px',
                    backgroundColor:'rgb(255, 255, 255,0.95 )',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    boxShadow: '0px 2px 17px rgb(0 0 0 / 30%),0px 0px 5px 0 rgb(25 25 25 / 50%)'
                    }}>
            <h2 style={{textAlign:'center'}}>Status parameter</h2>
            <ul style={{display:'flex',listStyleType:'none',margin:'0'}}>
                <li style={{fontWeight:'bold'}}>Status IAQ:</li>{'\u00A0'}<li>{ props.valueStatusIAQ> 300 ? 'HIGH (CO) LEVELS' : 'LOW (CO) LEVELS'}</li>
            </ul>
            <ul style={{display:'flex',listStyleType:'none'}}>
                <li style={{fontWeight:'bold'}}>Status Windows:</li>{'\u00A0'}<li>{param === true? 'Closed' : 'Opened'}</li>
            </ul>
            <ul style={{listStyleType:'none',fontWeight:'bold'}}>
                <li>Control Panel</li>
            </ul>
            <ul style={{listStyleType:'none',
             display:'flex',
             paddingLeft:'14px',
             position:'relative',
             bottom:'30px'  
             }}>
                <li>
                    <a
                    style={paramDisplayChart ? {} : {pointerEvents:'none',opacity:'0.8'}} 
                    className={classes['square_btn']} 
                    onClick={handlerButtonSwitch}>Control Windows</a>
                </li>
                <li style={{paddingLeft:'15px'}}>
                    <a
                     className={classes['square_btn']}
                     onClick={handlerShowChart}> Show Line chart</a>
                </li>
            </ul>
        </div>
    );
}

export default Statuswindows;