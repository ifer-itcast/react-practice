import React, { Component } from 'react';

export default class Detail extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        console.log(this.props.match)
        const {params} = this.props.match;
        return (
            <div>{params.type + params.pnum}</div>
        );
    }
}