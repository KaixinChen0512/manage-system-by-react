import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';

class page1_1_1 extends Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            }
        }
    }
    changeOption=(newOption)=>{
        this.setState({
            option: Object.assign({},this.state.option,newOption)
        })
    }
    render(){
        return (
            <div>
                <Row gutter={16}>
                    <Col span={17}>
                        <Middle option={this.state.option} />
                    </Col>
                    <Col span={7}>
                        <Right changeOption={this.changeOption.bind(this)} />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default page1_1_1;