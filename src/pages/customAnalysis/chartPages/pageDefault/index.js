import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';

class page1_1_1 extends Component{
    render(){
        return (
            <div>
                <Row gutter={16}>
                    <Col span={17}>
                        <Middle />
                    </Col>
                    <Col span={7}>
                        <Right />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default page1_1_1;
