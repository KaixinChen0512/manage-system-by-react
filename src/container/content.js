import React ,{Component}from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import './content.css';
import index from '../pages/index';
import workerList from '../pages/workerlist';
import pipeList from '../pages/pipeList';
import projectList from '../pages/projectList';
import adminList from '../pages/adminList';
import addWorker from '../pages/addWorker';
import addPipe from '../pages/addPipe';
import addProject from '../pages/addProject';
import pipeLocation from '../pages/pipeLocation';
import projectProgress from '../pages/projectProgress';
import customAnalysis from '../pages/customAnalysis';
import adminSetting from '../pages/adminSetting';
import instruction from '../pages/instruction';
const { Content } = Layout

class Contents extends Component {
  render() {
    return (
      <Content className="content">
        <Route path="/index" component={index} />
        <Route path="/workerList" component={workerList}/>
        <Route path="/pipeList" component={pipeList}/>
        <Route path="/projectList" component={projectList}/>
        <Route path="/adminList" component={adminList}/>
        <Route path="/addWorker" component={addWorker}/>
        <Route path="/addPipe" component={addPipe}/>
        <Route path="/addProject" component={addProject}/>
        <Route path="/pipeLocation" component={pipeLocation}/>
        <Route path="/projectProgress" component={projectProgress}/>
        <Route path="/customAnalysis" component={customAnalysis}/>
        <Route path="/adminSetting" component={adminSetting}/>
        <Route path="/instruction" component={instruction}/>
      </Content>
    );
  }
}
export default Contents;