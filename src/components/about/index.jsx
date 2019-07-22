import React, { Component } from 'react';

export default class About extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 30}}>关于的内容</div>
        );
    }
}