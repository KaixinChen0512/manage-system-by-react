import React,{Component} from 'react'
import { Menu, Icon, Layout, Dropdown, Button, Avatar } from 'antd'
import './header.css'
const { Header } = Layout
const SubMenu = Menu.SubMenu;
class Top extends Component{
    menu = {
        normalMenu:(
            <Menu>
                <SubMenu title="柱形图">
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%9F%BA%E6%9C%AC%E6%9F%B1%E5%9B%BE.png" /><span className="menuItemText">基本柱图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E6%B0%B4%E5%B9%B3%E5%9F%BA%E6%9C%AC%E6%9F%B1%E5%9B%BE.png" /><span className="menuItemText">水平基本柱图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E6%A2%AF%E5%BD%A2%E6%9F%B1%E5%9B%BE.png" /><span className="menuItemText">梯形柱图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E6%8A%98%E7%BA%BF%E6%9F%B1%E5%9B%BE.png" /><span className="menuItemText">折线柱图</span></Menu.Item>
                </SubMenu>
                <SubMenu title="折线图">
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%9F%BA%E6%9C%AC%E6%8A%98%E7%BA%BF%E5%9B%BE.png" /><span className="menuItemText">基本折线图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%8F%8C%E8%BD%B4%E6%8A%98%E7%BA%BF%E5%9B%BE.png" /><span className="menuItemText">双轴折线图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%8C%BA%E5%9F%9F%E5%9B%BE.png" /><span className="menuItemText">区域图</span></Menu.Item>
                </SubMenu>
                <SubMenu title="饼图">
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%9F%BA%E6%9C%AC%E9%A5%BC%E5%9B%BE.png" /><span className="menuItemText">基本饼图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%A4%9A%E7%BB%B4%E9%A5%BC%E5%9B%BE.png" /><span className="menuItemText">多维度饼图</span></Menu.Item>
                </SubMenu>
                <SubMenu title="散点图">
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%9F%BA%E6%9C%AC%E6%95%A3%E7%82%B9%E5%9B%BE.png" /><span className="menuItemText">基本散点图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E6%B0%94%E6%B3%A1%E5%9B%BE.png" /><span className="menuItemText">气泡图</span></Menu.Item>
                </SubMenu>
            </Menu>
        ),
        mapMenu:(
            <Menu>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis3D%E5%B9%B3%E9%9D%A2%E5%9F%BA%E7%A1%80%E5%9C%B0%E5%9B%BE.png" /><span className="menuItemText">3D平面基础地图</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis3D%E5%B9%B3%E9%9D%A2%E4%B8%AD%E5%9B%BD%E5%9C%B0%E5%9B%BE.png" /><span className="menuItemText">3D平面中国地图</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis3D%E7%90%83%E5%BD%A2%E5%9C%B0%E5%9B%BE.png" /><span className="menuItemText">3D球形地图</span></Menu.Item>
            </Menu>
        ),
        indexMenu:(
            <Menu>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E8%BF%9B%E5%BA%A6%E6%9D%A1.png" /><span className="menuItemText">进度条</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E8%BD%AE%E6%92%AD%E5%9B%BE.png" /><span className="menuItemText">轮播图</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E7%8A%B6%E6%80%81%E5%8D%A1%E7%89%87.png" /><span className="menuItemText">状态卡片</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E6%96%87%E5%AD%97%E6%A0%87%E7%AD%BE.png" /><span className="menuItemText">文字标签</span></Menu.Item>
            </Menu>
        ),
        textMenu:(
            <Menu>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC.png" /><span className="menuItemText">多行文本</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E9%80%9A%E7%94%A8%E6%A0%87%E9%A2%98.png" /><span className="menuItemText">通用标题</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E8%BD%AE%E6%92%AD%E5%88%97%E8%A1%A8.png" /><span className="menuItemText">轮播列表</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E9%94%AE%E5%80%BC%E8%A1%A8%E6%A0%BC.png" /><span className="menuItemText">键值表格</span></Menu.Item>
            </Menu>
        ),
        utilMenu:(
            <Menu>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E9%A2%84%E8%A7%88.png" /><span className="menuItemText">预览</span></Menu.Item>
                <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%8F%91%E5%B8%83.png" /><span className="menuItemText">发布</span></Menu.Item>
            </Menu>
        )
    };
    render() {
        return (
            <div className="Top">
                <Header style={{ background: '#404040'}}>
                    <Dropdown.Button overlay={this.menu.normalMenu}>
                        <a className="ant-dropdown-link">
                        常规图表
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.mapMenu} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                        地图
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.indexMenu} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                        指标
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.textMenu} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                        文字图表
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.utilMenu} style={{float:'right'}}>
                        <a className="ant-dropdown-link">
                        完成
                        </a>
                    </Dropdown.Button>
                </Header>
            </div>
        );
    }
}
export default Top;

