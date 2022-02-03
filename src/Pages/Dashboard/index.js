import React, { useState } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import { data } from '../../utils/data';
import L from 'leaflet';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { Row,Col} from 'antd';
import { getRequiredSVGPinByCategory } from '../../utils';
import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
}

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('../../Assets/Icons/location.png'),
	iconUrl: require('../../Assets/Icons/location.png'),
	// iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	// iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
	iconSize: [35],
	shadowAnchor: [9, 46],
});

const Dashboard = () => {
	const position = [32.962171, -96.710217];
	const [counts, setCounts] = useState(0);
	const [view,setView] = useState('live');
	const navigate = useNavigate();
	const { Option } = Select;
	const handleChange = (value) => {
		setView(value);
	}
	return (
		<>
			<div>
				<Row className='content' >
					<Col xs={{ span: 12}} lg={{ span: 12}}>
						<h4>Geo Map View</h4>
					</Col>
					<Col xs={{ span: 12}} lg={{ span: 12}}>
						<Select defaultValue="live" style={{ width: '100%' }} onChange={handleChange}>
							<Option value="mobility">Mobility</Option>
							<Option value="live">Live</Option>
						</Select>
					</Col>
				</Row>
					
				<Map
					style={{ height: '100vh' }}
					center={[
						data[counts]['Latitude of Connected Radio'],
						data[counts]['Longitude of Connected Radio'],
					]}
					zoom={6}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					{[1, 2, 3, 4].map((item) => (
						<Marker
							position={[
								data[counts]['Latitude of Connected Radio'] + item,
								data[counts]['Longitude of Connected Radio'] + item,
							]}
							// icon={getRequiredSVGPinByCategory({ fill: 'blue' })}
							onClick={(e) => {
								navigate('/device-list',{data:'hello'});
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
								<div>
									Latitude: {data[counts]['Latitude of Connected Radio'] + item}
								</div>
								<div>
									Longitude:
									{data[counts]['Longitude of Connected Radio'] + item}
								</div>
							</Popup>
						</Marker>
					))}
				</Map>
			</div>
		</>
	);
};

export default Dashboard;
