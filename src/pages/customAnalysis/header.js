import React,{Component} from 'react'
import { Menu, Icon, Layout, Dropdown, Button, Avatar } from 'antd'
import {Link} from 'react-router-dom'
import './header.css'
import img1_1_1 from '../../image/chartImgs/1_1_1.png';
import img1_1_2 from '../../image/chartImgs/1_1_2.png';
import img1_2_1 from '../../image/chartImgs/1_2_1.png';
import img1_2_2 from '../../image/chartImgs/1_2_2.png';
import img1_2_3 from '../../image/chartImgs/1_2_3.png';
import img1_3_1 from '../../image/chartImgs/1_3_1.png';
import img1_3_2 from '../../image/chartImgs/1_3_2.png';
import img2_1 from '../../image/chartImgs/2_1.png';
import img2_2 from '../../image/chartImgs/2_2.png';
import img3_1 from '../../image/chartImgs/3_1.png';
import img3_2 from '../../image/chartImgs/3_2.png';
import img4_1 from '../../image/chartImgs/4_1.png';
import img6_1 from '../../image/chartImgs/6_1.png';
const { Header } = Layout
const SubMenu = Menu.SubMenu;
class Top extends Component{
    menu = {
        normalMenu:(
            <Menu>
                <SubMenu title="柱形图">
                    <Menu.Item><Link to="/app/customAnalysis/1_1_1"><Avatar shape="square" size="large" src={img1_1_1} /><span className="menuItemText">基本柱图</span></Link></Menu.Item>
                    <Menu.Item><Link to="/app/customAnalysis/1_1_2"><Avatar shape="square" size="large" src={img1_1_2} /><span className="menuItemText">水平基本柱图</span></Link></Menu.Item>
                </SubMenu>
                <SubMenu title="折线图">
                    <Menu.Item><Link to="/app/customAnalysis/1_2_1"><Avatar shape="square" size="large" src={img1_2_1} /><span className="menuItemText">基本折线图</span></Link></Menu.Item>
                    <Menu.Item><Link to="/app/customAnalysis/1_2_2"><Avatar shape="square" size="large" src={img1_2_2} /><span className="menuItemText">平滑折线图</span></Link></Menu.Item>
                    <Menu.Item><Link to="/app/customAnalysis/1_2_3"><Avatar shape="square" size="large" src={img1_2_3} /><span className="menuItemText">基本面积图</span></Link></Menu.Item>
                </SubMenu>
                <SubMenu title="饼图">
                    <Menu.Item><Link to="/app/customAnalysis/1_3_1"><Avatar shape="square" size="large" src={img1_3_1} /><span className="menuItemText">基本饼图</span></Link></Menu.Item>
                    <Menu.Item><Link to="/app/customAnalysis/1_3_2"><Avatar shape="square" size="large" src={img1_3_2} /><span className="menuItemText">嵌套饼图</span></Link></Menu.Item>
                </SubMenu>
                <SubMenu title="散点图">
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E5%9F%BA%E6%9C%AC%E6%95%A3%E7%82%B9%E5%9B%BE.png" /><span className="menuItemText">基本散点图</span></Menu.Item>
                    <Menu.Item><Avatar shape="square" size="large" src="http://oudaz22af.bkt.clouddn.com/image/PMS/customAnalysis%E6%B0%94%E6%B3%A1%E5%9B%BE.png" /><span className="menuItemText">气泡图</span></Menu.Item>
                </SubMenu>
            </Menu>
        ),
        hierarchicalData:(
            <Menu>
                <Menu.Item><Link to="/app/customAnalysis/2_1"><Avatar shape="square" size="large" src={img2_1} /><span className="menuItemText">基本树图</span></Link></Menu.Item>
                <Menu.Item><Link to="/app/customAnalysis/2_2"><Avatar shape="square" size="large" src={img2_2} /><span className="menuItemText">矩型树图</span></Link></Menu.Item>
            </Menu>
        ),
        networkData:(
            <Menu>
                <Menu.Item><Link to="/app/customAnalysis/3_1"><Avatar shape="square" size="large" src={img3_1} /><span className="menuItemText">力导向图</span></Link></Menu.Item>
                <Menu.Item><Link to="/app/customAnalysis/3_2"><Avatar shape="square" size="large" src={img3_2} /><span className="menuItemText">桑基图</span></Link></Menu.Item>
            </Menu>
        ),
        multidimensionalData:(
            <Menu>
                <Menu.Item><Link to="/app/customAnalysis/4_1"><Avatar shape="square" size="large" src={img4_1} /><span className="menuItemText">平行坐标</span></Link></Menu.Item>
            </Menu>
        ),
        mapData:(
            <Menu>
                <Menu.Item><Link to="/app/customAnalysis/6_1"><Avatar shape="square" size="large" src={img6_1} /><span className="menuItemText">点地图</span></Link></Menu.Item>
                <Menu.Item><Link to="/app/customAnalysis/6_2"><Avatar shape="square" size="large" src="" /><span className="menuItemText">线地图</span></Link></Menu.Item>
            </Menu>
        )
    };
    render() {
        return (
            <div>
                <Header style={{ background: '#F7F8FA'}}>
                    <Dropdown.Button overlay={this.menu.normalMenu}>
                        <a className="ant-dropdown-link">
                            常规图表
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.hierarchicalData} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                            层次数据
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.networkData} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                            网络数据
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.multidimensionalData} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                            多维数据
                        </a>
                    </Dropdown.Button>
                    <Dropdown.Button overlay={this.menu.mapData} style={{marginLeft:'20px'}}>
                        <a className="ant-dropdown-link">
                            基础地图数据
                        </a>
                    </Dropdown.Button>
                </Header>
            </div>
        );
    }
}
export default Top;

