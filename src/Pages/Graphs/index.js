import React, { useState } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import ScatterPlot from '../../Components/Charts/ScatterPlot';

const Dashboard1 = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className='pageDashBoard'>
				<div className={`SidebarArea ${open ? 'visibleBar' : ''}`}>
					<Sidebar open={open} setOpen={setOpen} />
				</div>
				<div className='main_wrapper'>
					<Header title='Application Device Details Connected to Cellular Sites' />
					<div className='wrapperArea area_1'>
						
					</div>
					<div className='wrapperArea area_2'>
						
					</div>
					<div className='wrapperArea area_3'>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard1;
