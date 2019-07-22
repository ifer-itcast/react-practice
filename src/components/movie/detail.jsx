import React, { Component } from 'react';
import oCss from './style.scss';

export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            detailData: {}
        };
    }
    componentWillMount() {
        this.getDetail();
    }
    getDetail = async () => {
        const {id} = this.props.match.params;
        const res = await this.$http(`${this.baseURL}/v2/movie/subject/${id}?apikey=${this.apikey}`);
        const data = await res.json();
        this.setState({detailData: data});
    }
    render() {
        const {title, images,summary} = this.state.detailData;
        return (
            <div className= {oCss.detail}>
                <h1 className={oCss.title}>{title}</h1>
                <div className={oCss.imgWrap}>
                    <img src={images && images.large} alt=""/>
                </div>
                <div className={oCss.con}>
                    <p>{summary}</p>
                </div>
            </div>
        );
    }
}