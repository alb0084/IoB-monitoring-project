import Linecharts from '../components/Linecharts';
import Statuswindows from '../components/Statuswindows';
import Toggle from '../components/Toggle/Toggle';
import MonitorFB from '../components/MonitorFB/MonitorFB';
import styles from './Boxcontent.module.css'
import { useState } from 'react';

const Boxcontent = () => {
    const [modalVal,setModal]=useState(true);
    const [valueStatusIAQ,setValueStatusIAQ] = useState();
    const [valueStatWin,setValueStatWin] = useState();
    const [startSys,setStartSys] = useState();
    const [valStatusChart, setValstatusChart] = useState();
    
    
    const getParamModals=(event)=> {
        return setModal(event);
    }; 
    
    const getLastValinLineChart = (event) => {
        setValueStatusIAQ(event); 
        setStartSys(event);
    };
    
    const getValStatusWindows = (status) => {
        setValueStatWin(status)
    };


    const getValstatusChart = (statusDisplay) =>{
        setValstatusChart(statusDisplay);
    };


    

    const linechart = (<Linecharts 
            getLastValinLineChart = {getLastValinLineChart} 
            getParamModals = {getParamModals} 
            valueStatWin = {valueStatWin} 
            valStatusChart = {valStatusChart}
        />);

    return (
        <div>
            <div className={styles['wrapTitle']}>
                <h1 className={styles['title']}>
                    SystemGas (Co) monitoring 
                </h1>
            </div>
            <div className = {styles['sub-box']}>
                    <Toggle getParamModals = {getParamModals}/>
                {linechart}  
                <Statuswindows 
                getValStatusWindows={getValStatusWindows}
                getValstatusChart={getValstatusChart}
                valueStatusIAQ={valueStatusIAQ}
                />
            </div>
            <MonitorFB valueStatusWindow={valueStatWin}/>
        </div>
    )   
}

export default Boxcontent;