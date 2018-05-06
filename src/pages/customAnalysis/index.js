import React, { Component } from 'react';
import {Icon,Layout,Menu,List,Avatar,Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import './index.css';
import Top from './header.js';
import Bottom from './footer.js';
import Contents from './content.js';
import LeftSide from './leftSide.js';
import RightSide from './rightSide.js';
const{Sider} = Layout;
const SubMenu = Menu.SubMenu;
class Container extends Component{
	
	render(){
		return (
				<div className="container">
					<Row>
						<Top />
					</Row>
					<Row gutter={16}>
						<Col span={3} style={{background:'#F7F8FA'}}>
							<LeftSide />
						</Col>
						<Col span={14}>
							<Contents />
						</Col>
						<Col span={7} style={{background:'#F7F8FA'}}>
							<RightSide />
						</Col>
					</Row>
					{/*<iframe src="https://datav.aliyun.com/admin/screen/113071?spm=datav.10712463.0.0.5a193967DKz7aE" style={{height:'100%',width:'100%'}}/>*/}
				</div>
		)
	}
}

export default Container;
