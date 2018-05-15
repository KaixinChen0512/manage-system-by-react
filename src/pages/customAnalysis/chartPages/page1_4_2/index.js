import Middle from './middle.js';
import Right from './right.js';
import Draggable from 'react-draggable';
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
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            height: 610,
            width: 830,
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        }
    }

    componentDidMount=()=>{
        axios.post('http://localhost:3000/mapData/data1_4_2')
        .then(function(res){
            console.log(res.data)
            const dataBJ = res.data.dataBJ;
            const dataGZ = res.data.dataGZ;
            const dataSH = res.data.dataSH;
            const schema = res.data.schema;
            const itemStyle = res.data.itemStyle;
            const options= {
                backgroundColor: '#404a59',
                color: [
                    '#dd4444', '#fec42c', '#80F1BE'
                ],
                legend: {
                    bottom:'10px',
                    data: ['北京', '上海', '广州'],
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                },
                grid: {
                    x: '10%',
                    x2: 150,
                    y: '18%',
                    y2: '10%'
                },
                tooltip: {
                    padding: 10,
                    backgroundColor: '#222',
                    borderColor: '#777',
                    borderWidth: 1,
                    formatter: function (obj) {
                        var value = obj.value;
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                            + obj.seriesName + ' ' + value[0] + '日：'
                            + value[7]
                            + '</div>'
                            + schema[1].text + '：' + value[1] + '<br>'
                            + schema[2].text + '：' + value[2] + '<br>'
                            + schema[3].text + '：' + value[3] + '<br>'
                            + schema[4].text + '：' + value[4] + '<br>'
                            + schema[5].text + '：' + value[5] + '<br>'
                            + schema[6].text + '：' + value[6] + '<br>';
                    }
                },
                xAxis: {
                    type: 'value',
                    name: '日期',
                    nameGap: 16,
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    max: 31,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: 'AQI指数',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                visualMap: [
                    {
                        left: 'right',
                        top: '10%',
                        dimension: 2,
                        min: 0,
                        max: 250,
                        itemWidth: 30,
                        itemHeight: 120,
                        calculable: true,
                        precision: 0.1,
                        text: ['圆形大小：PM2.5'],
                        textGap: 30,
                        textStyle: {
                            color: '#fff'
                        },
                        inRange: {
                            symbolSize: [10, 70]
                        },
                        outOfRange: {
                            symbolSize: [10, 70],
                            color: ['rgba(255,255,255,.2)']
                        },
                        controller: {
                            inRange: {
                                color: ['#c23531']
                            },
                            outOfRange: {
                                color: ['#444']
                            }
                        }
                    },
                    {
                        left: 'right',
                        bottom: '5%',
                        dimension: 6,
                        min: 0,
                        max: 50,
                        itemHeight: 120,
                        calculable: true,
                        precision: 0.1,
                        text: ['明暗：二氧化硫'],
                        textGap: 30,
                        textStyle: {
                            color: '#fff'
                        },
                        inRange: {
                            colorLightness: [1, 0.5]
                        },
                        outOfRange: {
                            color: ['rgba(255,255,255,.2)']
                        },
                        controller: {
                            inRange: {
                                color: ['#c23531']
                            },
                            outOfRange: {
                                color: ['#444']
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '北京',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataBJ
                    },
                    {
                        name: '上海',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataSH
                    },
                    {
                        name: '广州',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataGZ
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

    //添加工具栏
    addTools=(flag)=>{
        if(flag){
            this.setState({
                option: Object.assign({},this.state.option,{toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                }
                })
            })
        }else{
            this.setState({
                option: Object.assign({},this.state.option,{toolbox: {
                    show: false
                }
                })
            })
        }
    }

    //添加图表拖拽功能
    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };
    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };
    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };
    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition} = this.state;
        return (
            <div>
                <Row gutter={48}>
                <Draggable zIndex={100} {...dragHandlers}>
                    <Col span={16}>
                        <Middle 
                        option={this.state.option} 
                        chartHeight={this.state.height} 
                        chartWidth={this.state.width}
                        />
                    </Col>
                 </Draggable>
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
                        addTools={this.addTools.bind(this)}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default page;
