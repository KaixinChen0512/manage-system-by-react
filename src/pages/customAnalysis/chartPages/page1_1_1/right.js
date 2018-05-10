import React,{Component} from 'react';
import {List,Tabs,Icon,Card,Button,Form,Input,Checkbox,Collapse,Select,Row,Col,Slider,InputNumber,Divider,Modal,Upload,message,Switch} from 'antd';
import { Scrollbars} from 'react-custom-scrollbars';
import './right.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Option = Select.Option;
const {TextArea} = Input;
//拖拽上传
// const Dragger = Upload.Dragger;


class chartForm extends Component{
    state = {
        options:{
            xAxis:{
                axisLabel:{
                    fontSize:'12',
                    color:'#333333'
                }
            },
            yAxis:{
                axisLabel:{
                    fontSize:'12',
                    color:'#333333'
                }
            },
            textStyle:{
                fontFamily:'Microsoft YaHei'
            },
            backgroundColor:'#FFFFFF' 
        },
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
        //csv弹出框
        loading: false,
        csvVisible: false,
        //api弹出框
        apiVisible: false,
        //数据库文件弹出框
        databaseVisible:false,
        // databaseVisible2:false,
        //上传CSV文件
        fileList: [{
            uid: -1,
            name: 'initialData.csv',
            status: 'done',
            url: '',
        }],
    }

    // //修改全局字体样式
    // changeGlobalFontFamily = (value) =>{
    //     this.setState({
    //         options: Object.assign({},this.state.options,{
    //             textStyle:{
    //                 fontFamily:value
    //         }})
    //     });
    // }

    // //修改全局背景颜色
    // changeBackgroundColor = (value) => {
    //     this.setState({
    //         options: Object.assign({},this.state.options,{
    //             backgroundColor:value
    //         })
    //     });
    // }
    //修改X轴字体大小
    // changeXFontSize = (value) => {
    //     this.setState({
    //         options: Object.assign({},this.state.options,{xAxis:{
    //             axisLabel:{
    //                 fontSize:value,
    //             }
    //         }})
    //     });
    // }

    // //修改X轴字体颜色
    // changeXFontColor=(value)=>{
    //     this.setState({
    //         options: Object.assign({},this.state.options,{xAxis:{
    //             axisLabel:{
    //                 color:value,
    //             }
    //         }})
    //     });
    // }

    // //修改Y轴字体大小
    // changeYFontSize = (value) => {
    //     this.setState({
    //         options: Object.assign({},this.state.options,{yAxis:{
    //             axisLabel:{
    //                 fontSize:value,
    //             }
    //         }})
    //     });
    // }

    // //修改Y轴字体颜色
    // changeYFontColor = (value) => {
    //     this.setState({
    //         options: Object.assign({},this.state.options,{yAxis:{
    //             axisLabel:{
    //                 color:value,
    //             }
    //         }})
    //     });
    // }

    // //表单提交事件
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('values:',values)
    //             this.props.changeOption(this.state.options)
    //         }
    //     });
    // }

    //弹出框
    showModal = (value) => {
        switch(value){
            case "CSV文件":
                this.setState({
                    csvVisible: true,
                })
                break;
            case "API":
                this.setState({
                    apiVisible: true,
                })
                break;
            case "数据库":
                this.setState({
                    databaseVisible: true,
                })
                break;
            // case "database2":
            //     this.setState({
            //         databaseVisible2: true,
            //     })
            //     break;
            default:
        }
    }
    csvHandleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, csvVisible: false });
        }, 3000);
    }
    csvHandleCancel = () => {
        this.setState({ csvVisible: false });
    }
    apiHandleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, apiVisible: false });
        }, 3000);
    }
    apiHandleCancel = () => {
        this.setState({ apiVisible: false });
    }
    databaseHandleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, databaseVisible: false });
        }, 3000);
    }
    databaseHandleCancel = () => {
        this.setState({ databaseVisible: false });
    }
    // databaseHandleOk2 = () => {
    //     this.setState({ loading: true });
    //     setTimeout(() => {
    //         this.setState({ loading: false, databaseVisible2: false });
    //     }, 3000);
    // }
    // databaseHandleCancel2 = () => {
    //     this.setState({ databaseVisible2: false });
    // }
    dataTypeChange =(value) => {
        this.showModal(value);
    }
    //上传CSV文件
    handleChange = (info) => {
        let fileList = info.fileList;
    
        // 1. Limit the number of uploaded files
        //    Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);
    
        // 2. read from response and show file link
        fileList = fileList.map((file) => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
            }
          return file;
        });
    
        // 3. filter successfully uploaded files according to response from server
        fileList = fileList.filter((file) => {
          if (file.response) {
            return file.response.status === 'success';
          }
          return true;
        });
    
        this.setState({ fileList });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        //弹出框
        const { csvVisible,apiVisible,databaseVisible,databaseVisible2, loading } = this.state;
        //上传CSV文件
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange,
            multiple: true,
        };
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
                                                <Select style={{ width: 120 }} onSelect={this.props.changeGlobalFontFamily} defaultValue={this.props.option.textStyle.fontFamily}>
                                                    <Option value="Microsoft YaHei">微软雅黑</Option>
                                                    <Option value="serif">衬线体</Option>
                                                    <Option value="monospace">monospace</Option>
                                                    <Option value="Courier New">Courier New</Option>
                                                </Select>
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
                                                <Input defaultValue={this.props.option.backgroundColor} onChange={this.props.changeBackgroundColor} />
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
                                                    <Input defaultValue={this.props.option.xAxis.axisLabel.color} onChange={this.props.changeXFontColor} />
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
                                                    <Row>
                                                        <Col span={12}>
                                                            <Slider min={0} max={60} onChange={this.props.changeXFontSize} value={this.props.option.xAxis.axisLabel.fontSize}/>
                                                        </Col>
                                                        <Col span={4}>
                                                            <InputNumber
                                                                min={0}
                                                                max={60}
                                                                style={{ marginLeft: 16 }}
                                                                value={this.props.option.xAxis.axisLabel.fontSize}
                                                                onChange={this.props.changeXFontSize}
                                                            />
                                                        </Col>
                                                    </Row>
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
                                                    <Input defaultValue={this.props.option.yAxis.axisLabel.color} onChange={this.props.changeYFontColor} />
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
                                                    <Row>
                                                        <Col span={12}>
                                                            <Slider min={0} max={60} onChange={this.props.changeYFontSize} value={this.props.option.yAxis.axisLabel.fontSize} />
                                                        </Col>
                                                        <Col span={4}>
                                                            <InputNumber
                                                                min={0}
                                                                max={60}
                                                                style={{ marginLeft: 16 }}
                                                                value={this.props.option.yAxis.axisLabel.fontSize}
                                                                onChange={this.props.changeYFontSize}
                                                            />
                                                        </Col>
                                                    </Row>
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
                                                    <InputNumber
                                                        min={0}
                                                        max={1000}
                                                        style={{ marginLeft: 16 }}
                                                        defaultValue={this.props.chartWidth}
                                                        onChange={this.props.changeWidth}
                                                    />
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
                                                    <InputNumber
                                                        min={0}
                                                        max={800}
                                                        style={{ marginLeft: 16 }}
                                                        defaultValue={this.props.chartHeight}
                                                        onChange={this.props.changeHeight}
                                                    />
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
                                                <Option value="数据库">数据库</Option>
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
                    <Card title="添加自定义控件" style={{ width: '100%',height:'550px' }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header="可视化控件" key="1">
                                        <FormItem
                                        labelCol={{ span: 12 }}
                                        wrapperCol={{ span: 12 }}
                                        label={(
                                            <span style={{marginRight:'35px'}}>
                                                坐标轴指示器
                                            </span>
                                        )}
                                        colon={false}
                                        >
                                            {getFieldDecorator('坐标轴指示器', {
                                                initialValue:'false'
                                            })(
                                                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                                            )}
                                        </FormItem>
                                        <FormItem
                                        labelCol={{ span: 12 }}
                                        wrapperCol={{ span: 12 }}
                                        label={(
                                            <span style={{marginRight:'35px'}}>
                                                数据筛选
                                            </span>
                                        )}
                                        colon={false}
                                        >
                                            {getFieldDecorator('数据筛选', {
                                                initialValue:'false'
                                            })(
                                                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                                            )}
                                        </FormItem>
                                        <FormItem
                                        labelCol={{ span: 12 }}
                                        wrapperCol={{ span: 12 }}
                                        label={(
                                            <span style={{marginRight:'35px'}}>
                                                参数回调
                                            </span>
                                        )}
                                        colon={false}
                                        >
                                            {getFieldDecorator('参数回调', {
                                                initialValue:'false'
                                            })(
                                                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                                            )}
                                        </FormItem>
                                    </Panel>
                                    <Panel header="算法" key="2">
                                        <FormItem
                                        labelCol={{ span: 12 }}
                                        wrapperCol={{ span: 12 }}
                                        label={(
                                            <span style={{marginRight:'35px'}}>
                                                时间序列预测算法
                                            </span>
                                        )}
                                        colon={false}
                                        >
                                            {getFieldDecorator('时间序列预测算法', {
                                                initialValue:'false'
                                            })(
                                                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                                            )}
                                        </FormItem>
                                    </Panel>
                                </Collapse>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{marginLeft:'110px'}}>确认修改</Button>
                        </FormItem>
                    </Form>
                </Card>
                    </TabPane>
                </Tabs>
                <Modal
                visible={csvVisible}
                title="请选择CSV文件"
                onOk={this.csvHandleOk}
                onCancel={this.csvHandleCancel}
                footer={[
                    <Button key="back1" onClick={this.csvHandleCancel}>返回</Button>,
                    <Button key="submit1" type="primary" loading={loading} onClick={this.csvHandleOk}>
                        确认
                    </Button>,
                ]}
                >
                    <Upload {...props} fileList={this.state.fileList}>
                        <Button>
                            <Icon type="upload" /> 上传
                        </Button>
                    </Upload>
                </Modal>
                <Modal
                visible={apiVisible}
                title="请填写API接口信息"
                onOk={this.apiHandleOk}
                onCancel={this.apiHandleCancel}
                footer={[
                    <Button key="back2" onClick={this.apiHandleCancel}>返回</Button>,
                    <Button key="submit2" type="primary" loading={loading} onClick={this.apiHandleOk}>
                        确认
                    </Button>,
                ]}
                >
                    <Row>
                        <span>URL</span>
                    </Row>
                    <Row>
                        <span>
                            将回调参数配置到url中, 例: http://api.test?value=:value
                        </span>
                    </Row>
                    <Row>
                        <TextArea autosize={{minRows:6}}/>
                    </Row>
                </Modal>
                <Modal
                visible={databaseVisible}
                title="请填写数据库信息"
                onOk={this.databaseHandleOk}
                onCancel={this.databaseHandleCancel}
                footer={[
                    <Button key="back3" onClick={this.databaseHandleCancel}>返回</Button>,
                    <Button key="submit3" type="primary" loading={loading} onClick={this.databaseHandleOk}>
                        确认
                    </Button>,
                ]}
                >
                    <Row>
                        <Button type="primary" onClick={this.dataTypeChange("database2")}>数据库连接配置</Button>
                    </Row>
                    <Row>
                        <span style={{marginTop:"8px"}}>SQL:</span>
                    </Row>
                    <Row>
                        <TextArea autosize={{minRows:8}} defaultValue="SELECT * FROM"/>
                    </Row>
                </Modal>
                {/*<Modal
                visible={databaseVisible2}
                title="数据库配置信息"
                onOk={this.databaseHandleOk2}
                onCancel={this.databaseHandleCancel2}
                footer={[
                    <Button key="back4" onClick={this.databaseHandleCancel2}>返回</Button>,
                    <Button key="submit4" type="primary" loading={loading} onClick={this.databaseHandleOk2}>
                        确认
                    </Button>,
                ]}
                >
                    <Row>
                        <span>URL</span>
                    </Row>
                    <Row>
                        <span>
                            将回调参数配置到url中, 例: http://api.test?value=:value
                        </span>
                    </Row>
                    <Row>
                        <TextArea autosize={{minRows:6}}/>
                    </Row>
            </Modal>*/}
            </div>
        );
    }
}
const rightForm = Form.create()(chartForm);

export default rightForm;