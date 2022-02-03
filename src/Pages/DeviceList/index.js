import React, { useState } from 'react';
import './deviceList.css';
import { Card, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router-dom';

const DeviceList = (props) => {
	const location = useLocation();
	// functions
	console.log(location.state);
	return (
		<div>
			<div className='content'>
				<Card className='card'>
					<h1>bgygtyvh</h1>
				</Card>
			</div>
			<div className='content'>
				<Row justify='center'>
					<Col span={24}>
						<Card className='card'>device list {location.state.data}</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default DeviceList;
