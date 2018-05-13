import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import papa from 'papaparse';
import axios from 'axios';
import { Button } from 'antd/lib/radio';
import echarts from 'echarts';
require('echarts/map/js/china.js');

class page extends Component{
    constructor(props){
        super(props);
        this.state = {
            option: {},
            height: 610,
            width: 830,
        }
    }

    test=()=>{
        // fetch('http://localhost:3000/events',{
        //     method:"GET"
        // })
        // .then((res)=>{
        //     console.log(res)
        // })
    axios.post('http://localhost:3000/events')
    .then(function (response) {
        // console.log('data=',response.data.data);
        // console.log('type=',typeof(response.data.data));
        var dataArray = response.data.data;

        var hStep = 300 / (dataArray.length - 1);
        var busLines = [].concat.apply([], dataArray.map(function (busLine, idx) {
            var prevPt;
            var points = [];
            for (var i = 0; i < busLine.length; i += 2) {
                var pt = [busLine[i], busLine[i + 1]];
                if (i > 0) {
                    pt = [
                        prevPt[0] + pt[0],
                        prevPt[1] + pt[1]
                    ];
                }
                prevPt = pt;

                points.push([pt[0] / 1e4, pt[1] / 1e4]);
            }
            return {
                coords: points,
                lineStyle: {
                    normal: {
                        color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                    }
                }
            };
        }));
        console.log('lines=',busLines)
        var options = {
            title: {
                    subtext: '点地图范例',
                    left: 'center'
                },
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                },
                backgroundColor: '',
            bmap: {
                center: [116.46, 39.92],
                zoom: 10,
                roam: true,
                mapStyle: {
                  'styleJson': [
                    {
                      'featureType': 'water',
                      'elementType': 'all',
                      'stylers': {
                        'color': '#031628'
                      }
                    },
                    {
                      'featureType': 'land',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#000102'
                      }
                    },
                    {
                      'featureType': 'highway',
                      'elementType': 'all',
                      'stylers': {
                        'visibility': 'off'
                      }
                    },
                    {
                      'featureType': 'arterial',
                      'elementType': 'geometry.fill',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'arterial',
                      'elementType': 'geometry.stroke',
                      'stylers': {
                        'color': '#0b3d51'
                      }
                    },
                    {
                      'featureType': 'local',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'railway',
                      'elementType': 'geometry.fill',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'railway',
                      'elementType': 'geometry.stroke',
                      'stylers': {
                        'color': '#08304b'
                      }
                    },
                    {
                      'featureType': 'subway',
                      'elementType': 'geometry',
                      'stylers': {
                        'lightness': -70
                      }
                    },
                    {
                      'featureType': 'building',
                      'elementType': 'geometry.fill',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'all',
                      'elementType': 'labels.text.fill',
                      'stylers': {
                        'color': '#857f7f'
                      }
                    },
                    {
                      'featureType': 'all',
                      'elementType': 'labels.text.stroke',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'building',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#022338'
                      }
                    },
                    {
                      'featureType': 'green',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#062032'
                      }
                    },
                    {
                      'featureType': 'boundary',
                      'elementType': 'all',
                      'stylers': {
                        'color': '#465b6c'
                      }
                    },
                    {
                      'featureType': 'manmade',
                      'elementType': 'all',
                      'stylers': {
                        'color': '#022338'
                      }
                    },
                    {
                      'featureType': 'label',
                      'elementType': 'all',
                      'stylers': {
                        'visibility': 'off'
                      }
                    }
                  ]
                }
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: busLines,
                silent: true,
                lineStyle: {
                    normal: {
                        // color: '#c23531',
                        // color: 'rgb(200, 35, 45)',
                        opacity: 0.2,
                        width: 1
                    }
                },
                progressiveThreshold: 500,
                progressive: 200
            }, {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: busLines,
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                effect: {
                    constantSpeed: 20,
                    show: true,
                    trailLength: 0.1,
                    symbolSize: 1.5
                },
                zlevel: 1
            }]
        };
        this.setState({
            option: Object.assign({},this.state.option,options)
        })
        console.log('new this.state.option=',this.state.option)
    }.bind(this))
    .catch(function (error) {
        console.log(error);
    });
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
                        <Button onClick={this.test}>1111</Button>
                        <Middle 
                        option={this.state.option} 
                        chartHeight={this.state.height} 
                        chartWidth={this.state.width}
                        />
                    </Col>
                    <Col span={8}>
                        <Right 
                        option={this.state.option}
                        //样式部分
                        chartHeight={this.state.height} 
                        chartWidth={this.state.width}
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
