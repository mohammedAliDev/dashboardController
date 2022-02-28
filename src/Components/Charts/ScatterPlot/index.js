import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import {
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule
} from 'igniteui-react-charts';
import {
    IgrLegend,
    IgrDataChart,
    IgrNumericXAxis,
    IgrNumericYAxis,
    IgrScatterSeries
} from 'igniteui-react-charts';
const mods = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

const ScatterPlot = (props) => {
    const [data, setData] = useState([]);
    const [interval, setInterval] = useState('minute');
    const [kpiList, setKpiList] = useState(props.kpiList);
    let legend;
    const legendRef = useRef();
    const chartRef = useRef();
    useEffect(() => {
		fetchData();
	}, [kpiList]);
    const fetchData = () => {
        var apidata = {
            granularity : interval,
            attributes : kpiList,
			// median : [0.25 , 0.75],
            // filters:[
            //     {
            //         key:"timestamp",
            //         Op:"lt",
            //         value:'2022-02-23 05:40:51.932'
            //     },
            //     {
            //         key:"timestamp",
            //         Op:"gt",
            //         value:'2022-02-22 06:26:51.932'
            //     }
            // ],
            limit : 10000,
        }

        axios
            .post('/apm-plugin/dashboard/aggregate',apidata)
            .then(res => {
                console.log(res.data.Data)
				res.data.Data.forEach((e) => {
					delete e.setSize;
					delete e.timestamp;
					delete e.timezone;
					
				})
                setData(res.data.Data)
    	        console.log("inside fetchdata useEffect",data)
            })
            .catch(err => {
                console.log(err)
            })
                    
    }
    return (
        <div className="sample">
            {/* <button onClick={()=>{fetchData()}}>Fetch</button> */}
			<div className="container fill">
                <IgrDataChart legend={legendRef.current} ref={chartRef} isHorizontalZoomEnabled="true">
                    <IgrNumericXAxis
                    minimumValue="0"
                    maximumValue="35"
                    title="SINR"
                    name="SINR"></IgrNumericXAxis>
                    <IgrNumericYAxis
                    // minimumValue="0"
                    // maximumValue="-30"
                    title="RSRP"
                    name="RSRP"></IgrNumericYAxis>
                    <IgrScatterSeries
                    xAxisName="SINR"
                    yAxisName="RSRP"
                    xMemberPath="avg_sinr"
                    yMemberPath="avg_rsrp"
                    markerType="Circle"
                    markerBrush='#D18194'
                    markerOutline='#D35472'
                    markerFillOpacity='0.5'
                    dataSource={data}
                    showDefaultTooltip="true"
                    title="SINR vs RSRP"
                    name="ScatterSeries1"></IgrScatterSeries>
                </IgrDataChart>
            </div>
        </div>
    );
}
export default ScatterPlot;