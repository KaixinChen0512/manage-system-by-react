import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import axios from 'axios';
import papa from 'papaparse';
require('echarts/map/js/china.js');




const height = 610;

const width = 830;

class page extends Component{
    constructor(props){
        super(props);
        this.state = {
            option: {
                backgroundColor: '#404a59',
                textStyle:{
                    fontFamily:'Microsoft YaHei'
                },
                title: {
                    text: '管道分布情况',
                    // subtext: 'data from PM25.in',
                    // sublink: 'http://www.pm25.in',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            height: 610,
            width: 830,
        }
    }

    componentDidMount=()=>{
        axios.post('http://localhost:3000/mapData/data6_1')
        .then(function(res){
            console.log(res.data)
            const data = res.data.data;
            const geoCoordMap = res.data.geoCoordMap;
            const convertData = (data) =>{
                let res = [];
                for (let i = 0; i < data.length; i++) {
                    let geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            const options= {
                backgroundColor: '#404a59',
                textStyle:{
                    fontFamily:'Microsoft YaHei'
                },
                title: {
                    text: '管道分布情况',
                    // subtext: 'data from PM25.in',
                    // sublink: 'http://www.pm25.in',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x:'right',
                    data:['pm2.5'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series : [
                    {
                        name: '管道数量',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            };
            this.setState({
                option:Object.assign({},this.state.option,options)
            })
            console.log(this.state.option)
        }.bind(this))
        .catch(function(err){
            console.log(err)
        })
    }
    //修改图表配置
    changeOption=(newOption)=>{
        this.setState({
            option: Object.assign({},this.state.option,newOption)
        })
    }

    //修改图表高度
    changeHeight=(newHeight)=>{
        this.setState({
            height:newHeight
        })
    }

    //修改图表宽度
    changeWidth=(newWidth)=>{
        this.setState({
            width:newWidth
        })
    }

    //修改全局字体样式
    changeGlobalFontFamily = (value) =>{
    this.setState({
        option: Object.assign({},this.state.option,{
            textStyle:{
                fontFamily:value
        }})
    });
    }

    //修改全局背景颜色
    changeBackgroundColor = (e) => {
        e.persist();//防止频繁触发
        this.setState({
            option: Object.assign({},this.state.option,{backgroundColor: e.target.value})
        })
    };

    //修改主标题
    // changeTitle=(e)=>{
    //     e.persist();
    //     this.setState({
    //         option: Object.assign({},this.state.option,{title:{
    //                 text:e.target.value,
    //                 subtext:this.state.option.title.subtext,
    //                 left:this.state.option.title.left
    //             }})
    //     });
    // }

    //修改副标题
    changeSubTitle=(e)=>{
        e.persist();
        this.setState({
            option: Object.assign({},this.state.option,{title:{
                    text:this.state.option.title.text,
                    subtext:e.target.value,
                    left:this.state.option.title.left
                }})
        });
    }

    //修改静态数据1
    changeData1=(e)=>{
        e.persist();
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({
            option: Object.assign({},this.state.option,{series: [
                {
                    type:this.state.option.series[0].type,
                    layout: this.state.option.series[0].layout,
                    itemStyle: this.state.option.series[0].itemStyle,
                    lineStyle: this.state.option.series[0].lineStyle,
                    data: JSON.parse(e.target.value),
                    links: this.state.option.series[0].links
                }
            ]})
        });
    }

    //修改静态数据2
    changeData2=(e)=>{
        e.persist();
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({
            option: Object.assign({},this.state.option,{series: [
                {
                    type:this.state.option.series[0].type,
                    layout: this.state.option.series[0].layout,
                    itemStyle: this.state.option.series[0].itemStyle,
                    lineStyle: this.state.option.series[0].lineStyle,
                    data: this.state.option.series[0].data,
                    links: JSON.parse(e.target.value)
                }
            ]})
        });
    }

    //读取csv文件
    readCsvFile=(file,fileList)=>{
        // console.log(file.name)
        // console.log(fileList)
        papa.parse(file, {
            complete: function(results) {
                // this.setState({
                //     option: Object.assign({},this.state.option,{xAxis: {
                //         type: this.state.option.xAxis.type,
                //         data: results.data[0],
                //         name:this.state.option.xAxis.name,
                //         axisLabel:this.state.option.xAxis.axisLabel
                //     }})
                // });
                // this.setState({
                //     option: Object.assign({},this.state.option,{series: [{
                //         data: results.data[1],
                //         type: this.state.option.series[0].type
                //         }
                //     ]})
                // });
                console.log(results.data[0]);
                console.log(results.data[1]);
                
            }
        });
    }
    //添加坐标轴指示器
    addAxisPointer=(flag)=>{
        if(flag){
            this.setState({
                option: Object.assign({},this.state.option,{tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                }})
            });
        }else{
            this.setState({
                option: Object.assign({},this.state.option,{tooltip:{
                    trigger: '',
                    axisPointer: {
                        type: ''
                    }
                }})
            });
        }
    }

    //添加数据筛选功能
    addDataFilter=(flag)=>{
        if(flag){
            this.setState({
                option: Object.assign({},this.state.option,{legend:{
                    data:[this.state.option.series[0].name,this.state.option.series[1].name],
                    left:'right'
                }})
            });
        }else{
            this.setState({
                option: Object.assign({},this.state.option,{legend:{
                    data:null
                }})
            });
        }
    }

    //添加文本提示框功能
    addTextNotice=(flag)=>{
        if(flag){
            this.setState({
                option: Object.assign({},this.state.option,{tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                }})
            });
        }else{
            this.setState({
                option: Object.assign({},this.state.option,{tooltip: null})
            });
        }
    }

    render(){
        return (
            <div>
                <Row gutter={48}>
                    <Col span={16}>
                        <Middle 
                        option={this.state.option} 
                        chartHeight={height} 
                        chartWidth={width}
                        />
                    </Col>
                    <Col span={8}>
                        <Right 
                        option={this.state.option}
                        //样式部分
                        chartHeight={height} 
                        chartWidth={width}
                        changeOption={this.changeOption.bind(this)} 
                        changeHeight={this.changeHeight.bind(this)} 
                        changeWidth={this.changeWidth.bind(this)} 
                        changeGlobalFontFamily={this.changeGlobalFontFamily.bind(this)}
                        changeBackgroundColor={this.changeBackgroundColor.bind(this)}
                        // changeTitle={this.changeTitle.bind(this)}
                        changeSubTitle={this.changeSubTitle.bind(this)}
                        //数据部分
                        readCsvFile={this.readCsvFile.bind(this)}
                        changeData1={this.changeData1.bind(this)}
                        changeData2={this.changeData2.bind(this)}
                        //交互部分
                        addAxisPointer={this.addAxisPointer.bind(this)}
                        addDataFilter={this.addDataFilter.bind(this)}
                        addTextNotice={this.addTextNotice.bind(this)}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default page;
