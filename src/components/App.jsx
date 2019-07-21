/*
 * @Author: Ifer 
 * @Date: 2019-07-22 00:51:49 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 01:00:34
 */
import React from 'react';
import Header from '@/components/common/Header';
import Content from '@/components/common/Content';
import Footer from '@/components/common/Footer';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        );
    }
}