import React, { useState, useEffect } from 'react';
import './graphs.css';
import { Card,Row,Col, Button } from 'antd';
import 'antd/dist/antd.css';
import ScatterPlot from '../../Components/Charts/ScatterPlot';
import LineChart from '../../Components/Charts/LineChart'


const Graphs = (props) => {
	// const [dataDisplayed, setDataDisplayed] = useState('applicationData');
	// const [deviceDataDisplayed, setDeviceDataDisplayed] = useState('RTT');
	const [appVersion, setAppVersion] = useState(24);
	const [data, setData] = useState([]);
	

	// functions
	

	return (
		<div className='container'>
			<ScatterPlot  kpiList={['rsrp', 'sinr']}></ScatterPlot>
			<LineChart></LineChart>
			{/* s</Card> */}
		</div>
	)
};

export default Graphs;
