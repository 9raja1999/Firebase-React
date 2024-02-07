import React, { useState } from 'react';
import { auth } from '../configs/firebaseConfig'
import { signOut } from 'firebase/auth'
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const DashboardLayout = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleClickNav = (route) => {
        console.log("R", route);
        navigate(route)
    }

    const handleLogout = async () => {
        try {
            const result = signOut(auth)
            localStorage.removeItem('user')
            navigate('/auth')

        } catch (error) {
            console.error('Error', error)
        }
    }

    return (
        <Layout style={{
            minHeight: '100vh'
        }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Home',
                            onClick: () => handleClickNav('/')
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Users',
                            onClick: () => handleClickNav('/posts')
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                            onClick: () => handleClickNav('/123')
                        },
                        {
                            key: '4',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                            onClick: () => handleLogout()
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default DashboardLayout;