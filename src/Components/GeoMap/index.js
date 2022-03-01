import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { data } from '../../utils/data';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: undefined,
		iconSize: [35],
		shadowAnchor: [9, 46],
	},
});

var [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10] = [
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/01.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/02.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/03.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/04.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/05.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/06.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/07.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/08.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/09.png'),
	}),
	new LeafIcon({
		iconUrl: require('../../Assets/Icons/10_Location/010.png'),
	}),
];

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
	const navigate = useNavigate();

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

	return (
		<>
			<MapContainer
				preferCanvas={true}
				style={{ height: '70vh' }}
				center={[position[0], position[1]]}
				zoom={5}
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
							navigate('/device-list', { state: { view: 'live' } });
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
		</>
	);
};

export default Dashboard;
