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
    const [paraX, setParaX] = useState('');
    const [yLabel, setYLabel] = useState('');
    const [interval, setInterval] = useState('minute');
    const [kpiList, setKpiList] = useState(props.kpiList);
    let legend;
    const legendRef = useRef();
    const chartRef = useRef();
    useEffect(() => {
		fetchData();
	}, [kpiList,yLabel]);
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
            if(kpiList[0]==='rsrq')
            {
                setParaX('avg_rsrq')
                setYLabel('Reference Signal Recieved Power (dBm)')
            }
            else if(kpiList[0]==='rsrp')
            {
                setParaX('avg_rsrp')
                setYLabel('Reference Signal Recieved Quality (dB)')
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
            <div className="container fill">
                <IgrDataChart legend={legendRef.current} ref={chartRef} isHorizontalZoomEnabled="true">
                    <IgrNumericXAxis
                    minimumValue="0"
                    maximumValue="35"
                    title="SINR"
                    name="SINR"></IgrNumericXAxis>
                    <IgrNumericYAxis
                    title={yLabel}
                    name={yLabel}></IgrNumericYAxis>
                    <IgrScatterSeries
                    xAxisName="SINR"
                    yAxisName={yLabel}
                    xMemberPath="avg_sinr"
                    yMemberPath={paraX}
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