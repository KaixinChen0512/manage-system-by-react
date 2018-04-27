import React, { Component } from 'react';
import {Icon,Layout,Menu,List,Avatar,Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import './index.css';
import Top from './header.js';
import Bottom from './footer.js';
import Contents from './content.js';
import LeftSide from './leftSide.js';
import RightSide from './rightSide.js';
import leftSide from './leftSide.js';
import rightSide from './rightSide.js';
const{Sider} = Layout;
const SubMenu = Menu.SubMenu;
class Container extends Component{
	
	render(){
		return (
				<div className="container">
					<Row>
						<Top/>
					</Row>
					<Row>
						<Col span={4} style={{background:'#F7F8FA'}}>
							<LeftSide/>
						</Col>
						<Col span={16}>
							<Contents/>
						</Col>
						<Col span={4} style={{background:'#F7F8FA'}}>
							<RightSide/>
						</Col>
					</Row>
				</div>
		)
	}
}

export default Container;
