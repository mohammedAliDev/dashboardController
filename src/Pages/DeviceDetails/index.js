import React, { useState } from 'react';
import '../Dashboard1/dashboard.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import GeoMap from '../../Components/GeoMap';
import './devicedetails.scss';
import Maximize from './../../Assets/Icons/maximize.svg';
import Minimize from './../../Assets/Icons/minimize.svg';
const DeviceDetails = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className='pageDashBoard'>
				<div className={`SidebarArea ${open ? 'visibleBar' : ''}`}>
					<Sidebar open={open} setOpen={setOpen} />
				</div>
				<div className='main_wrapper'>
					<Header title='Welcome Back, Emran' />
					<div className='wrapperArea area_1'>
						<div className='container_1'>
							<div className='row'>
								<div className='col-lg-12 col-md-12'>
									<div className='areaBox innerBoxes'>
										<img
											alt='minimize'
											className='buttonImage'
											src={Minimize}
										/>
										<img
											alt='maximize'
											className='buttonImage maximizeImg'
											src={Maximize}
										/>
										<h2 className='box_h2'>
											Application Device Details Connected to Cellular Sites
										</h2>
										<GeoMap height='70vh' />
										{/* <div className='whiteBoxInner'>
											<div className='boxInner'>
												<span className='activeClass'></span>
												<p className='row'>
													<div className='col-md-6'>
														<b>Device :</b>
													</div>
													<div className='col-md-6'>Android</div>
												</p>
												<p className='row'>
													<div className='col-md-6'>
														<b>Brand :</b>
													</div>
													<div className='col-md-6'>Motorola</div>
												</p>
											</div>
											<div className='boxInner'>
												<span className='activeClass'></span>
												<p className='row'>
													<div className='col-md-6'>
														<b>Device :</b>
													</div>
													<div className='col-md-6'>Android</div>
												</p>
												<p className='row'>
													<div className='col-md-6'>
														<b>Brand :</b>
													</div>
													<div className='col-md-6'>Motorola</div>
												</p>
											</div>
											<div className='boxInner'>
												<span className='activeClass'></span>
												<p className='row'>
													<div className='col-md-6'>
														<b>Device :</b>
													</div>
													<div className='col-md-6'>Android</div>
												</p>
												<p className='row'>
													<div className='col-md-6'>
														<b>Brand :</b>
													</div>
													<div className='col-md-6'>Motorola</div>
												</p>
											</div>
											<div className='boxInner'>
												<span className='activeClass'></span>
												<p className='row'>
													<div className='col-md-6'>
														<b>Device :</b>
													</div>
													<div className='col-md-6'>Android</div>
												</p>
												<p className='row'>
													<div className='col-md-6'>
														<b>Brand :</b>
													</div>
													<div className='col-md-6'>Motorola</div>
												</p>
											</div>
										</div> */}

										<div className='flex-container' style={{ zIndex: '9999' }}>
											<div className='ulPosition'>
												<ul className='mapUl'>
													<li>
														Verizon <span className='Verizon'></span>
													</li>
													<li>
														AT&T <span className='AT-T'></span>
													</li>
													<li>
														Mint <span className='Mint'></span>
													</li>
													<li>
														T-Mobile <span className='T-Mobile'></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeviceDetails;
