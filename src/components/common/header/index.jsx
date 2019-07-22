/*
 * @Author: Ifer 
 * @Date: 2019-07-22 01:00:37 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 10:34:35
 */
import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

import oCss from "./style.scss";


export default class PHeader extends Component {
    constructor() {
        super();
    }
    handleMenuClick = (item) => {
        this.setState({
        });
    }
    render() {
        return (
            <Header className="header">
                <div className={oCss.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[location.hash.split("/")[1] || "home"]}
                    style={{ lineHeight: "64px" }}
                    onClick={(item) => this.handleMenuClick(item)}
                >
                    <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                    <Menu.Item key="movie"><Link to="/movie">电影</Link></Menu.Item>
                    <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}