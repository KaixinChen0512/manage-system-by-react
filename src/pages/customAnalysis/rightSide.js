import React ,{Component}from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import './rightSide.css';
import normalChart1_1_1 from './rightPages/normalChart1_1_1.js';
// import workerList from '../pages/workerlist';
// import pipeList from '../pages/pipeList';
// import projectList from '../pages/projectList';
// import adminList from '../pages/adminList';
// import addWorker from '../pages/addWorker';
// import addPipe from '../pages/addPipe';
// import addProject from '../pages/addProject';
// import pipeLocation from '../pages/pipeLocation';
// import projectProgress from '../pages/projectProgress';
// import customAnalysis from '../pages/customAnalysis';
// import adminSetting from '../pages/adminSetting';
// import instruction from '../pages/instruction';
// import photos from '../pages/photos';


class rightSide extends Component {
  render() {
    return (
      <div>
        <Route exact path="/app/customAnalysis/1_1_1" component={normalChart1_1_1} />
        {/*<Route path="/app/workerList" component={workerList}/>
        <Route path="/app/pipeList" component={pipeList}/>
        <Route path="/app/projectList" component={projectList}/>
        <Route path="/app/adminList" component={adminList}/>
        <Route path="/app/addWorker" component={addWorker}/>
        <Route path="/app/addPipe" component={addPipe}/>
        <Route path="/app/addProject" component={addProject}/>
        <Route path="/app/pipeLocation" component={pipeLocation}/>
        <Route path="/app/projectProgress" component={projectProgress}/>
        <Route path="/app/customAnalysis" component={customAnalysis}/>
        <Route path="/app/adminSetting" component={adminSetting}/>
        <Route path="/app/instruction" component={instruction}/>
    <Route path="/app/photos" component={photos}/>*/}
    </div>
    );
  }
}
export default rightSide;