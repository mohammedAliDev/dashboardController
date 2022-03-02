import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useSupercluster from 'use-supercluster';
import Map, { Marker } from 'react-map-gl';
import './mobilitymap1.scss';
import useSwr from 'swr';

const accessToken = `pk.eyJ1IjoiYWxva3dlYnZpbGxlIiwiYSI6ImNrenFyank1NzN1cmgyd25ydnlyeDE0ZWgifQ.nQaSQvSMG8GBEJggq1rCeQ`;
const fetcher = (...args) => fetch(...args).then((response) => response.json());

const MobilityMap1 = () => {
	const [rawData, setRawData] = useState([]);
	const [viewport, setViewport] = useState({
		latitude: 52.6376,
		longitude: -1.135171,
		zoom: 12,
	});
	const mapRef = useRef();

	useEffect(() => {
		console.log(viewport);
	}, [viewport]);

	const url =
		'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10';
	const { data, error } = useSwr(url, { fetcher });
	const crimes = data && !error ? data.slice(0, 2000) : [];

	const points = crimes?.map((crime) => ({
		type: 'Feature',
		properties: {
			cluster: false,
			crimeId: crime.id,
			category: crime.category,
		},
		geometry: {
			type: 'Point',
			coordinates: [
				parseFloat(crime.location.longitude),
				parseFloat(crime.location.latitude),
			],
		},
	}));

	const bounds = mapRef.current
		? mapRef.current?.getMap()?.getBounds()?.toArray().flat()
		: null;

	const { clusters, supercluster } = useSupercluster({
		points,
		bounds,
		zoom: viewport.zoom,
		options: { radius: 75, maxZoom: 20 },
	});

	const handleFetchData = (boundaries) => {
		var apidata = {
			attributes: [
				'id',
				'timestamp',
				'timezone',
				'longitude',
				'latitude',
				'location',
				'device',
				'brand',
				'model',
				'plmnID',
				'networkType',
				'pci',
				'tac',
				'bandInfo',
				'bandwidth',
				'rsrp',
				'rsrq',
				'rssi',
				'cqi',
				'sinr',
				'throughput',
				'rtt',
				'deviceTaskTotal',
				'deviceApplicationTask',
				'deviceCPUUtilizationTotal',
				'deviceCPUUtlizationApplication',
				'timingAdvance',
				'applicationId',
				'userId',
				'pluginId',
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
			],
			limit: 6000,
			orderBy: ['timestamp', 'DESC'],
		};

		axios
			.post('/apm-plugin/dashboard', apidata)
			.then((res) => {
				if (res.data.Status === 'success') {
					setRawData(res.data.Data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Map
				style={{ height: '224px' }}
				// {...viewport}
				// maxZoom={20}
				mapboxApiAccessToken={`pk.eyJ1IjoiYWxva3dlYnZpbGxlIiwiYSI6ImNrenFyank1NzN1cmgyd25ydnlyeDE0ZWgifQ.nQaSQvSMG8GBEJggq1rCeQ`}
				// onViewportChange={(newViewport) => {
				// 	setViewport({ ...newViewport });
				// }}
				// ref={mapRef}
				mapStyle='mapbox://styles/mapbox/streets-v9'
			>
				{/* {clusters.map((cluster) => {
					const [longitude, latitude] = cluster.geometry.coordinates;
					const { cluster: isCluster, point_count: pointCount } =
						cluster.properties;

					if (isCluster) {
						return (
							<Marker
								key={`cluster-${cluster.id}`}
								latitude={latitude}
								longitude={longitude}
							>
								<div
									className='cluster-marker'
									style={{
										width: `${10 + (pointCount / points.length) * 20}px`,
										height: `${10 + (pointCount / points.length) * 20}px`,
									}}
									onClick={() => {
										const expansionZoom = Math.min(
											supercluster.getClusterExpansionZoom(cluster.id),
											20,
										);

										setViewport({
											...viewport,
											latitude,
											longitude,
											zoom: expansionZoom,
											transitionInterpolator: new FlyToInterpolator({
												speed: 2,
											}),
											transitionDuration: 'auto',
										});
									}}
								>
									{pointCount}
								</div>
							</Marker>
						);
					}

					return (
						<Marker
							key={`crime-${cluster.properties.crimeId}`}
							latitude={latitude}
							longitude={longitude}
						>
							<button className='crime-marker'>
								<img src='/02.png' alt="crime doesn't pay" />
							</button>
						</Marker>
					);
				})} */}
				<Marker
					// key={`crime-${cluster.properties.crimeId}`}
					latitude={viewport.latitude}
					longitude={viewport.longitude}
				>
					<button className='crime-marker'>
						<img src='/02.png' alt="crime doesn't pay" />
					</button>
				</Marker>
			</Map>
		</>
	);
};

export default MobilityMap1;
