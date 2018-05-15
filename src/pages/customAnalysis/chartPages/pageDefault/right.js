import React,{Component} from 'react';
import {Tabs,Card,Icon,Form} from 'antd';
import './right.css';

const TabPane = Tabs.TabPane;

class chartForm extends Component{
    state = {
    }
    render(){
        return(
            <div className="rightContainer">
                <Tabs defaultActiveKey="2">
                    <TabPane tab={<span><Icon type="code-o" />样式</span>} key="1">
                        <Card title="" style={{ width: '100%',height:'550px' }}>
                            <span>请先选择一个图表</span>
                        </Card>
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-text" />数据</span>} key="2">
                        <Card title="" style={{ width: '100%',height:'550px' }}>
                            <span>请先选择一个图表</span>
                        </Card>
                    </TabPane>
                    <TabPane tab={<span><Icon type="tool" />交互</span>} key="3">
                        <Card title="" style={{ width: '100%',height:'550px' }}>
                            <span>请先选择一个图表</span>
                        </Card>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
const rightForm = Form.create()(chartForm);

export default rightForm;