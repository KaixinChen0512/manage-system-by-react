import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './content.css';
import chartDefault from './chartPages/pageDefault/index.js';
import chart1_1_1 from './chartPages/page1_1_1/index.js';
import chart1_1_2 from './chartPages/page1_1_2/index.js';
import chart1_2_1 from './chartPages/page1_2_1/index.js';
import chart1_2_2 from './chartPages/page1_2_2/index.js';
import chart1_2_3 from './chartPages/page1_2_3/index.js';
import chart1_3_1 from './chartPages/page1_3_1/index.js';
import chart1_3_2 from './chartPages/page1_3_2/index.js';
import chart1_4_1 from './chartPages/page1_4_1/index.js';
import chart1_4_2 from './chartPages/page1_4_2/index.js';
import chart2_1 from './chartPages/page2_1/index.js';
import chart2_2 from './chartPages/page2_2/index.js';
import chart3_1 from './chartPages/page3_1/index.js';
import chart3_2 from './chartPages/page3_2/index.js';
import chart4_1 from './chartPages/page4_1/index.js';
import chart6_1 from './chartPages/page6_1/index.js';
import chart6_2 from './chartPages/page6_2/index.js';

class Contents extends Component {
  render() {
    return (
      <div>
        <Route exact path="/app/customAnalysis" component={chartDefault} />
        <Route exact path="/app/customAnalysis/1_1_1" component={chart1_1_1} />
        <Route exact path="/app/customAnalysis/1_1_2" component={chart1_1_2} />
        <Route exact path="/app/customAnalysis/1_2_1" component={chart1_2_1} />
        <Route exact path="/app/customAnalysis/1_2_2" component={chart1_2_2} />
        <Route exact path="/app/customAnalysis/1_2_3" component={chart1_2_3} />
        <Route exact path="/app/customAnalysis/1_3_1" component={chart1_3_1} />
        <Route exact path="/app/customAnalysis/1_3_2" component={chart1_3_2} />
        <Route exact path="/app/customAnalysis/1_4_1" component={chart1_4_1} />
        <Route exact path="/app/customAnalysis/1_4_2" component={chart1_4_2} />
        <Route exact path="/app/customAnalysis/2_1" component={chart2_1} />
        <Route exact path="/app/customAnalysis/2_2" component={chart2_2} />
        <Route exact path="/app/customAnalysis/3_1" component={chart3_1} />
        <Route exact path="/app/customAnalysis/3_2" component={chart3_2} />
        <Route exact path="/app/customAnalysis/4_1" component={chart4_1} />
        <Route exact path="/app/customAnalysis/6_1" component={chart6_1} />
        <Route exact path="/app/customAnalysis/6_2" component={chart6_2} />
      </div>
    );
  }
}
export default Contents;