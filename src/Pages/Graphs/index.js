import React, { useState, useEffect } from 'react';
import './graphs.css';
import { Card,Row,Col, Button } from 'antd';
import 'antd/dist/antd.css';
import DeviceInfo from '../../Components/DeviceInfoHeader/DeviceInfo';
import LineChart from '../../Components/Charts/LineChart';
import Plot from 'react-plotly.js';
import { data } from '../../utils/data';

const Graphs = (props) => {
	const [dataDisplayed, setDataDisplayed] = useState('applicationData');
	const [deviceDataDisplayed, setDeviceDataDisplayed] = useState('RTT');
	const [appVersion, setAppVersion] = useState(24);
	const devInfo={
		brandName:'Samsung',
		modelName:'Galaxy S Duos',
		osVersion:'10'
	}
	const graphNames = {
		'CQI': "Channel Quality Index (CQI)",
		'SINR': "Signal to Inference Noise Ratio (SINR)",
		'RSRQ': "Reference Signal Received Quality (RSRQ)",
		'RSRP': "Reference Signal Received Power (RSRP)",
		'RTT': "Round Trip Time (RTT)",
		'Throughput': "Throughput",
	};
	const [SINR,setSINR] = useState([]);
	const [Throughput, setThroughput]= useState([]);
	const [RSRP, setRSRP] = useState([]);
	const CQISeries=[
		{
			name: "CQI",
			data: [52, 40, 45, 50, 49, 30, 36, 12, 52, 40, 45, 50, 49, 30, 30, 18, 52, 40, 45, 50, 49, 30, 31, 27, 50, 49, 30, 45, 59, 52, 40, 45, 4]
		}
	];
	const SINRSeries=[
		{
			name: "SINR",
			data: [52, 40, 45, 80, 49, 30, 36, 19, 52, 53, 45, 20, 49, 31, 40, 18, 52, 40, 45, 90, 19, 40, 11, 27, 30, 25, 30, 45, 59, 52, 44]
		}
	];
	const appDataSeries=[
		{
			name: "appdata",
			data: [40, 45, 80, 46, 19, 52, 53, 45, 80, 49, 30, 36, 19, 52, 49, 31 ,49, 31, 40, 52, 40,45, 25, 30, 45, 59, 52, 44]
		}
	];
	const RSRQSeries=[
		{
			name: "RSRQ",
			data: [52, 40, 45, 50, 49, 19, 36, 12, 5, 33, 45, 50, 40, 29, 19, 18, 52, 40, 45, 50, 49, 19, 31, 27, 50, 49, 30, 41, 5, 5, 40, 35]
		}
	];
	const RSRPSeries=[
		{
			name: "RSRP",
			data: [52, 40, 45, 50, 49, 30, 36, 12, 52, 40, 40, 50, 49, 30, 45, 50, 49, 30, 20, 18, 52, 40, 45, 50, 49, 30, 31, 24]
		}
	];
	const SINRLevels = {
		y1: 10,y2: 15,y3: 24,y4: 39,y5: 50
	};
	const CQILevels = {
		y1: 10,y2: 15,y3: 24,y4: 39,y5: 50
	};
	const RSRPLevels = {
		y1: 10,y2: 15,y3: 24,y4: 39,y5: 50
	};
	const RSRQLevels = {
		y1: 10,y2: 15,y3: 24,y4: 39,y5: 50
	};
	const [deviceInfo,setDeviceInfo] = useState(devInfo)
	const [series,setSeries] = useState(appDataSeries)
	const [legendLevels, setLegendLevels] = useState({y1:0,y2:0,y3:0,y4:0,y5:0})
	// functions

	const getData = () =>{
		var sinr = [];
		var throughput = [];
		var rsrp = [];
		data.map((item)=>{
			sinr.push(item['SINR[dB]']);
			throughput.push(item['Throughput (Kbps)']/1000000);
			rsrp.push(item['RSRP[dBm]']);
		})
		setSINR(sinr);
		setThroughput(throughput);
		setRSRP(rsrp);
		console.log('rsrp',RSRP);
	}
	const seeGraphType = (value) =>{
		setDataDisplayed(value)
		console.log("viewing ", value)
		switch(value)
		{
			case 'CQI': setSeries(CQISeries);
						setLegendLevels(CQILevels);
						break;
			case 'RSRQ': setSeries(RSRQSeries);
						setLegendLevels(RSRQLevels);		
						break;
			case 'RSRP': setSeries(RSRPSeries);
						setLegendLevels(RSRPLevels);		
						break;
			case 'SINR': setSeries(SINRSeries);
						setLegendLevels(RSRPLevels);
						break;
			case 'applicationData': setSeries(appDataSeries);
						setLegendLevels({y1:0,y2:0,y3:0,y4:0,y5:0})
						break;
		}
		
	}
	const seeSubGraphType = (value) =>{
		setDeviceDataDisplayed(value)
		setSeries(appDataSeries)
		console.log("viewing ", value)
		console.log("dhbwjw",graphNames[value])
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='container'>
			<Card className='card body'>
				<div className='content'>
					<DeviceInfo brand={deviceInfo.brandName} model={deviceInfo.modelName} os={deviceInfo.osVersion}/>
					<Card className='card'>
						<LineChart width={500} height={500}/>
						<h1>
							SINR vs Throughput
						</h1>
						<Plot
							data={[
							{
								x: Throughput,
								y: SINR,
								type: 'scatter',
								mode: 'markers',
								marker: {color: 'red',size:3},
							}]}
							layout={ {width: 800, height: 600, title: 'SINR vs Throughput',plot_bgcolor:'#e6ebf7',xaxis:{gridcolor:'#fff',title:{text:'Throughput (Mbps)'}},yaxis:{gridcolor:'#fff',title:{text:'SINR (dB)'}}} }
						/>
						<h1>SINR vs RSRP</h1>
						<Plot
							data={[
							{
								x: RSRP,
								y: SINR,
								type: 'scatter',
								mode: 'markers',
								marker: {color: 'blue',size:3,opacity:0.45},
							}]}
							layout={ {width: 800, height: 600, title: 'SINR vs RSRP',plot_bgcolor:'#e6ebf7',xaxis:{gridcolor:'#fff',title:{text:'RSRP (dBm)'}},yaxis:{gridcolor:'#fff',title:{text:'SINR (dB)'}} }}
						/>
						<div className='content'>
							<Row >
								<Col xs={{ span: 24}} lg={{ span: 24}}>
									<Row >
										<Button shape="round" size='medium' className={dataDisplayed==="applicationData" ? "chip-btn sel" : "chip-btn"} onClick={()=>{seeGraphType('applicationData')}}> Application Data</Button>
										<Button shape="round" size='medium' className={dataDisplayed==="RSRQ" ? "chip-btn sel" : "chip-btn"} onClick={()=>{seeGraphType('RSRQ')}}> RSRQ</Button>
										<Button shape="round" size='medium' className={dataDisplayed==="SINR" ? "chip-btn sel" : "chip-btn"} onClick={()=>{seeGraphType('SINR')}}> SINR</Button>
										<Button shape="round" size='medium' className={dataDisplayed==="CQI" ? "chip-btn sel" : "chip-btn"} onClick={()=>{seeGraphType('CQI')}}> CQI</Button>
									</Row>
								</Col>
							</Row>
							<div className='divider'></div>
						</div>
						{
							dataDisplayed === 'applicationData'
							?
							<div >
								<Row className='content'>
									<Col xs={{ span: 12}} lg={{ span: 4}}>
										<span className='label'>Application Version</span>
									</Col>
									<Col xs={{ span: 12}} lg={{ span: 20}}>
										<span>{appVersion}</span>
									</Col>
								</Row>
								<Row >
									<Col xs={{ span: 24}} lg={{ span: 18}}>
										<Row >
											<Button shape="round" size='small' onClick={()=>{seeSubGraphType('RTT')}} className={deviceDataDisplayed==="RTT" ? "chip-btn-sub  sel-sub" : "chip-btn-sub"}> Device RTT </Button>
											<Button shape="round" size='small' onClick={()=>{seeSubGraphType('Throughput')}} className={deviceDataDisplayed==="Throughput" ? "chip-btn-sub sel-sub" : "chip-btn-sub"}> Throughput </Button>
										</Row>
									</Col>
								</Row>
							</div>
							:
							''
						}
						<div className='content'>
						{dataDisplayed==="applicationData"?
							<div>
								App data
							</div>
							:
							<div>
								radio data
								<div class="styleTrendLines">
									<div class="excellent">
										<div class="circle greenCircle" />
										<span>Excellent</span>
									</div>
									<div class="avg">
										<div class="circle blueCircle" />
										<span>Good</span>
									</div>
									<div class="avg">
										<div class="circle yellowCircle" />
										<span>Average</span>
									</div>
									<div class="avg">
										<div class="circle redCircle" />
										<span>Poor</span>
									</div>
								</div>
							</div>
						}
						</div>
					</Card>
				</div>
			</Card>
		</div>
	)
};

export default Graphs;
