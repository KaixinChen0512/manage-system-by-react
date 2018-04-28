import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import './normalChart1_1_1.css';

// let base = +new Date(2008, 8, 0);
// let oneDay = 24 * 3600 * 1000;
// let date = [];

// let data = [Math.random() * 300];

// for (var i = 1; i < 3650; i++) {
//     var now = new Date(base += oneDay);
//     date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
//     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
// }

const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

class normalChart1 extends Component {
    render() {
        return (
            <ReactEcharts
                option={option}
                style={{height: '520px', width: '600px'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default normalChart1;