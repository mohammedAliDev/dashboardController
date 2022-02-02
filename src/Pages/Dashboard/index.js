import React, { useState } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import { data } from '../../utils/data';
import L from 'leaflet';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { getRequiredSVGPinByCategory } from '../../utils';

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
	const navigate = useNavigate();

	return (
		<>
			<div>
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
								navigate('/graphs');
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
