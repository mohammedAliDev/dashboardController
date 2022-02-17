import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { data } from '../../utils/data';
import L from 'leaflet';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { Select } from 'antd';
import _ from 'lodash';
const { Option } = Select;

var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: undefined,
		iconSize: [35],
		shadowAnchor: [9, 46],
	},
});

var icon1 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/01.png'),
});
var icon2 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/02.png'),
});
var icon3 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/03.png'),
});
var icon4 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/04.png'),
});
var icon5 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/05.png'),
});
var icon6 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/06.png'),
});
var icon7 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/06.png'),
});
var icon8 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/06.png'),
});
var icon9 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/06.png'),
});
var icon10 = new LeafIcon({
	iconUrl: require('../../Assets/Icons/10_Location/06.png'),
});

const Dashboard = () => {
	const position = [32.962171, -96.710217];
	const [deviceLocations, setDeviceLocations] = useState([]);
	const icons = [
		icon1,
		icon2,
		icon3,
		icon4,
		icon5,
		icon6,
		icon7,
		icon8,
		icon9,
		icon10,
	];
	const [view, setView] = useState('live');
	const navigate = useNavigate();
	const { Option } = Select;

	const checkObject = () => {
		var arr = [];
		const unique = [
			...new Set(data.map((item) => item['Longitude of Connected Radio'])),
			...new Set(data.map((item) => item['Latitude of Connected Radio'])),
		];

		for (var i = 0; i < unique.length / 2; i++) {
			arr.push({
				'Longitude of Connected Radio': unique[i],
				'Latitude of Connected Radio': unique[unique.length / 2 + i],
				markerIcon: icons[i],
			});
		}
		setDeviceLocations(arr);
	};

	useEffect(() => {
		checkObject();
	}, []);

	const handleChange = (value) => {
		setView(value);
	};

	return (
		<>
			<div>
				<Row className='content'>
					<Col xs={{ span: 16 }} lg={{ span: 16 }}>
						<h4>Geo Map View</h4>
					</Col>
					<Col xs={{ span: 8 }} lg={{ span: 8 }}>
						<Select
							defaultValue='live'
							style={{ width: '100%' }}
							onChange={handleChange}
						>
							<Option value='mobility'>Mobility</Option>
							<Option value='live'>Live</Option>
						</Select>
					</Col>
				</Row>
				<Button onClick={() => checkObject()}>Click here</Button>
				<MapContainer
					style={{ height: '100vh' }}
					center={[position[0], position[1]]}
					zoom={6}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					{deviceLocations?.map((item) => (
						<Marker
							position={[
								item['Latitude of Connected Radio'],
								item['Longitude of Connected Radio'],
							]}
							icon={item?.markerIcon}
							onClick={(e) => {
								navigate('/device-list', { state: { view: view } });
								// navigate('/graphs');
							}}
							onMouseOver={(e) => {
								e.target.openPopup();
							}}
							onMouseOut={(e) => {
								e.target.closePopup();
							}}
						>
							<Popup>
								<div>Latitude: {item['Latitude of Connected Radio']}</div>
								<div>
									Longitude:
									{item['Longitude of Connected Radio']}
								</div>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</>
	);
};

export default Dashboard;
