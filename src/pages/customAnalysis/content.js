import React, {Component} from 'react';
import { Route } from 'react-router-dom';
// import { Layout } from 'antd';
import './content.css';
import chartDefault from './chartPages/pageDefault/index.js';
import chart1_1_1 from './chartPages/page1_1_1/index.js';
import chart1_1_2 from './chartPages/page1_1_2/index.js';
import chart2_1 from './chartPages/page2_1/index.js';
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

// const { Content } = Layout

class Contents extends Component {
  render() {
    return (
      <div>
        <Route exact path="/app/customAnalysis" component={chartDefault} />
        <Route exact path="/app/customAnalysis/1_1_1" component={chart1_1_1} />
        <Route exact path="/app/customAnalysis/1_1_2" component={chart1_1_2} />
        <Route exact path="/app/customAnalysis/2_1" component={chart2_1} />
      </div>

    );
  }
}
export default Contents;