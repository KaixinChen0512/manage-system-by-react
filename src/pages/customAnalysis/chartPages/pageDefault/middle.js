import React,{Component} from 'react';
import {Row} from 'antd';
import './middle.css';

class chart extends Component {
    render() {
        return (
            <div>
                <Row>
                    <h1 style={{marginLeft:'35%',marginTop:'35%'}}>请先选择一个图表</h1>
                </Row>
            </div>
        )
    }
}

export default chart;