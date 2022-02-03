import React from "react";
import {Row,Col} from 'antd';
const DeviceInfo = (props) => {
    return (
        <div className='card info'>
			<Row >
				<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
					<Row>
						<Col className='label' span={9} offset={1}>Brand</Col>
						<Col span={13} offset={1}>{props.brand}</Col>
					</Row>
				</Col>
				<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
					<Row>
						<Col className='label' span={9} offset={1}>Model</Col>
						<Col span={13} offset={1}>{props.model}</Col>
					</Row>
				</Col>
				<Col xs={{ span: 24}} md={{span:12}} lg={{ span: 8}}>
					<Row>
						<Col className='label' span={9} offset={1}>OS Version</Col>
						<Col span={13} offset={1}>{props.os}</Col>
					</Row>
				</Col>
			</Row>
		</div>
    )
}
export default DeviceInfo;