import React, { useState } from 'react';
import Header from '../../../Components/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import LineChart from '../../../Components/Charts/LineChart';
import './style.css'
import DeviceInfoHeader from '../../../Components/DeviceInfoHeader';
import { useNavigate } from 'react-router-dom';

const CoverageGraph = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
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
						<div className='graph-category col-2' onClick={(e) => {navigate('/graphs/throughput')}}>
							<span>Throughput</span>
						</div>
						<div className='graph-category col-2' onClick={(e) => {navigate('/graphs/latency')}}>
							<span>Latency</span>
						</div>
						<div className='graph-category col-2' style={{backgroundColor:'#C2D9FD'}}>
							<span>Coverage</span>
						</div>
						<div className='graph-category col-2' onClick={(e) => {navigate('/graphs/analysis')}}>
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

export default CoverageGraph;
