import React,{Component} from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
// import b1 from '../../image/kayson.jpg';
// import b2 from '../../image/kayson.jpg';
// import b3 from '../../image/kayson.jpg';
// import b4 from '../../image/kayson.jpg';
import avatar from '../../image/defaultUserAvatar.png';
import { Link } from 'react-router-dom';
import './index.css'

class index extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="file-text" style={{fontSize:32}}/>
                                    </div>
                                    <div className="clear" style={{padding:'0 0 0 20px'}}>
                                        <div className="text-muted">项目数量</div>
                                        <h2>68</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" style={{fontSize:32}} />
                                    </div>
                                    <div className="clear" style={{padding:'0 0 0 20px'}}>
                                        <div className="text-muted">云端数据</div>
                                        <h2>1024</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="cloud-box">
                            <Card>
                                <div className="y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" style={{fontSize:32}} />
                                    </div>
                                    <div className="clear" style={{padding:'0 0 0 20px'}}>
                                        <div className="text-muted">项目实景</div>
                                        <h2>866</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" style={{fontSize:32}} />
                                    </div>
                                    <div className="clear" style={{padding:'0 0 0 20px'}}>
                                        <div className="text-muted">消息通知</div>
                                        <h2>96</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="cloud-box">
                            <Card className={'no-padding'} style={{margin:'15px 0 15px 0'}}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div style={{marginBottom:'10px'}}>
                                    <h3>项目日志</h3>
                                    <small>4个已完成，2个正在进行中</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <Timeline pending={<Link to="/app/projectList">更多项目</Link>}>
                                    <Timeline.Item color="red">
                                        <p>鄂州市项目</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>黄岗市项目</p>
                                    </Timeline.Item>
                                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">仙桃市项目试运行</Timeline.Item>
                                    <Timeline.Item color="green">
                                    <p>襄阳市一期项目</p>
                                    <p>襄阳市二期项目</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green">十堰市项目</Timeline.Item>
                                    <Timeline.Item color="green">武汉市项目</Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div>
                                    <h3>消息栏</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={avatar} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">陈凯鑫</a>
                                            <span className="text-muted">项目已完成！请及时验收！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={avatar} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">王昊</a>
                                            <span className="text-muted">襄阳市项目第二期已完成！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={avatar} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">罗林溢</a>
                                            <span className="text-muted">黄冈市项目资金情况已上传！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={avatar} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">夏腾</a>
                                            <span className="text-muted">鄂州市项目正式启动！</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>管理系统访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default index;