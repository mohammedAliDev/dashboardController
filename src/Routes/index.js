import React from 'react';
import { BrowserRouter, Routes as R, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Graphs from '../Pages/Graphs';

const Routes = () => {
	return (
		<BrowserRouter>
			<R>
				<Route path='/' element={<Dashboard />} exact />
				<Route path='/graphs' element={<Graphs />} exact />
			</R>
		</BrowserRouter>
	);
};

export default Routes;
