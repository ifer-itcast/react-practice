/*
 * @Author: Ifer 
 * @Date: 2019-07-22 01:50:29 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 09:03:02
 */
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default class PFooter extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        );
    }
}