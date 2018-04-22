import React, { Component } from 'react';
import {Icon,Layout,Menu} from 'antd';
import {Link} from 'react-router-dom';
import './index.css';
// import Top from './header.js';
// import Bottom from './footer.js';
// import Contents from './content.js';
import allMenu from '../../utils/menu';
const{Sider} = Layout;
const SubMenu = Menu.SubMenu;
class Container extends Component{
	state={
		current: 'index',
		collapsed:false
	};
	componentDidMount() {
    this.handleClick([], 'index')
	};
	handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
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
						<Menu 
						theme="dark" 
						defaultSelectedKeys={['1']} 
						mode="inline"
						style={{backgroundColor:'#404040'}}
						selectedKeys={[this.state.current]}
						onClick={this.handleClick}
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
						</Menu>
					</Sider>
					<Layout>
					{/*<Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear}/>
					<Contents/>
                        <Bottom/>*/}
					</Layout>
				</Layout>
		)
	}
}

export default Container;
