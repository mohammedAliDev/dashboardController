import React, { useState } from 'react';
import '../Dashboard1/dashboard.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import GeoMap from '../../Components/GeoMap';

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
								<div className='col-lg-8 col-md-8'>
									<div className='areaBox'>
										<p>
											Application Device Details Connected to Cellular Sites
										</p>
										<GeoMap />

										<div
											className='flex-container'
											style={{ zIndex: '99999999' }}
										>
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
