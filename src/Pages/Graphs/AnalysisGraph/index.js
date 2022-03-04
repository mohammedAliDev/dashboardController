import React, { useState } from 'react';
import Header from '../../../Components/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import LineChart from '../../../Components/Charts/LineChart';
import './style.css'
import DeviceInfoHeader from '../../../Components/DeviceInfoHeader';

const AnalysisGraph = () => {
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
					<DeviceInfoHeader></DeviceInfoHeader>
					<div className='graph-category-bar'>
						<div className='graph-category col-2'>
							<span>Throughput</span>
						</div>
						<div className='graph-category col-2'>
							<span>Latency</span>
						</div>
						<div className='graph-category col-2'>
							<span>Coverage</span>
						</div>
						<div className='graph-category col-2' style={{backgroundColor:'#C2D9FD'}}>
							<span>Analysis</span>
						</div>
					</div>
					<div className='graph-container'>
						<div className='col-lg-6 graph-tile'>
							<LineChart 
								kpiList={['rsrp']}
								chartTitle = 'CDF Plot for RSRQ'
							></LineChart>
						</div>
						<div className='col-lg-6 graph-tile'>
							<LineChart 
								kpiList={['rsrp']}
								chartTitle = 'CDF Plot for RSRQ'
							></LineChart>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnalysisGraph;
