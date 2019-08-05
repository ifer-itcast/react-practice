/*
 * @Author: Ifer 
 * @Date: 2019-07-22 01:50:26 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-08-05 16:29:46
 */
import React, { Component } from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
const { Content, Sider } = Layout;

import PContent from "./content";
import Detail from "./detail";

export default class Movie extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { path } = this.props.match;
        return (
            <Layout>
                <Sider width={200} style={{ background: "#fff", marginTop: 24 }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[location.hash.split('/')[2] || 'in_theaters']}
                        style={{ height: "100%", borderRight: 0 }}
                    >
                        <Menu.Item key="in_theaters"><Link to={`${path}/in_theaters/1`}><Icon type="pie-chart" />正在热映</Link></Menu.Item>
                        <Menu.Item key="coming_soon"><Link to={`${path}/coming_soon/1`}><Icon type="user" />即将上映</Link></Menu.Item>
                        <Menu.Item key="top250"><Link to={`${path}/top250/1`}><Icon type="video-camera" />排行榜</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: "24px 24px 0", overflow: "hidden" }}>
                    <Content
                        style={{
                            background: "#fff",
                            padding: "24px",
                            margin: 0,
                            minHeight: 280,
                            display: "flex",
                        }}
                    >
                    <Switch>
                        <Route exact path={`${path}`} render={() => <Redirect to={`${path}/in_theaters/1`} />} />
                        <Route path={`${path}/:type/detail/:id`} component={Detail} />
                        <Route path={`${path}/:type/:pnum`} component={PContent} />
                    </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}