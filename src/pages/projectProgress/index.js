import React from 'react';
import ReactEcharts from 'echarts-for-react';

let xAxisData = [];
let data = [];
for (let i = 0; i < 50; i++) {
    xAxisData.push(i);
    data.push(Math.ceil(Math.random()*70));
}

const option = {
    title: {
        text: '近50天每日管道焊接数量',
        left: 'center',
        textStyle: {
            color: '#ccc',
            fontSize: 18,
        },
        padding: 10,
    },
    backgroundColor: '#404040',
    xAxis: [{
        show: true,
        data: xAxisData,
        axisLabel: {
            textStyle: {
                color: '#ccc'
            }
        }
    }, {
        show: false,
        data: xAxisData
    }],
    tooltip: {},
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#08263f'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
        name: 'Simulate Shadow',
        type: 'line',
        data: data,
        z: 2,
        showSymbol: false,
        animationDelay: 0,
        animationEasing: 'linear',
        animationDuration: 1200,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        areaStyle: {
            normal: {
                color: '#08263a',
                shadowBlur: 50,
                shadowColor: '#000'
            }
        }
    }, {
        name: '完成项目数',
        type: 'bar',
        data: data,
        xAxisIndex: 1,
        z: 3,
        itemStyle: {
            normal: {
                barBorderRadius: 5
            }
        }
    }],
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function (idx) {
        return idx * 20;
    },
    animationDelayUpdate: function (idx) {
        return idx * 20;
    }
};
const EchartsProjects = () => (
    <ReactEcharts
        option={option}
        style={{height: '550px', width: '1200px%'}}
        className={'react_for_echarts'}
    />
);

export default EchartsProjects;