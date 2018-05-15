import React,{Component} from 'react';
import {Tabs,Icon,Card,Button,Form,Input,Collapse,Select,Row,Col,Slider,InputNumber,Modal,Upload,Switch} from 'antd';
import { Scrollbars} from 'react-custom-scrollbars';
import './right.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Option = Select.Option;
const {TextArea} = Input;

class chartForm extends Component{
    state = {
        loading: false,
        //csv弹出框状态
        csvVisible: false,
        //txt弹出框状态
        txtVisible:false,
        //api弹出框状态
        apiVisible: false,
        //数据库文件弹出框状态
        databaseVisible:false,
        //上传CSV文件
        fileList: [{
            uid: -1,
            name: 'initialData.csv',
            status: 'done',
            url: '',
        }],
    }
    componentDidMount=()=>{
        const staticData = {
            x:this.props.dataX,
            y:this.props.dataY
        }
        this.setState({
            staticData:staticData
        })
    }

    //弹出框
    showModal = (value) => {
        switch(value){
            case "CSV文件":
                this.setState({
                    csvVisible: true,
                })
                break;
            case "TXT文件":
            this.setState({
                txtVisible: true,
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
            default:
        }
    }

    //选择csv文件操作
    csvHandleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, csvVisible: false });
        }, 3000);
    }
    csvHandleCancel = () => {
        this.setState({ csvVisible: false });
    }

    //选择txt文件操作
    txtHandleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, txtVisible: false });
        }, 3000);
    }
    txtHandleCancel = () => {
        this.setState({ txtVisible: false });
    }
    //选择api接口操作
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

    dataTypeChange =(value) => {
        this.showModal(value);
    }
    //上传CSV文件
    handleChange = (info) => {
        let fileList = info.fileList;
        fileList = fileList.slice(-2);
        fileList = fileList.map((file) => {
          if (file.response) {
            file.url = file.response.url;
            }
          return file;
        });
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
        const { csvVisible,apiVisible,txtVisible, databaseVisible, loading } = this.state;
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
                        <Card title="水平柱图" style={{ width: '100%',height:'550px' }}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    <Scrollbars style={{ width: '350px', height: '450px' }}>
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
                                                {/*<FormItem
                                                labelCol={{ span: 6 }}
                                                wrapperCol={{ span: 18 }}
                                                label={(
                                                    <span>
                                                        主标题
                                                    </span>
                                                )}
                                                >
                                                    <Input defaultValue={this.props.option.title.text} onChange={this.props.changeTitle} />
                                                </FormItem>8*/}
                                                <FormItem
                                                labelCol={{ span: 6 }}
                                                wrapperCol={{ span: 18 }}
                                                label={(
                                                    <span>
                                                        副标题
                                                    </span>
                                                )}
                                                >
                                                    <Input defaultValue={this.props.option.title.subtext} onChange={this.props.changeSubTitle} />
                                                </FormItem>
                                            </Panel>
                                            <Panel header="图表尺寸" key="2">
                                                <FormItem
                                                labelCol={{ span: 6 }}
                                                wrapperCol={{ span: 18 }}
                                                label={(
                                                    <span>
                                                        宽度
                                                    </span>
                                                )}
                                                >
                                                    <Row>
                                                        <Col span={12}>
                                                            <Slider min={0} max={1000} onChange={this.props.changeWidth} value={this.props.chartWidth} />
                                                        </Col>
                                                        <Col span={4}>
                                                            <InputNumber
                                                                min={0}
                                                                max={1000}
                                                                style={{ marginLeft: 16 }}
                                                                value={this.props.chartWidth}
                                                                onChange={this.props.changeWidth}
                                                            />
                                                        </Col>
                                                    </Row>
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
                                                    <Row>
                                                        <Col span={12}>
                                                            <Slider min={0} max={800} onChange={this.props.changeHeight} value={this.props.chartHeight} />
                                                        </Col>
                                                        <Col span={4}>
                                                            <InputNumber
                                                                min={0}
                                                                max={800}
                                                                style={{ marginLeft: 16 }}
                                                                value={this.props.chartHeight}
                                                                onChange={this.props.changeHeight}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </FormItem>
                                            </Panel>
                                        </Collapse>
                                    </Scrollbars>
                                </FormItem>
                            </Form>
                        </Card>
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-text" />数据</span>} key="2">
                        <Card title="水平柱图数据接口" style={{ width: '100%',height:'550px' }}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Scrollbars style={{ width: '350px', height: '450px' }}>
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
                                                <Option value="TXT文件">TXT文件</Option>
                                                <Option value="API" >API</Option>
                                                <Option value="数据库">数据库</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        <Row>
                                            <span>点数据：</span>
                                        </Row>
                                        <Row>
                                            <TextArea autosize={{minRows:'6'}} defaultValue={JSON.stringify(this.props.option.series[0].data)} onChange={this.props.changeData1}/>
                                        </Row>
                                        <Row>
                                            <span>边数据：</span>
                                        </Row>
                                        <Row>
                                            <TextArea autosize={{minRows:'6'}} defaultValue={JSON.stringify(this.props.option.series[0].links)} onChange={this.props.changeData2}/>
                                        </Row>
                                    </FormItem>
                                </Scrollbars>
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
                                            <Switch checkedChildren="开" unCheckedChildren="关" onChange={this.props.addAxisPointer} disabled />
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
                                            <Switch checkedChildren="开" unCheckedChildren="关" onChange={this.props.addDataFilter} disabled />
                                        </FormItem>
                                        <FormItem
                                        labelCol={{ span: 12 }}
                                        wrapperCol={{ span: 12 }}
                                        label={(
                                            <span style={{marginRight:'35px'}}>
                                                文本提示框
                                            </span>
                                        )}
                                        colon={false}
                                        >
                                            <Switch checkedChildren="开" unCheckedChildren="关" onChange={this.props.addTextNotice}/>
                                        </FormItem>
                                        <FormItem
                                        labelCol={{ span: 12 }}
                                        wrapperCol={{ span: 12 }}
                                        label={(
                                            <span style={{marginRight:'35px'}}>
                                                图表发布、存储
                                            </span>
                                        )}
                                        colon={false}
                                        >
                                            <Switch checkedChildren="开" unCheckedChildren="关" onChange={this.props.addTools} />
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
                                            <Switch checkedChildren="开" unCheckedChildren="关" disabled />
                                        </FormItem>
                                    </Panel>
                                </Collapse>
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
                    <Upload {...props} fileList={this.state.fileList} beforeUpload={this.props.readCsvFile}>
                        <Button>
                            <Icon type="upload" /> 上传
                        </Button>
                    </Upload>
                </Modal>
                <Modal
                visible={txtVisible}
                title="请选择TXT文件"
                onOk={this.txtHandleOk}
                onCancel={this.txtHandleCancel}
                footer={[
                    <Button key="back1" onClick={this.txtHandleCancel}>返回</Button>,
                    <Button key="submit1" type="primary" loading={loading} onClick={this.txtHandleOk}>
                        确认
                    </Button>,
                ]}
                >
                    <Upload {...props} fileList={this.state.fileList} beforeUpload={this.props.readTxtFile}>
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
            </div>
        );
    }
}
const rightForm = Form.create()(chartForm);

export default rightForm;