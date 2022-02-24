import React from 'react';
import { BrowserRouter, Routes as R, Route } from 'react-router-dom';
import Billing from '../Pages/Billing';
import Dashboard from '../Pages/Dashboard';
import Dashboard1 from '../Pages/Dashboard1';
import DeviceList from '../Pages/DeviceList';
import Graphs from '../Pages/Graphs';

const Routes = () => {
	return (
		<BrowserRouter>
			<R>
				<Route path='/' element={<Dashboard1 />} exact />
				<Route path='/graphs' element={<Graphs />} exact />
				<Route path='/device-list' element={<DeviceList />} exact />
				<Route path='/dashboard1' element={<Dashboard />} exact />
				<Route path='/billing' element={<Billing />} exact />
			</R>
		</BrowserRouter>
	);
};

export default Routes;
