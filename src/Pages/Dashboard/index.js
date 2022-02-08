import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import { data } from '../../utils/data';
import L from 'leaflet';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import { getRequiredSVGPinByCategory } from '../../utils';
import { Select } from 'antd';
import _ from 'lodash';
const { Option } = Select;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('../../Assets/Icons/celltower1.png'),
	iconUrl: require('../../Assets/Icons/celltower1.png'),
	shadowUrl: undefined,
	iconSize: [35],
	shadowAnchor: [9, 46],
});

const data1 = [
	{
		'Longitude of Connected Radio': -96.710217,
		'Latitude of Connected Radio': 32.962171,
		Place: 'Richardson Texas 75081',
		'Event Technology': 'LTE',
		'LTE KPI PCell Serving PCI': 163,
		'LTE KPI PCell Serving Band': 'Band 41',
		'LTE KPI PCell Serving EARFCN(DL)': 40290,
		'LTE KPI PCell Serving BandWidth(DL)': 20,
		'LTE KPI PCell Serving RSRP[dBm]': -83.46,
		'LTE KPI PCell Serving RSRQ[dB]': -7.96,
		'LTE KPI PCell Serving RSSI[dBm]': -55.5,
		'LTE KPI PCell CQI ': 15,
		'LTE KPI PCell SINR[dB]': 30,
		'Throughput (Kbps)': 6210.0752,
		'RTT (ms)': 52,
		'Application Device Task Total': 793,
		'Application Device Application Task': 2,
		'Application Device CPU Utilization Total': 800,
		'Application Device CPU Utlization Application': 93,
		'Application Device CPU Total Memory Usage': null,
		'Application Device CPU Memory Usage by Application': null,
	},
	{
		'Longitude of Connected Radio': -97.710217,
		'Latitude of Connected Radio': 36.962172,
		Place: 'DT',
		'Event Technology': 'LTE',
		'LTE KPI PCell Serving PCI': 163,
		'LTE KPI PCell Serving Band': 'Band 41',
		'LTE KPI PCell Serving EARFCN(DL)': 40290,
		'LTE KPI PCell Serving BandWidth(DL)': 20,
		'LTE KPI PCell Serving RSRP[dBm]': -83.14,
		'LTE KPI PCell Serving RSRQ[dB]': -7.9,
		'LTE KPI PCell Serving RSSI[dBm]': -55.22,
		'LTE KPI PCell CQI ': 15,
		'LTE KPI PCell SINR[dB]': 30,
		'Throughput (Kbps)': 7804878.049,
		'RTT (ms)': 48,
		'Application Device Task Total': 794,
		'Application Device Application Task': 2,
		'Application Device CPU Utilization Total': 800,
		'Application Device CPU Utlization Application': 85,
		'Application Device CPU Total Memory Usage': null,
		'Application Device CPU Memory Usage by Application': null,
	},
	{
		'Longitude of Connected Radio': -96.710217,
		'Latitude of Connected Radio': 32.962171,
		Place: 'DT',
		'Event Technology': 'LTE',
		'LTE KPI PCell Serving PCI': 163,
		'LTE KPI PCell Serving Band': 'Band 41',
		'LTE KPI PCell Serving EARFCN(DL)': 40290,
		'LTE KPI PCell Serving BandWidth(DL)': 20,
		'LTE KPI PCell Serving RSRP[dBm]': -82.87,
		'LTE KPI PCell Serving RSRQ[dB]': -7.92,
		'LTE KPI PCell Serving RSSI[dBm]': -54.26,
		'LTE KPI PCell CQI ': 15,
		'LTE KPI PCell SINR[dB]': 30,
		'Throughput (Kbps)': 1269841.27,
		'RTT (ms)': 41,
		'Application Device Task Total': 794,
		'Application Device Application Task': 3,
		'Application Device CPU Utilization Total': 800,
		'Application Device CPU Utlization Application': 48,
		'Application Device CPU Total Memory Usage': null,
		'Application Device CPU Memory Usage by Application': null,
	},
	{
		'Longitude of Connected Radio': -94.710218,
		'Latitude of Connected Radio': 31.962174,
		Place: 'DT',
		'Event Technology': 'LTE',
		'LTE KPI PCell Serving PCI': 163,
		'LTE KPI PCell Serving Band': 'Band 41',
		'LTE KPI PCell Serving EARFCN(DL)': 40290,
		'LTE KPI PCell Serving BandWidth(DL)': 20,
		'LTE KPI PCell Serving RSRP[dBm]': -82.67,
		'LTE KPI PCell Serving RSRQ[dB]': -7.91,
		'LTE KPI PCell Serving RSSI[dBm]': -54.4,
		'LTE KPI PCell CQI ': 15,
		'LTE KPI PCell SINR[dB]': 30,
		'Throughput (Kbps)': 5079365.079,
		'RTT (ms)': 58,
		'Application Device Task Total': 796,
		'Application Device Application Task': 3,
		'Application Device CPU Utilization Total': 800,
		'Application Device CPU Utlization Application': 43,
		'Application Device CPU Total Memory Usage': null,
		'Application Device CPU Memory Usage by Application': null,
	},
];

const Dashboard = () => {
	const position = [32.962171, -96.710217];
	const [counts, setCounts] = useState(0);
	const [deviceLocations, setDeviceLocations] = useState([]);
	const [view, setView] = useState('live');
	const navigate = useNavigate();
	const { Option } = Select;

	useEffect(() => {
		var arr = [];
		data.forEach((obj) => {
			var result = checkObject(obj, arr);
			if (!result) {
				arr.push({
					'Longitude of Connected Radio': obj['Longitude of Connected Radio'],
					'Latitude of Connected Radio': obj['Latitude of Connected Radio'],
				});
			}
		});
		setDeviceLocations(arr);
	}, []);

	useEffect(() => {
		console.log(deviceLocations);
	}, [deviceLocations]);

	const checkObject = (obj, arr) => {
		const result = arr.filter(
			(d) =>
				d['Longitude of Connected Radio'] ===
					obj['Longitude of Connected Radio'] &&
				d['Latitude of Connected Radio'] === obj['Latitude of Connected Radio'],
		);
		return Boolean(result.length);
	};
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
					{deviceLocations.slice(0, 2000).map((item) => (
						<Marker
							position={[
								item['Latitude of Connected Radio'],
								item['Longitude of Connected Radio'],
							]}
							// icon={getRequiredSVGPinByCategory({ fill: 'blue' })}
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
				</Map>
			</div>
		</>
	);
};

export default Dashboard;
