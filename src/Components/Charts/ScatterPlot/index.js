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
    const [xLabel, setXLabel] = useState('');
    const [paraY, setParaY] = useState('');
    const [yLabel, setYLabel] = useState('');
    const [seriesTitle, setSeriesTitle] = useState('series');
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
                setParaY('avg_rsrq')
                setYLabel('Reference Signal Received Quality (dBm)')
                setSeriesTitle('SINR vs RSRQ')
            }
            else if(kpiList[0]==='rsrp')
            {
                setParaY('avg_rsrp')
                setYLabel('Reference Signal Received Power (dB)')
                setSeriesTitle('SINR vs RSRP')
            }
            if(kpiList[1]==='sinr')
            {
                setParaX('avg_sinr')
                setXLabel('Signal to Inference Noise Ratio (dBm)')
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
                    interval={10}
                    minimumValue="0"
                    maximumValue="40"
                    title={xLabel}
                    name={xLabel}
                    titleTopMargin={10}
                    stroke='black'
                    strokeThickness={1.5}
                    majorStrokeThickness={0.3}
                    ></IgrNumericXAxis>
                    <IgrNumericYAxis
                    interval={10}
                    majorStrokeThickness={0.3}
                    stroke='black'
                    strokeThickness={1.5}
                    title={yLabel}
                    name={yLabel}></IgrNumericYAxis>
                    <IgrScatterSeries
                    xAxisName={xLabel}
                    yAxisName={yLabel}
                    xMemberPath="avg_sinr"
                    yMemberPath={paraY}
                    markerType="Circle"
                    markerBrush='#D18194'
                    markerOutline='#D35472'
                    markerFillOpacity='0.5'
                    dataSource={data}
                    showDefaultTooltip="true"
                    title={seriesTitle}
                    name="ScatterSeries1"></IgrScatterSeries>
                </IgrDataChart>
            </div>
        </div>
    );
}
export default ScatterPlot;