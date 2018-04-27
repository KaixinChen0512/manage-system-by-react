import React,{Component} from 'react';
import {List,Tabs,Icon} from 'antd';
import './rightSide.css';

const TabPane = Tabs.TabPane;
class rightSide extends Component{
    render(){
        return(
            <div className="rightContainer">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="code-o" />样式</span>} key="1">
                        样式
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-text" />数据</span>} key="2">
                        数据
                    </TabPane>
                    <TabPane tab={<span><Icon type="tool" />交互</span>} key="3">
                        交互
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default rightSide;