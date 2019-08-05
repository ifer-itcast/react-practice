import React, { Component } from "react";
import { Card, Rate, Spin, Pagination } from "antd";
const { Meta } = Card;

import oCss from './style.scss';

const Wrapper = (props) => <div className={oCss.wrapper}>{props.children}</div>;

export default class PContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inTheatersData: [],
            mType: "in_theaters",
            isLoading: true,
            pageSize: 10,
            pnum: parseInt(props.match.params.pnum), // 当前页数
            total: 0,
            loadingTip: 'Loading...'
        };
    }
    componentWillMount() {
        this.getMovieData();
    }
    componentWillReceiveProps(nextProps) {
        const { type, pnum } = nextProps.match.params;
        this.setState({
            mType: type,
            isLoading: true,
            loadingTip: 'Loading...',
            pnum: parseInt(pnum),
        }, () => {
            this.getMovieData();
        });
    }
    jumpDetail = (id) => {
        this.props.history.push(`/movie/${this.props.match.params.type}/detail/${id}`);
    }
    // 获取数据
    getMovieData = async () => {
        const { pnum, pageSize, mType } = this.state;
        const start = (pnum - 1) * pageSize;
        const res = await this.$http(`${this.baseURL}/v2/movie/${mType}?start=${start}&count=${pageSize}&apikey=${this.apikey}`);
        const data = await res.json();

        // 假如 38 条数据，第 4 页展示不全但需要展示！
        // 1 => 0 ~ 10
        // 2 => 10 ~ 20
        // 3 => 20 ~ 30
        // 4 => 30 ~ 40

        if ((pnum - 1) * pageSize > data.total) {
            this.setState({
                loadingTip: "没有那么多数据了亲~"
            });
        } else {
            this.setState({
                inTheatersData: data.subjects,
                isLoading: false,
                total: data.total
            });
        }
    }
    handlePageChange = async (pnum) => {
        const { type } = this.props.match.params;
        this.props.history.push(`/movie/${type}/${pnum}`);
    }
    render() {
        const { inTheatersData, isLoading, pageSize, pnum, total, loadingTip } = this.state;
        return (
            isLoading
                ?
                <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Spin tip={loadingTip} />
                </div>
                :
                <Wrapper>
                    <div className={oCss.list}>
                        {
                            inTheatersData.map(item => <Card
                                hoverable
                                style={{ width: 200 }}
                                cover={<img alt="example" src={item.images.small} />}
                                onClick={() => this.jumpDetail(item.id)}
                                key={item.id}
                            >
                                <Meta title={item.title} />
                                <p className={oCss.movietype}>电影类型：{item.genres.join(', ')}</p>
                                <Rate allowHalf defaultValue={item.rating.average} />
                            </Card>)
                        }
                    </div>
                    <Pagination
                        defaultCurrent={pnum}
                        total={total}
                        onChange={(page, pageSize) => this.handlePageChange(page, pageSize)}
                        pageSize={pageSize}
                    />
                </Wrapper>
        );
    }
}