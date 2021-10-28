import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import classes from './Linecharts.module.css';


const Linecharts = (props) =>{
    
    const [vals,setVals]=useState([]);
    const [vals2,setVals2] = useState([]);
    const statuswindows = props.valueStatWin;
    const [linechartArr,setLinechartArr] = useState([]);
    const [lastChartVal,setLastChartVal] = useState();
    
    useEffect(()=>{
        const fetchValSensors = async () => {
            const response = await fetch('/getDataMq2');
            const responseData = await response.json();
            const loadedValsMq2 = [];
            for(const key in responseData){
              responseData && loadedValsMq2.push({
                    x:responseData[key].index,
                    y:responseData[key].volt
                    });
                };
                setVals(loadedValsMq2.map(val=>[val.x,val.y]));
                setVals2(loadedValsMq2.map(val=>[val.x,1.5*val.y]));
                if(statuswindows){
                    setLinechartArr(vals);
                    setLastChartVal(vals && vals[vals.length-1]);
                    props.getLastValinLineChart(vals.length>2 && vals[vals.length-1][1]);
                    // vals[vals.length] && props.getLastValinLineChart(vals[vals.length-1][1]);
                }else{
                    setLinechartArr(vals2);
                    setLastChartVal(vals2[vals2.length] && vals2[vals2.length-1][1]);
                    props.getLastValinLineChart(vals2.length>2 && vals2[vals2.length-1][1]);
                    // vals2[vals2.length] && props.getLastValinLineChart(vals2[vals2.length-1][1]);
                };
            };  
        fetchValSensors();
        },[statuswindows]);
        return (
            <div className={
                props.valStatusChart ? classes['wrapChart1'] : classes['wrapChart0']
                }>
                   {props.valStatusChart &&
                     <div style = {{display:'flex',justifyContent:'center'}} className={classes['styleFont']}> 
                         <section className={classes['section_']}>
                              Start the system simulation by activating the "toggle" on the left, successfully deactivate it, 
                              and select "show line graph" on the right for visualizing the values collected. Finally, the "control window"
                              button allows you to simulate the action of closing or opening the window by a user,
                              demonstrating to what extent the user's actions affect indoor air pollution.
                         </section>
                     </div>
                    }
               { !props.valStatusChart && <Chart
                    width={'1400px'}
                    height={'500px'}
                    chartType="LineChart"
                    loader={vals.length<1? <div>Loading Chart</div>:''}
                    data={[['y', 'Volt values'],...linechartArr] }
                    options={{
                        hAxis: {
                        title: 'Seconds',
                        },
                        vAxis: {
                        title: 'Volt',
                        },
                        backgroundColor: {
                                fill: 'white',
                                fillOpacity: '0.95'
                            }
                    }}
                    rootProps={{ 'data-testid': '1' }}/>
                    }
            </div>
    );
}

export default Linecharts;


