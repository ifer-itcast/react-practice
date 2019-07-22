/*
 * @Author: Ifer 
 * @Date: 2019-07-22 00:51:49 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 09:32:11
 */
import React from 'react';
import PHeader from '@/components/common/header';
import Movie from '@/components/movie';
import PFooter from '@/components/common/footer';
import { Layout } from 'antd';
import './style.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <PHeader></PHeader>
                <Movie></Movie>
                <PFooter></PFooter>
            </Layout>
        );
    }
}