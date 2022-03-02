import React, { useState } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import ScatterPlot from '../../Components/Charts/ScatterPlot';
import LineChart from '../../Components/Charts/LineChart';
import './graphs.css'

const Dashboard1 = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className='pageDashBoard'>
				<div className={`SidebarArea ${open ? 'visibleBar' : ''}`}>
					<Sidebar open={open} setOpen={setOpen} />
				</div>
				<div className='main_wrapper'>
					<Header title='Application Device Details Connected to Cellular Sites'/>
					<div className='underline'></div>
					<div className='wrapperArea1'>
					<LineChart kpiList={['rsrp']}></LineChart>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard1;
