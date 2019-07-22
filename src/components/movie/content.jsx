import React, { Component } from "react";
import { Card, Rate, Spin } from "antd";
const { Meta } = Card;

import oCss from './style.scss';

const Wrapper = (props) => <div className={oCss.wrapper}>{props.children}</div>;

export default class PContent extends Component {
    constructor() {
        super();
        this.state = {
            inTheatersData: [],
            mType: "in_theaters",
            isLoading: true
        };
    }
    componentWillMount() {
        this.getInTheaters(this.state.mType);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            mType: nextProps.match.params.type,
            isLoading: true
        }, () => {
            this.getInTheaters(this.state.mType);
        });
    }
    jumpDetail = () => {
        this.props.history.push('/movie/detail/1');
    }
    getInTheaters = async (mType) => {
        const res = await this.$http(`${this.baseURL}/v2/movie/${mType}?start=0&count=10&apikey=${this.apikey}`);
        const data = await res.json();
        this.setState({
            inTheatersData: data.subjects,
            isLoading: false
        });
    }
    render() {
        const { inTheatersData, isLoading } = this.state;
        return (
            isLoading
                ?
                <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Spin tip="Loading..." />
                </div>
                :
                <Wrapper>
                    {
                        inTheatersData.map(item => <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src={item.images.small} />}
                            onClick={() => this.jumpDetail()}
                            key={item.id}
                        >
                            <Meta title={item.title} />
                            <p className={oCss.movietype}>电影类型：{item.genres.join(', ')}</p>
                            <Rate allowHalf defaultValue={item.rating.average} />
                        </Card>)
                    }
                </Wrapper>
        );
    }
}