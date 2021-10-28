import { useEffect, useState } from "react";
import styles from './Toggle.module.css'


const Toggle =(props)=> {

    const [paramToggle,setToggle]=useState(true);
    const handlerToggleSwitch = () => setToggle((prevTogState)=>{
        if(!prevTogState===false || !prevTogState===true){
            fetch("/setmq2sensor",{
                method:"POST",
                cache: "no-cache",
                headers:{
                    "content_type":"application/json",
                },
                body:prevTogState
                }
            ).then(response => {
              return console.log('Response status-> '+response.status);
          });
        }    
        return !prevTogState;
    });

    useEffect(()=>{
    props.getParamModals(paramToggle);

    },[paramToggle,props])

    const classCssComponent=paramToggle? styles['toggle-component2']:styles['toggle-component'];
    const classCssButton = paramToggle? styles['toggle-button2']:styles['toggle-button'];
    
    return (
        <div> 
           <div className={styles['wrapper']}>
               <h2>ON/OFF</h2>
               <div className={classCssComponent} onClick={handlerToggleSwitch} >
               <div className={classCssButton} />
               </div>
           </div>
        </div>
      )
    }
        
export default Toggle;
    
  