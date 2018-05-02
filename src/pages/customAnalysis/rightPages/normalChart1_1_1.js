import React,{Component} from 'react';
import {List,Tabs,Icon,Card,Button,Form,Input,Checkbox,Collapse,Select,Row,Col,Slider,InputNumber,Divider,Modal} from 'antd';
import { Scrollbars} from 'react-custom-scrollbars';
import './normalChart1_1_1.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Option = Select.Option;
const {TextArea} = Input;


class formNormalChart1_1_1 extends Component{
    state = {
        XFontSize: 40,
        YFontSize: 40,
        staticDataValue:
        `[
    {
        "x": "Mon",
        "y": 120
    },
    {
        "x": "Tue",
        "y": 200
    },
    {
        "x": "Wed",
        "y": 150
    },
    {
        "x": "Thu",
        "y": 80
    },
    {
        "x": "Fri",
        "y": 70
    },
    {
        "x": "Sat",
        "y": 110
    },
    {
        "x": "Sun",
        "y": 130
    }
]`,
        loading: false,
        visible: false,
    }
    changeXFontSize = (value) => {
        this.setState({
            XFontSize: value,
        });
    }
    changeYFontSize = (value) => {
        this.setState({
            YFontSize: value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }
    //弹出框
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    dataTypeChange =(value) => {
        if(value==='CSV文件'){
            this.showModal();
            console.log(1);
        }else{
            console.log(2);
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { visible, loading } = this.state;
        return(
            <div className="rightContainer">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="code-o" />样式</span>} key="1">
                        <Card title="基本柱图" style={{ width: '100%',height:'550px' }}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    <Scrollbars style={{ width: '350px', height: '390px' }}>
                                        <Collapse bordered={false} defaultActiveKey={['1']}>
                                            <Panel header="全局样式" key="1">
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            字体
                                                </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('字体', {
                                                        initialValue: '微软雅黑'
                                                    })(
                                                        <Select style={{ width: 120 }}>
                                                            <Option value="微软雅黑">微软雅黑</Option>
                                                            <Option value="宋体">宋体</Option>
                                                            <Option value="黑体" >黑体</Option>
                                                            <Option value="隶书">隶书</Option>
                                                        </Select>
                                                    )}
                                                </FormItem>
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            背景颜色
                                                </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('背景颜色', {
                                                        initialValue: '#FFFFFF'
                                                    })(
                                                        <Input placeholder="请输入十六进制颜色码" />
                                                    )}
                                                </FormItem>
                                            </Panel>
                                            <Panel header="X轴" key="2">
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            文本颜色
                                                    </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('X轴文本颜色', {
                                                        initialValue: '#333333'
                                                    })(
                                                        <Input placeholder="请输入十六进制颜色码" />
                                                    )}
                                                </FormItem>
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            文本字号
                                                    </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('X轴文本字号', {
                                                        initialValue: this.state.XFontSize
                                                    })(
                                                        <Row>
                                                            <Col span={12}>
                                                                <Slider min={10} max={100} onChange={this.changeXFontSize} value={this.state.XFontSize} />
                                                            </Col>
                                                            <Col span={4}>
                                                                <InputNumber
                                                                    min={10}
                                                                    max={100}
                                                                    style={{ marginLeft: 16 }}
                                                                    value={this.state.XFontSize}
                                                                    onChange={this.changeXFontSize}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    )}
                                                </FormItem>
                                            </Panel>
                                            <Panel header="Y轴" key="3">
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            文本颜色
                                                    </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('Y轴文本颜色', {
                                                        initialValue: '#333333'
                                                    })(
                                                        <Input placeholder="请输入十六进制颜色码" />
                                                    )}
                                                </FormItem>
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            文本字号
                                                    </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('Y轴文本字号', {
                                                        initialValue: this.state.YFontSize
                                                    })(
                                                        <Row>
                                                            <Col span={12}>
                                                                <Slider min={10} max={100} onChange={this.changeYFontSize} value={this.state.YFontSize} />
                                                            </Col>
                                                            <Col span={4}>
                                                                <InputNumber
                                                                    min={10}
                                                                    max={100}
                                                                    style={{ marginLeft: 16 }}
                                                                    value={this.state.YFontSize}
                                                                    onChange={this.changeYFontSize}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    )}
                                                </FormItem>
                                            </Panel>
                                            <Panel header="图表尺寸" key="4">
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            宽度
                                                    </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('图表宽度', {
                                                        initialValue: '500'
                                                    })(
                                                        <InputNumber
                                                            min={0}
                                                            max={600}
                                                            style={{ marginLeft: 16 }}
                                                        />
                                                    )}
                                                </FormItem>
                                                <FormItem
                                                    labelCol={{ span: 6 }}
                                                    wrapperCol={{ span: 18 }}
                                                    label={(
                                                        <span>
                                                            高度
                                                    </span>
                                                    )}
                                                >
                                                    {getFieldDecorator('图表高度', {
                                                        initialValue: '500'
                                                    })(
                                                        <InputNumber
                                                            min={0}
                                                            max={600}
                                                            style={{ marginLeft: 16 }}
                                                        />
                                                    )}
                                                </FormItem>
                                            </Panel>
                                        </Collapse>
                                    </Scrollbars>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" style={{marginLeft:'110px'}}>确认修改</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-text" />数据</span>} key="2">
                        <Card title="基本柱图数据接口" style={{ width: '100%',height:'550px' }}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Scrollbars style={{ width: '350px', height: '390px' }}>
                                    <FormItem
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}
                                    label={(
                                        <span>
                                            数据源类型
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('数据源类型', {
                                            initialValue: '静态数据'
                                        })(
                                            <Select style={{ width: 120 }} onSelect={this.dataTypeChange}>
                                                <Option value="静态数据">静态数据</Option>
                                                <Option value="CSV文件">CSV文件</Option>
                                                <Option value="API" >API</Option>
                                                <Option value="数据库文件">数据库文件</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                    <FormItem
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 20 }}
                                    label={(
                                        <span>
                                            静态数据内容
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('静态数据内容', {
                                            initialValue: this.state.staticDataValue
                                        })(
                                            <TextArea autosize={{minRows:'18'}}/>
                                        )}
                                    </FormItem>
                                </Scrollbars>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" style={{marginLeft:'110px'}}>确认修改</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </TabPane>
                    <TabPane tab={<span><Icon type="tool" />交互</span>} key="3">
                    <Card title="基本柱图" style={{ width: '100%',height:'550px' }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Scrollbars style={{ width: '350px', height: '390px' }}>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header="全局样式" key="1">
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    字体
                                        </span>
                                            )}
                                        >
                                            {getFieldDecorator('字体', {
                                                initialValue: '微软雅黑'
                                            })(
                                                <Select style={{ width: 120 }}>
                                                    <Option value="微软雅黑">微软雅黑</Option>
                                                    <Option value="宋体">宋体</Option>
                                                    <Option value="黑体" >黑体</Option>
                                                    <Option value="隶书">隶书</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    背景颜色
                                        </span>
                                            )}
                                        >
                                            {getFieldDecorator('背景颜色', {
                                                initialValue: '#FFFFFF'
                                            })(
                                                <Input placeholder="请输入十六进制颜色码" />
                                            )}
                                        </FormItem>
                                    </Panel>
                                    <Panel header="X轴" key="2">
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    文本颜色
                                            </span>
                                            )}
                                        >
                                            {getFieldDecorator('X轴文本颜色', {
                                                initialValue: '#333333'
                                            })(
                                                <Input placeholder="请输入十六进制颜色码" />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    文本字号
                                            </span>
                                            )}
                                        >
                                            {getFieldDecorator('X轴文本字号', {
                                                initialValue: this.state.XFontSize
                                            })(
                                                <Row>
                                                    <Col span={12}>
                                                        <Slider min={10} max={100} onChange={this.changeXFontSize} value={this.state.XFontSize} />
                                                    </Col>
                                                    <Col span={4}>
                                                        <InputNumber
                                                            min={10}
                                                            max={100}
                                                            style={{ marginLeft: 16 }}
                                                            value={this.state.XFontSize}
                                                            onChange={this.changeXFontSize}
                                                        />
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Panel>
                                    <Panel header="Y轴" key="3">
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    文本颜色
                                            </span>
                                            )}
                                        >
                                            {getFieldDecorator('Y轴文本颜色', {
                                                initialValue: '#333333'
                                            })(
                                                <Input placeholder="请输入十六进制颜色码" />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    文本字号
                                            </span>
                                            )}
                                        >
                                            {getFieldDecorator('Y轴文本字号', {
                                                initialValue: this.state.YFontSize
                                            })(
                                                <Row>
                                                    <Col span={12}>
                                                        <Slider min={10} max={100} onChange={this.changeYFontSize} value={this.state.YFontSize} />
                                                    </Col>
                                                    <Col span={4}>
                                                        <InputNumber
                                                            min={10}
                                                            max={100}
                                                            style={{ marginLeft: 16 }}
                                                            value={this.state.YFontSize}
                                                            onChange={this.changeYFontSize}
                                                        />
                                                    </Col>
                                                </Row>
                                            )}
                                        </FormItem>
                                    </Panel>
                                    <Panel header="图表尺寸" key="4">
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    宽度
                                            </span>
                                            )}
                                        >
                                            {getFieldDecorator('图表宽度', {
                                                initialValue: '500'
                                            })(
                                                <InputNumber
                                                    min={0}
                                                    max={600}
                                                    style={{ marginLeft: 16 }}
                                                />
                                            )}
                                        </FormItem>
                                        <FormItem
                                            labelCol={{ span: 6 }}
                                            wrapperCol={{ span: 18 }}
                                            label={(
                                                <span>
                                                    高度
                                            </span>
                                            )}
                                        >
                                            {getFieldDecorator('图表高度', {
                                                initialValue: '500'
                                            })(
                                                <InputNumber
                                                    min={0}
                                                    max={600}
                                                    style={{ marginLeft: 16 }}
                                                />
                                            )}
                                        </FormItem>
                                    </Panel>
                                </Collapse>
                            </Scrollbars>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{marginLeft:'110px'}}>确认修改</Button>
                        </FormItem>
                    </Form>
                </Card>
                    </TabPane>
                </Tabs>
                <Modal
                visible={visible}
                title="请选择CSV文件"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>返回</Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                        确认
                    </Button>,
                ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}
const normalChart1_1_1 = Form.create()(formNormalChart1_1_1);

export default normalChart1_1_1;