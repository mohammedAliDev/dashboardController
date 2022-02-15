import React from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';

const MobilityMap = () => {
	const position = [51.505, -0.09];
	const polyline = [
		[24.05839424, 84.06624582],
		[24.02124991, 84.11328082],
		[24.05844054, 84.0662084],
		[24.0582642, 84.06629491],
		[24.06839424, 84.07624582],
		[24.0312493, 84.12328082],
		[24.06844054, 84.0762084],
		[24.0682642, 84.07629491],
	];
	const limeOptions = { color: 'lime' };
	return (
		<>
			<Map
				style={{ height: '175px' }}
				center={[position[0], position[1]]}
				zoom={12}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Polyline pathOptions={limeOptions} positions={polyline} />
				{/* <Polyline pathOptions={limeOptions} positions={multiPolyline} /> */}
			</Map>
		</>
	);
};

export default MobilityMap;
