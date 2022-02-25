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

const mods = [IgrLegendModule, IgrCategoryChartModule];
mods.forEach((m) => m.register());

export default function Graph() {
	const [data, setData] = useState([
		{
			year: `2009`,
			europe: 34,
			china: 21,
			uSA: 19,
		},
		{
			year: `2010`,
			europe: 43,
			china: 26,
			uSA: 24,
		},
		{
			year: `2011`,
			europe: 66,
			china: 29,
			uSA: 28,
		},
	]);
	let legend;
	const legendRef = useRef();
	const chartRef = useRef();
	const fetchData = () => {
        var apidata = {
            granularity : 'millisecond',
            attributes : ["rsrq","sinr"],
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
            limit : 1000000,
        }

        axios
            .post('/apm-plugin/dashboard/aggregate',apidata)
            .then(res => {
                console.log(res.data.Data)
                setData(res.data.Data)
    	        console.log("inside fetchdata useEffect",data)
            })
            .catch(err => {
                console.log(err)
            })
                    
    }

	return (
		<div className='container sample'>
			<button onClick={()=>{fetchData()}}>Fetch</button>
			<div className='legend-title'>Renewable Electricity Generated</div>
			<div className='legend'>
				<IgrLegend orientation='Horizontal' ref={legendRef}></IgrLegend>
			</div>
			<div className='container fill'>
				<IgrCategoryChart
					chartType='Line'
					yAxisLabelLeftMargin='0'
					yAxisTitleLeftMargin='10'
					yAxisTitleRightMargin='5'
					yAxisTitle='TWh'
					dataSource={data}
					legend={legend}
					isHorizontalZoomEnabled='false'
					isVerticalZoomEnabled='false'
					ref={chartRef}
				></IgrCategoryChart>
			</div>
		</div>
	);
}
