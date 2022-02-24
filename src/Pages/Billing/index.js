import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './billing.css';

const Billing = (props) => {
	const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };
	const navigate = useNavigate();
	
	const location = useLocation();
	// functions
	console.log(location);
	return (
		<>
            <div className='pageDashBoard'>
				<div className={`SidebarArea ${open ? 'visibleBar' : ''}`}>
					<Sidebar open={open} setOpen={setOpen} />
				</div>
                <div className='main_wrapper'>
					<Header title="Billing"/>
                    <div className='productInfo'>
                        <span className="product-details">Product Name -</span>
                        <span className="product-details">Genius Net Plan</span>
                    </div>
                    <div className='productInfo'>
                        <span className="product-details">Product Price -</span>
                        <span className="product-details">$30000</span>
                    </div>
                    <div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onFinish();
                        }}
					>
                        <div>
                            <div className='bill-form'>
                                <Input placeholder="Username" required className='bill-input col-lg-5 m-2'/>
                                <Input placeholder="Username" required className='bill-input col-lg-5 m-2'/>
                                <Input placeholder="Username" required className='bill-input col-lg-5 m-2'/>
                                <Input placeholder="Username" required className='bill-input col-lg-5 m-2'/>
                                
                            </div>
                            <div style={{justifyContent:'flex-end', display:'flex',}}>
                                <Button
                                        type="primary"
                                        htmlType="submit"
                                        
                                    >
                                    Log in
                                </Button>
                            </div>
                        </div>
                    </form>

                        {/* <Form form={form} onFinish={onFinish}>
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                                ]}
                            >
                                <Input placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                            >
                                <Input
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item shouldUpdate>
                                {() => (
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                    }
                                >
                                    Log in
                                </Button>
                                )}
                            </Form.Item>
                        </Form> */}
                    </div>
                </div>
        </div>
        </>
        
	);
};

export default Billing;
