import React, { Component } from 'react';
import {Avatar,Icon,Layout,Menu} from 'antd';
import {Link} from 'react-router-dom';
import './index.css';
import avatar from '../image/avatar.jpg';
import Top from './header.js';
import Bottom from './footer.js';
import Contents from './content.js';
import allMenu from '../utils/menu';
const{Sider} = Layout;
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
	clear = () => {
    this.setState({
      current: 'index',
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
						{
							allMenu.map((subMenu) => {
							  if (subMenu.children && subMenu.children.length) {
								return (
								  <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
									{subMenu.children.map(menu => (
									  <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
									))}
								  </SubMenu>
								)
							  }
							  return (
								<Menu.Item key={subMenu.url}>
								  <Link to={`/${subMenu.url}`}>
									<Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
								  </Link>
								</Menu.Item>
							  )
							})
						  }
							{/*<Menu.Item key="1">
								<Icon type="home" />
								<span>首页</span>
							</Menu.Item>
							<SubMenu
							key="sub1"
							title={<span><Icon type="database"/><span>数据管理</span></span>}
							>
								<Menu.Item key="2-1"><Link to={'workersList'}>工人列表</Link></Menu.Item>
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
		</SubMenu>*/}
						</Menu>
					</Sider>
					<Layout>
					<Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear}/>
					<Contents/>
					<Bottom/>
					</Layout>
				</Layout>
		)
	}
}

export default Container;
