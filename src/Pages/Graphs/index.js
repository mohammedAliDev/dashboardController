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
					{/* <LineChart 
						kpiList={['rsrp']}
						chartTitle = 'CDF Plot for RSRQ'
					></LineChart> */}
					<div className='col-12 device_info_bar'>
						<div className='info-chip'>
							<span className='label-name'>Network Technology:</span>
							<span className='info'>4G</span>
						</div>
						<div className='info-chip'>
							<span className='label-name'>Network Name:</span>
							<span className='info'>T-Mobile</span>
						</div>
						<div className='info-chip'>
							<span className='label-name'>Device Brand:</span>
							<span className='info'>Samsung</span>
						</div>
						<div className='info-chip'>
							<span className='label-name'>Device OS Version:</span>
							<span className='info'>Android 10.0</span>
						</div>
						<div className='info-chip'>
							<span className='label-name'>Application Version:</span>
							<span className='info'>v2.0.2</span>
						</div>
					</div>
					<div className='graph-category-bar'>
						<div className='graph-category'>
							<span>Throughput</span>
						</div>
						<div className='graph-category'>
							<span>Throughput</span>
						</div>
						<div className='graph-category'>
							<span>Throughput</span>
						</div>
					</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard1;
