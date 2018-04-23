import React,{Component} from 'react'
import { Menu, Icon, Layout, Dropdown } from 'antd'
import './header.css'
const { Header } = Layout
const SubMenu = Menu.SubMenu;
class Top extends Component{
    menu = {
        nomalMenu:(
            <Menu>
                <SubMenu title="柱形图">
                    <Menu.Item>基本柱图</Menu.Item>
                    <Menu.Item>水平基本柱图</Menu.Item>
                    <Menu.Item>梯形柱图</Menu.Item>
                    <Menu.Item>折现柱图</Menu.Item>
                </SubMenu>
                <SubMenu title="折线图">
                    <Menu.Item>基本折线图</Menu.Item>
                    <Menu.Item>双轴折线图</Menu.Item>
                    <Menu.Item>区域图</Menu.Item>
                </SubMenu>
                <SubMenu title="饼图">
                    <Menu.Item>基本饼图</Menu.Item>
                    <Menu.Item>多维度饼图</Menu.Item>
                </SubMenu>
                <SubMenu title="散点图" disabled>
                    <Menu.Item>基本散点图</Menu.Item>
                    <Menu.Item>气泡图</Menu.Item>
                </SubMenu>
            </Menu>
          ),
          mapMenu:(
            <Menu>
                <Menu.Item>3D平面基础地图</Menu.Item>
                <Menu.Item>3D平面中国地图</Menu.Item>
                <Menu.Item>3D球形地图</Menu.Item>
            </Menu>
          ),
          indexMenu:(
            <Menu>
                <Menu.Item>进度条</Menu.Item>
                <Menu.Item>轮播图</Menu.Item>
                <Menu.Item>状态卡片</Menu.Item>
                <Menu.Item>文字标签</Menu.Item>
            </Menu>
          ),
          textMenu:(
            <Menu>
                <Menu.Item>多行文本</Menu.Item>
                <Menu.Item>通用标题</Menu.Item>
                <Menu.Item>轮播列表</Menu.Item>
                <Menu.Item>键值表格</Menu.Item>
            </Menu>
          )
    };
    render() {
        return (
            <div className="Top">
                <Header style={{ background: '#fff'}}>
                    <Dropdown overlay={this.menu.normalMenu}>
                        <a className="ant-dropdown-link">
                        常规图表 <Icon type="down" />
                        </a>
                    </Dropdown>
                    <Dropdown overlay={this.menu.mapMenu}>
                        <a className="ant-dropdown-link">
                        地图 <Icon type="down" />
                        </a>
                    </Dropdown>
                    <Dropdown overlay={this.menu.indexMenu}>
                        <a className="ant-dropdown-link">
                        指标 <Icon type="down" />
                        </a>
                    </Dropdown>
                    <Dropdown overlay={this.menu.textMenu}>
                        <a className="ant-dropdown-link">
                        文字图表 <Icon type="down" />
                        </a>
                    </Dropdown>
                </Header>
            </div>
        );
    }
}
export default Top;

