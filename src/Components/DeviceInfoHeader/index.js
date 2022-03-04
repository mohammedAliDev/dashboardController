import React from "react";
import './style.css';
const DeviceInfo = (props) => {
    return (
        <div>
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
						<div className='info-chip'>
							<span className='label-name'>Spectrum:</span>
							<span className='info'>Band 4</span>
						</div>
					</div>
					
					
					</div>
    )
}
export default DeviceInfo;