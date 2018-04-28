import React,{Component} from 'react';
import {List,Tabs,Icon,Card,Button,Form,Input,Checkbox,Collapse,Select,Row,Col,Slider,InputNumber} from 'antd';
import { Scrollbars} from 'react-custom-scrollbars';
import './normalChart1_1_1.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Option = Select.Option;


class normalChart1 extends Component{
    state = {
        XFontSize: 40,
        YFontSize: 40
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
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 6 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 18 },
              sm: { span: 16 },
            },
          };
        return(
            <div className="rightContainer">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="code-o" />样式</span>} key="1">
                    <Scrollbars style={{ width: '350px', height: '550px' }}>
                    <Card title="基本柱图" style={{ width: '100%' }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="全局样式" key="1">
                                <FormItem
                                labelCol={{span:6}}
                                wrapperCol={{span:18}}
                                label={(
                                    <span>
                                    字体
                                    </span>
                                )}
                                >
                                    {getFieldDecorator('字体', {
                                        initialValue:'微软雅黑'
                                    })(
                                        <Select  style={{ width: 120 }}>
                                            <Option value="微软雅黑">微软雅黑</Option>
                                            <Option value="宋体">宋体</Option>
                                            <Option value="黑体" >黑体</Option>
                                            <Option value="隶书">隶书</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                labelCol={{span:6}}
                                wrapperCol={{span:18}}
                                label={(
                                    <span>
                                    背景颜色
                                    </span>
                                )}
                                >
                                    {getFieldDecorator('背景颜色', {
                                        initialValue:'#FFFFFF'
                                    })(
                                        <Input placeholder="请输入十六进制颜色码" />
                                    )}
                                </FormItem>
                                </Panel>
                                <Panel header="X轴" key="2">
                                    <FormItem
                                    labelCol={{span:6}}
                                    wrapperCol={{span:18}}
                                    label={(
                                        <span>
                                        文本颜色
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('X轴文本颜色', {
                                            initialValue:'#333333'
                                        })(
                                            <Input placeholder="请输入十六进制颜色码" />
                                        )}
                                    </FormItem>
                                    <FormItem
                                    labelCol={{span:6}}
                                    wrapperCol={{span:18}}
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
                                    labelCol={{span:6}}
                                    wrapperCol={{span:18}}
                                    label={(
                                        <span>
                                        文本颜色
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('Y轴文本颜色', {
                                            initialValue:'#333333'
                                        })(
                                            <Input placeholder="请输入十六进制颜色码" />
                                        )}
                                    </FormItem>
                                    <FormItem
                                    labelCol={{span:6}}
                                    wrapperCol={{span:18}}
                                    label={(
                                        <span>
                                        文本字号
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('Y轴文本字号', {
                                            initialValue:this.state.YFontSize
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
                                    labelCol={{span:6}}
                                    wrapperCol={{span:18}}
                                    label={(
                                        <span>
                                        宽度
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('图表宽度', {
                                            initialValue:'500'
                                        })(
                                            <InputNumber
                                                    min={0}
                                                    max={600}
                                                    style={{ marginLeft: 16 }}
                                            />
                                        )}
                                    </FormItem>
                                    <FormItem
                                    labelCol={{span:6}}
                                    wrapperCol={{span:18}}
                                    label={(
                                        <span>
                                        高度
                                        </span>
                                    )}
                                    >
                                        {getFieldDecorator('图表高度', {
                                            initialValue:'500'
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
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit">确认修改</Button>
                            </FormItem>
                        </Form>
                    </Card>
                    </Scrollbars>
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-text" />数据</span>} key="2">
                        数据
                    </TabPane>
                    <TabPane tab={<span><Icon type="tool" />交互</span>} key="3">
                        交互
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
const normalChart1_1_1 = Form.create()(normalChart1);

export default normalChart1_1_1;