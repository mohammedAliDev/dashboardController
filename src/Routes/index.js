import React from 'react';
import { BrowserRouter, Routes as R, Route } from 'react-router-dom';
import Billing from '../Pages/Billing';
import Graph from '../Components/Graph';
import Dashboard from '../Pages/Dashboard';
import Dashboard1 from '../Pages/Dashboard1';
import DeviceList from '../Pages/DeviceList';
import Graphs from '../Pages/Graphs';

const Routes = () => {
	return (
		<BrowserRouter>
			<R>
				<Route path='/apm/' element={<Dashboard1 />} exact />
				<Route path='/apm/graphs' element={<Graphs />} exact />
				<Route path='/apm/graph' element={<Graph />} exact />
				<Route path='/apm/device-list' element={<DeviceList />} exact />
				<Route path='/apm/dashboard1' element={<Dashboard />} exact />
				<Route path='/apm/billing' element={<Billing />} exact />
			</R>
		</BrowserRouter>
	);
};

export default Routes;
