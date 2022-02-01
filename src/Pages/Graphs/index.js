import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './graphs.css';
import { Card,Row,Col, Button } from 'antd';
import 'antd/dist/antd.css';

const Graphs = () => {
	const [dataDisplayed, setDataDisplayed] = useState('applicationData');
	const [deviceDataDisplayed, setDeviceDataDisplayed] = useState('rtt');
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
	text: 'Dummy Chart',
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
			<div className='content'>
				<div className='card info'>
					<Row>
						<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
							<Row>
								<Col>Brand</Col>
								<Col>Samsung</Col>
							</Row>
						</Col>
						<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
							<Row>
								<Col>Brand</Col>
								<Col>Samsung</Col>
							</Row>
						</Col>
						<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
							<Row>
								<Col>Brand</Col>
								<Col>Samsung</Col>
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
					</div>
					{
						dataDisplayed === 'applicationData'
						?
						<div className='content'>
							<div className='divider'></div>
							<Row >
								<Col xs={{ span: 24}} lg={{ span: 4}}>
									<h4>Application Version</h4>
								</Col>
								<Col xs={{ span: 24}} lg={{ span: 20}}>
									<h4>v2.0.3</h4>
								</Col>
							</Row>
							<Row >
								<Col xs={{ span: 24}} lg={{ span: 18}}>
									<Row >
										<Button shape="round" size='small' onClick={()=>{seeSubGraphType('rtt')}} className={deviceDataDisplayed==="rtt" ? "chip-btn-sub  sel-sub" : "chip-btn-sub"}> Device RTT </Button>
										<Button shape="round" size='small' onClick={()=>{seeSubGraphType('throughput')}} className={deviceDataDisplayed==="throughput" ? "chip-btn-sub sel-sub" : "chip-btn-sub"}> Throughput </Button>
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
		</div>
	)
};

export default Graphs;
