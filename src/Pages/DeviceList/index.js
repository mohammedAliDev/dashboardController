import React, { useState } from 'react';
import './deviceList.css';
import { Card, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import iOS from './img/ios.svg';
import android from './img/android.svg';
const DeviceList = (props) => {
	
	const navigate = useNavigate();
	const list = [
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
		{
			name:'ABC',
			OS:'android',
			network:'5G'
		},
		{
			name:'XYZ',
			OS:'android',
			network:'4G'
		},
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
		{
			name:'XuZ',
			OS:'android',
			network:'5G'
		},
		{
			name:'XYZ01',
			OS:'android',
			network:'4G'
		},
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
		{
			name:'XYZ',
			OS:'ios',
			network:'4G'
		},
	];
	const location = useLocation();
	// functions
	console.log(location.state);
	return (
		<div>
			<div className='content'>
				<Card className='card'>
					<h1>Radio Site Info</h1>
				</Card>
			</div>
			<div className='content'>
				<Row justify='center'>
					<Col span={24}>
						<Card className='card'>
							<div style={{textAlign:'center'}}>
								<h1>Devices</h1>
							</div>
							<div>
								<Row >
									{list.map((item)=>{
										return(
											<Col style={{paddingLeft:20, margin:'5px 0px'}} span={8}>
												<div style={{cursor:'pointer'}}  onClick={(e)=>{navigate('/graphs')}}>
													{item.OS === 'ios'?
														<img src={iOS} height={22}/>:
														<img src={android} height={22}/>}
													&nbsp;&nbsp;{item.name}
												</div>
											</Col>
										)
									})}
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default DeviceList;
