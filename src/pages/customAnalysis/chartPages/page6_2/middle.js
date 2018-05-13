import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import './middle.css';
require('echarts/map/js/china.js');
// let base = +new Date(2008, 8, 0);
// let oneDay = 24 * 3600 * 1000;
// let date = [];

// let data = [Math.random() * 300];

// for (var i = 1; i < 3650; i++) {
//     var now = new Date(base += oneDay);
//     date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
//     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
// }



class chart extends Component {

    render() {
        return (
            <ReactEcharts
                option={this.props.option}
                style={{height: `${this.props.chartHeight}px`, width: `${this.props.chartWidth}px`}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default chart;