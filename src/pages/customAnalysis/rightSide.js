import React,{Component} from 'react';
import {List} from 'antd';
import './rightSide.css';

class rightSide extends Component{
    data=[
        'XXX图表',
        'XXX图表',
        'XXX图表',
        'XXX图表',
        'XXX图表',
        'XXX图表',
    ]
    len=this.data.length
    render(){
        return(
            <div className="rightContainer">
                <h3 style={{ margin: '16px 0' }}>图表列表</h3>
                <List
                size="large"
                header="已启用图表"
                footer={`共计${this.len}个图表`}
                bordered
                dataSource={this.data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default rightSide;