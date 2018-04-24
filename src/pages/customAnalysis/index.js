import React, { Component } from 'react';
import {Icon,Layout,Menu} from 'antd';
import {Link} from 'react-router-dom';
import './index.css';
import Top from './header.js';
import Bottom from './footer.js';
import Contents from './content.js';
const{Sider} = Layout;
const SubMenu = Menu.SubMenu;
class Container extends Component{
	render(){
		return (
				<Layout className="container">
					<Top/>
					<Layout>
						<Contents/>  
						<Bottom/>
					</Layout>
				</Layout>
		)
	}
}

export default Container;
