import React ,{Component}from 'react'
import './index.css'

class follow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            col:'#666'
        }
    }

    getRandomColor = () => {
        this.setState({
            col: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
        });
    }

    // 组件渲染后，500毫秒改变一次组件颜色
    componentDidMount() {
        this.interval = setInterval(this.getRandomColor, 500);
    }

    // 组件将要死亡时清除计时器
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { col } = this.state

        return (
            <div className="animated flip ani-box">
                <div><a href="https://github.com/KaixinChen0512" className="welcome animated flip text" style={{ color: col }}>项目地址</a></div>
                <img src="http://oudaz22af.bkt.clouddn.com/face.png" width="300" alt="logo" className="lastPic" />
                <div className="animated swing discribe">本系统主要致力于高效化管道工程管理</div>
                <div className="animated swing discribe">项目源码请访问<a href="https://github.com/KaixinChen0512">我的GitHub</a>。欢迎 <a href="http://chenkaixin.cn">访问我的个人主页!</a></div>
            </div>
        )
    }
}
export default follow;