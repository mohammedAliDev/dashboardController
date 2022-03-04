import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	MapContainer,
	TileLayer,
	Circle,
	useMap,
	useMapEvents,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useDebouncedCallback } from 'use-debounce';
import 'react-leaflet-fullscreen/dist/styles.css';
import { FullscreenControl } from 'react-leaflet-fullscreen';

const MobilityMap = () => {
	const [mobilityData, setMobilityData] = useState([]);
	const [show, setShow] = useState(false);
	const position = [24.0583, 84.0662];

	const handleFetchData = (boundaries) => {
		var apidata = {
			attributes: [
				// 'id',
				'timestamp',
				// 'timezone',
				'longitude',
				'latitude',
				'location',
				// 'device',
				// 'brand',
				// 'model',
				// 'plmnID',
				// 'networkType',
				// 'pci',
				// 'tac',
				// 'bandInfo',
				// 'bandwidth',
				// 'rsrp',
				// 'rsrq',
				// 'rssi',
				// 'cqi',
				// 'sinr',
				// 'throughput',
				// 'rtt',
				// 'deviceTaskTotal',
				// 'deviceApplicationTask',
				// 'deviceCPUUtilizationTotal',
				// 'deviceCPUUtlizationApplication',
				// 'timingAdvance',
				// 'applicationId',
				// 'userId',
				// 'pluginId',
			],
			filters: [
				{
					key: 'longitude',
					Op: 'lt',
					value: boundaries._northEast.lng,
				},
				{
					key: 'latitude',
					Op: 'lt',
					value: boundaries._northEast.lat,
				},
				{
					key: 'longitude',
					Op: 'gt',
					value: boundaries._southWest.lng,
				},
				{
					key: 'latitude',
					Op: 'gt',
					value: boundaries._southWest.lat,
				},
				{
					key: 'timestamp',
					Op: 'gt',
					value: '2022-03-01T02:30:00.000Z',
				},
				{
					key: 'timestamp',
					Op: 'lt',
					value: '2022-03-01T06:30:00.000Z',
				},
			],
			limit: 10000,
			orderBy: ['timestamp', 'DESC'],
		};

		axios
			.post('/apm-plugin/dashboard', apidata)
			.then((res) => {
				if (res.data.Status === 'success') {
					setMobilityData(res.data.Data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<MapContainer
				style={{ height: '224px' }}
				center={[position[0], position[1]]}
				zoom={8}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<BoundaryBound
					handleFetchData={handleFetchData}
					mobilityData={mobilityData}
				/>
				<FullscreenControl />
			</MapContainer>
		</>
	);
};

const BoundaryBound = ({ handleFetchData, mobilityData }) => {
	const map = useMap();
	const debounced = useDebouncedCallback((updatedBoundary) => {
		handleFetchData(updatedBoundary);
	}, 1500);

	useMapEvents({
		zoom: () => {
			debounced(map.getBounds());
		},
		drag: () => {
			debounced(map.getBounds());
		},
	});

	useEffect(() => {
		handleFetchData(map.getBounds());
	}, []);

	return (
		<MarkerClusterGroup disableClusteringAtZoom={12}>
			{mobilityData?.map((item) => (
				<Circle
					center={[item?.latitude, item?.longitude]}
					color='blue'
					fillColor='blue'
					radius={0.1}
				/>
			))
		}
		</MarkerClusterGroup>
	);
};

export default MobilityMap;
