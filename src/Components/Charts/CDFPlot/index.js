import { useEffect, useRef, useState } from 'react';

import {
	IgrLegendModule,
	IgrDataChartCoreModule,
	IgrDataChartScatterModule,
	IgrDataChartScatterCoreModule,
	IgrDataChartInteractivityModule,
	IgrCategoryChart,
} from 'igniteui-react-charts';
import axios from 'axios';
import {
	IgrLegend,
	IgrDataChart,
	IgrNumericXAxis,
	IgrNumericYAxis,
	IgrScatterSeries,
	IgrCategoryChartModule,
} from 'igniteui-react-charts';
import { forEach } from 'lodash';
const cdf = require('cumulative-distribution-function');

const mods = [IgrLegendModule, IgrCategoryChartModule];
mods.forEach((m) => m.register());

export default function CDFPlot(props) {
	const [data, setData] = useState([]);
	const [kpiList, setKPIList] = useState(props.kpiList)
	let legend;
	const legendRef = useRef();
	const chartRef = useRef();
	useEffect(() => {
		fetchData();
	}, [kpiList]);

	function sortNum(a,b){
		return a-b;
	}
	const preProcessData = (tempData) => {
		var temp = [];
		var newt = []
		tempData.forEach((e) => {
			newt.push(e.avg_rsrp)
		})
		const cleanData = newt
                    .map((v)=>(+v))
                    .filter((v)=>(isFinite(v)));
		var mycdf  = cdf(cleanData);
		let outputArray = Array.from(new Set(cleanData))
		outputArray.sort(sortNum);
		console.log(outputArray)
		
		outputArray.forEach((x) => {
			let y = mycdf(x)
			let e = {}
			e.x = x.toString();
			e.y = y*100;
			temp.push(e)
		})
		console.log(temp)
		setData(temp)
	}

	const fetchData = () => {
        var apidata = {
            granularity : 'millisecond',
            attributes : kpiList,
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
					delete e.timezone;
					delete e.timestamp
					// e.timestamp = new Date(e.timestamp).toLocaleString();
					// console.log(new Date(e.timestamp).toLocaleString())
				})
				preProcessData(res.data.Data)
                // setData(res.data.Data.reverse())
            })
            .catch(err => {
                console.log(err)
            })
    }

	return (
		<div className='container sample'>
			{/* <div className='legend-title'>{props.chartTitle}</div> */}
			{/* <div className='legend'>
				<IgrLegend orientation='Horizontal' ref={legendRef}></IgrLegend>
			</div> */}
			<div className='container fill'>
				<IgrCategoryChart
					yAxisMinimumValue='0'
					yAxisMaximumValue='100'
					chartType='Line'
					yAxisLabelLeftMargin='0'
					yAxisTitleLeftMargin='10'
					yAxisTitleRightMargin='5'
					yAxisTitle=''
					xAxisTitle='time'
					xAxisTitleMargin='10'
					dataSource={data}
					thickness={1.2}
					outlines="#d18194"
					brushes="#d18194"
					markerBrushes="#d18194"
					markerOutlines="white"
					legend={legendRef.current}
					isHorizontalZoomEnabled='true'
					isVerticalZoomEnabled='false'
					ref={chartRef}
					xAxisMajorStrokeThickness={0.3}
					yAxisMajorStrokeThickness={0.3}
					markerThickness={0.2}
					// trendLineBrushes="#d18194"
				></IgrCategoryChart>
			</div>
		</div>
	);
}
