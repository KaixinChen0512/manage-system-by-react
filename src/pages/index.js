import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Avatar,Button,Icon,Layout,Menu,Breadcrumb} from 'antd';
import './index.css';
import avatar from '../image/avatar.jpg';
import Top from '../components/header.js'
const{Header,Footer,Sider,Content} = Layout;
const SubMenu = Menu.SubMenu;
class Container extends Component{
	state={
		collapsed:false
	};
	toggle = () => {
		this.setState({
		  collapsed: !this.state.collapsed,
		  mode: this.state.collapsed ? 'inline' : 'vertical'
		});
	};
	render(){
		return (
				<Layout className="container">
					<Sider 
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					style={{backgroundColor:'#404040'}}
					>
					<div className="logo" >
						<Avatar
						size="large"
						shape="circle"
						src={avatar}
						/>
						{ this.state.collapsed===false ? <span style={{color:'#FFFFFF',marginLeft:'15px'}}>管道工程管理系统</span>:''}
					</div>
						<Menu 
						theme="dark" 
						defaultSelectedKeys={['1']} 
						mode="inline"
						style={{backgroundColor:'#404040'}}
						>
							<Menu.Item key="1">
								<Icon type="home" />
								<span>首页</span>
							</Menu.Item>
							<SubMenu
							key="sub1"
							title={<span><Icon type="database"/><span>数据管理</span></span>}
							>
								<Menu.Item key="2-1">工人列表</Menu.Item>
								<Menu.Item key="2-2">管道列表</Menu.Item>
								<Menu.Item key="2-3">项目列表</Menu.Item>
								<Menu.Item key="2-4">管理员列表</Menu.Item>
							</SubMenu>
							<SubMenu
							key="sub2"
							title={<span><Icon type="file-add"/><span>添加数据</span></span>}
							>
								<Menu.Item key="3-1">添加工人</Menu.Item>
								<Menu.Item key="3-2">添加管道</Menu.Item>
								<Menu.Item key="3-3">添加项目</Menu.Item>
							</SubMenu>
							<SubMenu
							key="sub3"
							title={<span><Icon type="area-chart"/><span>可视化分析</span></span>}
							>
								<Menu.Item key="4-1">管道分布</Menu.Item>
								<Menu.Item key="4-2">项目进度</Menu.Item>
								<Menu.Item key="4-3">自定义分析</Menu.Item>
							</SubMenu>
							<SubMenu
							key="sub4"
							title={<span><Icon type="setting"/><span>设置</span></span>}
							>
								<Menu.Item key="5-1">管理员设置</Menu.Item>
							</SubMenu>
							<SubMenu
							key="sub5"
							title={<span><Icon type="profile"/><span>说明</span></span>}
							>
								<Menu.Item key="13">项目说明</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout>
					<Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear}/>
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
						Bill is a cat.
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						React Manage System ©️2018 Created By Kayson
					</Footer>
					</Layout>
				</Layout>
		)
	}
}

export default Container;
