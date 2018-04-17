import React ,{Component}from 'react'
import { Layout } from 'antd'
import './footer.css'

const { Footer } = Layout

class Bottom extends Component {
    state = {
        timer: 0
    }

    tick = () => {
        this.setState({ timer:this.state.timer + 1 });
    }

    // 组件渲染后开始循环执行tick函数
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    // 组件将要死亡时清除计时器，不清除也可以
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Footer className="bottom animated bounceInLeft">
                <div className="text">
                    <div>
                        <span className="me">© 2018 陈凯鑫</span>
                        <span className="stay">您的登陆时长已达 <span className="time">{this.state.timer}</span> 秒</span>
                    </div>
                </div>
            </Footer>
        );
    }
}
export default Bottom;