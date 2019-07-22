import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 30}}>首页的内容</div>
        );
    }
}