import React ,{Component}from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import './content.css';
import index from '../pages/index/index.js';

const { Content } = Layout

class Contents extends Component {
  render() {
    return (
      <Content className="content">
        <Route path="/" component={index} />
      </Content>
    );
  }
}
export default Contents;