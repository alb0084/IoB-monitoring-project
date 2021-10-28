import { useEffect, useState } from 'react';
import classes from './MonitorFB.module.css';

const MonitorFB =(props)=>{
    
    const [aia, setA] = useState();
    const [checker, setChecker] = useState(false);
    
    useEffect(()=>{ 
        setTimeout(()=>setChecker(true),5000);
        if(checker){
            setA('');
            if(props.valueStatusWindow===undefined){
                setA('If the window is closed, it is recommended not to smoke.');
            }else if(props.valueStatusWindow===false){
                setTimeout(()=>setA('Detected high CO level!!, it is advisable to open the window.'),5000);
            }else if(props.valueStatusWindow===true){ 
                setTimeout(
                        () => setTimeout( 
                                        ()=>setA('If the window is closed, it is recommended not to smoke.',5000)
                        ),5000);
            }
        }
    },[checker,props.valueStatusWindow]);
        
    return (
        <div className={classes.element1}>
            <div>
                <h2 className={classes['h1_']}>System Messages Feedback</h2>
            </div>
            <div className={classes.element2}>
                {/* {tag !== undefined && aia} */}
                {aia}
            </div>
        </div>
    );
};  

export default MonitorFB;