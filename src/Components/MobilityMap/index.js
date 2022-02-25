import React, { useEffect, useState } from 'react';
import { Marker } from 'react-leaflet';
import { MapContainer, TileLayer, Polyline, Circle } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { data } from './data.js';

const MobilityMap = () => {
	const position = [32.960755, -96.716101];
	// const [polyline, setPolyline] = useState([]);

	// useEffect(() => {
	// 	console.time('hello');
	// 	var arr = [];
	// 	for (var i = 0; i < 200000; i++) {
	// 		arr.push([
	// 			+generateRandomCordinates(24, 40, 5),
	// 			+-generateRandomCordinates(75, 104, 4),
	// 		]);
	// 	}
	// 	console.log(arr);
	// 	setPolyline(arr);
	// 	console.timeEnd('hello');
	// }, []);

	// function generateRandomCordinates(min, max, precision) {
	// 	return (Math.random() * (max - min) + min).toPrecision(precision);
	// }

	return (
		<>
			<MapContainer
				style={{ height: '224px' }}
				center={[position[0], position[1]]}
				zoom={1}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<MarkerClusterGroup>
					{data?.slice(0, 100).map((item) => (
						<Circle center={item} color='blue' fillColor='blue' radius={0.1} />
					))}
				</MarkerClusterGroup>
			</MapContainer>
		</>
	);
};

export default MobilityMap;
