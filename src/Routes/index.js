import React from 'react';
import { BrowserRouter, Routes as R, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Dashboard1 from '../Pages/Dashboard1';
import ThroughputGraph from '../Pages/Graphs/ThroughputGraph';
import LatencyGraph from '../Pages/Graphs/LatencyGraph';
import DeviceDetails from '../Pages/DeviceDetails';
import AnalysisGraph from '../Pages/Graphs/AnalysisGraph';
import CoverageGraph from '../Pages/Graphs/CoverageGraph';

const Routes = () => {
	return (
		<BrowserRouter basename='/apm'>
			<R>
				<Route path='/' element={<Dashboard1 />} exact />
				<Route path='/graphs/analysis' element={<AnalysisGraph />} exact />
				<Route path='/graphs/coverage' element={<CoverageGraph />} exact />
				<Route path='/graphs/latency' element={<LatencyGraph />} exact />
				<Route path='/graphs/throughput' element={<ThroughputGraph />} exact />
				<Route path='/dashboard1' element={<Dashboard />} exact />
				<Route path='/device-details' element={<DeviceDetails />} exact />
			</R>
		</BrowserRouter>
	);
};

export default Routes;
