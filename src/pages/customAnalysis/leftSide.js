import React,{Component} from 'react';
import {List} from 'antd';
import './leftSide.css';

class leftSide extends Component{
    data=[
        {
            type:'基本图表1',
            url:'www.baidu.com'
        },
        {
            type:'基本图表2',
            url:'www.baidu.com'
        },
        {
            type:'基本图表3',
            url:'www.baidu.com'
        },
        {
            type:'基本图表4',
            url:'www.baidu.com'
        },
        {
            type:'基本图表5',
            url:'www.baidu.com'
        },

    ]
    render(){
        return (
            <div className="leftContainer">
                <h3 style={{ margin: '16px 0' }}>图表列表</h3>
                <List
                size="large"
                header={<div>已启用图表</div>}
                footer={`共计${this.data.length}个图表`}
                bordered
                dataSource={this.data}
                renderItem={item => (<List.Item><a href={item.url}>{item.type}</a></List.Item>)}
                />
            </div>
        );
    }
}
export default leftSide;