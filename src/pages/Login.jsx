import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';
import SocialLoginButton from '../components/Buttons/SocialLoginButton';

function Login() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(process.env.API_URL);
        console.log('Received values of form: ', values);
    };


    return (
        <div className='login-main'>
            <h1 className='page-title'>Login</h1>
            <div className='login-form-holder'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                type : 'email',
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <Divider />
                <SocialLoginButton
                    provider='google'
                />
            </div>
        </div>
    )
}

export default Login