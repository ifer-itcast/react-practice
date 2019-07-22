/*
 * @Author: Ifer 
 * @Date: 2019-07-22 00:51:49 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 13:18:31
 */
import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PHeader from '@/components/common/header';
import Movie from '@/components/movie';
import Home from '@/components/home';
import About from '@/components/about';
import PFooter from '@/components/common/footer';

const Wrapper = (props) => <div style={{ display: 'flex', flex: 1, backgroundColor: '#fff', overflow: "hidden" }}>{props.children}</div>;

import './style.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Router>
                <Layout style={{ height: '100%' }}>
                    <PHeader></PHeader>
                    <Wrapper>
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={Home}></Route>
                        <Route path="/movie" component={Movie}></Route>
                        <Route path="/about" component={About}></Route>
                    </Wrapper>
                    <PFooter></PFooter>
                </Layout>
            </Router>
        );
    }
}
