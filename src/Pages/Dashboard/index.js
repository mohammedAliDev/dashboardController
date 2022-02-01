import React, { useEffect, useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { data } from '../../utils/data';
import L from 'leaflet';
import './dashboard.css';
import { Form, Modal, Select } from 'antd';
const { Option } = Select;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Dashboard = () => {
	const position = [32.962171, -96.710217];
	const [counts, setCounts] = useState(0);

	const option1List = [
		'Application version',
		'Device RSRP',
		'Device RSRQ',
		'Device CQI',
		'Device SINR',
		'Device Tasks',
		'Device CPU',
		'Device Energy',
	];

	const option2List = ['Application Throughput', 'Application RTT'];
	const initalState = {
		visible: false,
		enableOption2Dropdown: false,
		selectedValue: '',
		selectedApplicationData: undefined,
	};
	const [popupData, setPopupData] = useState(initalState);

	// useEffect(() => {
	// 	getCounts();
	// 	console.log(counts);
	// }, [counts]);

	// const getCounts = () => {
	// 	if (counts !== data.length) {
	// 		setInterval(() => {
	// 			setCounts(counts + 1);
	// 		}, 4000);
	// 	}
	// };

	const handleChange = (value) =>
		setPopupData(
			value === 'Application version'
				? { ...popupData, enableOption2Dropdown: true, selectedValue: '' }
				: { ...popupData, enableOption2Dropdown: false, selectedValue: value },
		);
	const handleSubmit = () => {};

	return (
		<>
			<Modal
				title={`Application Data`}
				visible={popupData.visible}
				onOk={handleSubmit}
				okButtonProps={{
					disabled: !popupData.selectedValue,
				}}
				okText='Submit'
				onCancel={() => setPopupData(initalState)}
			>
				<Form.Item
					label='Select Option1'
					name='option1'
					rules={[
						{
							required: true,
						},
					]}
				>
					<Select placeholder='Select From Option1' onChange={handleChange}>
						{option1List.map((item, ix) => (
							<Option value={item} key={item + ix}>
								{item}
							</Option>
						))}
					</Select>
				</Form.Item>
				{popupData.enableOption2Dropdown && (
					<Form.Item
						label='Select Option2'
						name='option2'
						rules={[
							{
								required: true,
							},
						]}
					>
						<Select
							placeholder='Select From Option2'
							onChange={(value) =>
								setPopupData({ ...popupData, selectedValue: value })
							}
						>
							{option2List.map((item, ix) => (
								<Option value={item} key={item + ix}>
									{item}
								</Option>
							))}
						</Select>
					</Form.Item>
				)}
			</Modal>
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
					<Marker
						position={[
							data[counts]['Latitude of Connected Radio'],
							data[counts]['Longitude of Connected Radio'],
						]}
						onClick={(e) => {
							e.target.closePopup();
							setPopupData({
								...popupData,
								visible: !popupData.visible,
								selectedApplicationData: data[counts],
							});
						}}
					/>
				</Map>
			</div>
		</>
	);
};

export default Dashboard;
