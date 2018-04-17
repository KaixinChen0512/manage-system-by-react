import React,{Component} from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
// import * as screenfull from 'screenfull'
import './header.css'

const SubMenu = Menu.SubMenu
const { Header } = Layout
class Top extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }    
    componentDidMount() {
        this.getUser()
    };
    getUser = () => {
        this.setState({
            username: 'Kayson'
        })
    }

    clear = (item) => {
        if (item.key === 'logOut') {
            this.props.clear()
        }
    }
    render() {
        return (
            <div className="Top">
            <Header style={{ background: '#fff'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                {/* <Icon
                    className="screenFull"
                    type="arrows-alt"
                    onClick={this.screenFull}
                /> */}
            </Header>
            </div>
        );
    }
}
export default Top;