import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './graphs.css';
import { Card,Row,Col, Button } from 'antd';
import 'antd/dist/antd.css';

const Graphs = () => {
	const [dataDisplayed, setDataDisplayed] = useState('applicationData');
	const [deviceDataDisplayed, setDeviceDataDisplayed] = useState('RTT');
	const brandName = "Samsung";
	const modelName = "Galaxy S Duos";
	const osVersion = 10;
	const series = [
	{
		name: "series-1",
		data: [52, 40, 45, 50, 49, 30, 36, 12, 52, 40, 45, 50, 49, 30, 30, 18, 52, 40, 45, 50, 49, 30, 31, 27, 50, 49, 30, 45, 59, 52, 40, 45, 4]
	},
	{
		name: "series-2",
		data: [45, 59, 52, 40, 45, 50, 49, 30, 45, 52, 40, 45, 50, 49, 10, 62, 59, 52, 40, 45, 50, 49, 10, 53, 59, 50, 49, 30, 39, 67, 52, 40, 45]
	}
	];
	const options = {
	chart: {
		id: "line",
		toolbar: {
		show: true,
		offsetX: 0,
		offsetY: 0,
		tools: {
				download: false,
				selection: false,
				zoom: false,
				zoomin: true,
				zoomout: true,
				pan: true,
			},
			autoSelected: 'pan'
		},
	},
	title: {
	text: dataDisplayed === 'applicationData'?deviceDataDisplayed:dataDisplayed,
	align: 'center'
	},
	markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 1,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 5
        }
      },
	xaxis: {
		categories: [1972, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,1972, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,1972, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,1972, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
	}
	};

	// functions

	const seeGraphType = (value) =>{
		setDataDisplayed(value)
		console.log("viewing ", value)
	}
	const seeSubGraphType = (value) =>{
		setDeviceDataDisplayed(value)
		console.log("viewing ", value)
	}

	return (
		<div className='container'>
			<Card className='card'>
				<h1 style={{textAlign:"center"}}>Device Location</h1>
				<div className='content'>
					<div className='card info'>
						<Row >
							<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
								<Row>
									<Col className='label' span={6} offset={1}>Brand</Col>
									<Col span={12} offset={1}>{brandName}</Col>
								</Row>
							</Col>
							<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
								<Row>
									<Col className='label' span={6} offset={1}>Model</Col>
									<Col span={12} offset={1}>{modelName}</Col>
								</Row>
							</Col>
							<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
								<Row>
									<Col className='label' span={6} offset={1}>OS Version</Col>
									<Col span={12} offset={1}>{osVersion}</Col>
								</Row>
							</Col>
						</Row>
					</div>
					<Card className='card'>
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
									<Col xs={{ span: 24}} lg={{ span: 4}}>
										<span className='label'>Application Version</span>
									</Col>
									<Col xs={{ span: 24}} lg={{ span: 20}}>
										<span>24</span>
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
							<Chart
								options={options}
								series={series}
								height={500}
								type="line"
							/>
						</div>
					</Card>
				</div>
			</Card>
		</div>
	)
};

export default Graphs;
