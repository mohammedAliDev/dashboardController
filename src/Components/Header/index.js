import { Col, Row } from 'antd';
import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<>
			<div className='headerArea'>
				<div className='container_1'>
					<div className='row'>
						<div className='col-md-6'>
							<h1>Welcome Back, Emran</h1>
						</div>
						<div className='col-md-6 text-right'>
							<ul>
								<li>February 9, 2022 | Monday</li>
								<li className='selectSort'>
									<select>
										<option value=''>Sort by</option>
										<option value=''>Sort 1</option>
										<option value=''>Sort 2</option>
										<option value=''>Sort 3</option>
									</select>
								</li>
								<li>
									<a href='#'>in5G Store</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
