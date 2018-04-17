import React,{Component} from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import createHistory from 'history/createHashHistory';
import './index.css'

const FormItem = Form.Item;
const history = createHistory();

class LoginPage extends Component {
    componentDidMount() {
        this.openNotificationWithIcon('info');
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.props.form.getFieldsValue().username;
        let password = this.props.form.getFieldsValue().password;
        if (username === '123' && password === '123') {
            // 表单的路由处理
            history.push('/index');
        } else {
            this.openNotificationWithIcon('info');
        }
    }
    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
            message: '测试登录账户和密码',
            description: '账号：123，密码：123',
            duration: 10,
            icon: <Icon type="heart" style={{ color: '#FF0000' }} />,
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>欢迎使用管道工程管理系统</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">登陆</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const Login = Form.create()(LoginPage);
export default Login;