import React from 'react';
import './style.scss';
import Logo from '../../Assets/Icons/logo.svg';
import HomeIcon from '../../Assets/Icons/homeIcon.svg';
import UploadCloud from '../../Assets/Icons/upload-cloud.svg';
import BarChart from '../../Assets/Icons/bar-chart.svg';
import Notify from '../../Assets/Icons/notify.svg';
import XOctagon from '../../Assets/Icons/xOctagon.svg';
import Delete from '../../Assets/Icons/delete.svg';
import NotifictaionBell from '../../Assets/Icons/notifictaionBell.svg';
import HelpCircle from '../../Assets/Icons/help-circle.svg';
import Avtar from '../../Assets/Icons/Avtar.svg';
import { ReactComponent as ArrowSidebar } from '../../Assets/Icons/arrowSidebar.svg';

const Sidebar = ({ open, setOpen }) => {
	return (
		<>
			<div className={`mainSideArea`}>
				<div className='logoArea'>
					<a href='/'>
						<img alt='' src={Logo} />
					</a>
				</div>
				<div className='menuArea'>
					<ul className='sidebarMenu marginBottom'>
						<li className='active'>
							<a href='/'>
								<img alt='' src={HomeIcon} />{' '}
								<span className='menuName'>Dummy </span>
							</a>
						</li>
						<li>
							<a href='/'>
								<img alt='' src={UploadCloud} />{' '}
								<span className='menuName'>Dummy</span>
							</a>
						</li>
						<li>
							<a href='/'>
								<img alt='' src={BarChart} />{' '}
								<span className='menuName'>Dummy</span>
							</a>
						</li>
						<li>
							<a href='/'>
								<img alt='' src={Notify} />{' '}
								<span className='menuName'>Dummy</span>
							</a>
						</li>
						<li>
							<a href='/'>
								<img alt='' src={XOctagon} />{' '}
								<span className='menuName'>Dummy</span>
							</a>
						</li>
						<li>
							<a href='/'>
								<img alt='' src={Delete} />{' '}
								<span className='menuName'>Dummy</span>
							</a>
						</li>
					</ul>
				</div>
				<div className='userArea'>
					<ul className='userMenu'>
						<li>
							<a href='/'>
								<img alt='' src={NotifictaionBell} /> <span>02</span>
							</a>
						</li>
						<li>
							<a href='/'>
								<img alt='' src={HelpCircle} />
							</a>
						</li>
						<li className='avtarMenu'>
							<a href='/'>
								<img alt='' src={Avtar} />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<ArrowSidebar
				className={`arrowSidebar ${open ? 'open' : ''}`}
				width='35px'
				height='45px'
				onClick={() => setOpen(!open)}
			/>
		</>
	);
};

export default Sidebar;
