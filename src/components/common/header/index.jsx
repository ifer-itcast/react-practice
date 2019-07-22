/*
 * @Author: Ifer 
 * @Date: 2019-07-22 01:00:37 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 09:20:00
 */
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

import oCss from './style.scss';


export default class PHeader extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Header className="header">
                <div className={oCss.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">首页</Menu.Item>
                    <Menu.Item key="movie">电影</Menu.Item>
                    <Menu.Item key="about">关于</Menu.Item>
                </Menu>
            </Header>
        );
    }
}