import React ,{Component}from 'react'
import { Layout } from 'antd'
import './footer.css'

const { Footer } = Layout

class Bottom extends Component {
    render() {
        return (
            <Footer className="bottom animated bounceInLeft">
                <div className="text">
                    <div>
                        <span className="me">© 2018 陈凯鑫</span>
                    </div>
                </div>
            </Footer>
        );
    }
}
export default Bottom;