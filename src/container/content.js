import React ,{Component}from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import './content.css';
import index from '../pages/index';
import workerList from '../pages/workerlist';

const { Content } = Layout

class Contents extends Component {
  render() {
    return (
      <Content className="content">
        <Route path="/" component={index} />
        <Route path="/workerList" component={workerList}/>
      </Content>
    );
  }
}
export default Contents;