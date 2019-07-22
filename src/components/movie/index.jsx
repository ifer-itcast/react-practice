/*
 * @Author: Ifer 
 * @Date: 2019-07-22 01:50:26 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 09:35:26
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Movie extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff', marginTop: 24 }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1"><Icon type="pie-chart" />option1</Menu.Item>
                        <Menu.Item key="2"><Icon type="user" />option2</Menu.Item>
                        <Menu.Item key="3"><Icon type="video-camera" />option3</Menu.Item>
                        <Menu.Item key="4"><Icon type="cloud-o" />option4</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px 24px 0' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}