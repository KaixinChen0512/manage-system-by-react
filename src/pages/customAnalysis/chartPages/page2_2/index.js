import Middle from './middle.js';
import Right from './right.js';
import Draggable from 'react-draggable';
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import papa from 'papaparse';

class page extends Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title: {
                    text:'湖北省管道分布',
                        subtext:'数据来源自中国化学工程第十六建设有限公司',
                        left:'center'
                },
                textStyle:{
                            fontFamily:'Microsoft YaHei'
                        },
                backgroundColor: '#FFFFFF',
                series: [
                    {
                        name:'管道分布',
                        type:'treemap',
                        visibleMin: 300,
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        upperLabel: {
                            normal: {
                                show: true,
                                height: 30
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff'
                            }
                        },
                        levels: [
                        {
                            itemStyle: {
                                normal: {
                                    borderColor: '#777',
                                    borderWidth: 0,
                                    gapWidth: 1
                                }
                            },
                            upperLabel: {
                                normal: {
                                    show: false
                                }
                            }
                        },
                        {
                            itemStyle: {
                                normal: {
                                    borderColor: '#555',
                                    borderWidth: 5,
                                    gapWidth: 1
                                },
                                emphasis: {
                                    borderColor: '#ddd'
                                }
                            }
                        },
                        {
                            colorSaturation: [0.35, 0.5],
                            itemStyle: {
                                normal: {
                                    borderWidth: 5,
                                    gapWidth: 1,
                                    borderColorSaturation: 0.6
                                }
                            }
                        }
                        ],
                        data: [{
                            "value": 1904,
                            "name": "湖北省",
                            "children": [{
                                "value": 744,
                                "name": "武汉市",
                                "children": [{
                                    "value": 300,
                                    "name": "洪山区"
                                }, {
                                    "value": 450,
                                    "name": "江汉区"
                                }, {
                                    "value": 400,
                                    "name": "江岸区"
                                }, {
                                    "value": 680,
                                    "name": "汉阳区"
                                }]
                            }, {
                                "value": 200,
                                "name": "黄石市",
                                "children": [{
                                    "value": 200,
                                    "name": "大冶市"
                                }, {
                                    "value": 150,
                                    "name": "阳新县"
                                }, {
                                    "value": 120,
                                    "name": "黄石港区"
                                }]
                            }, {
                                "value": 450,
                                "name": "十堰市",
                                "children": [{
                                    "value": 400,
                                    "name": "丹江口市"
                                }, {
                                    "value": 300,
                                    "name": "张湾区"
                                }, {
                                    "value": 80,
                                    "name": "竹山县"
                                }]
                            }, {
                                "value": 600,
                                "name": "宜昌市",
                                "children": [{
                                    "value": 400,
                                    "name": "西陵区"
                                }, {
                                    "value": 500,
                                    "name": "枝江市"
                                }, {
                                    "value": 200,
                                    "name": "宜都市"
                                }]
                            }]
                        }]
                    }
                ]
            },
            height:610,
            width:830,
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        }
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
    changeTitle=(e)=>{
        e.persist();
        this.setState({
            option: Object.assign({},this.state.option,{title:{
                    text:e.target.value,
                    subtext:this.state.option.title.subtext,
                    left:this.state.option.title.left
                }})
        });
    }

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

    //修改静态数据
    changeData=(e)=>{
        e.persist();
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({
            option: Object.assign({},this.state.option,{series: [
                {
                    name:this.state.option.series[0].name,
                    type:this.state.option.series[0].type,
                    visibleMin: this.state.option.series[0].visibleMin,
                    label: this.state.option.series[0].label,
                    upperLabel: this.state.option.series[0].upperLabel,
                    itemStyle: this.state.option.series[0].itemStyle,
                    levels: this.state.option.series[0].levels,
                    data: JSON.parse(e.target.value)
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
                        chartHeight={this.state.height} 
                        chartWidth={this.state.width}
                        changeOption={this.changeOption.bind(this)} 
                        changeHeight={this.changeHeight.bind(this)} 
                        changeWidth={this.changeWidth.bind(this)} 
                        changeGlobalFontFamily={this.changeGlobalFontFamily.bind(this)}
                        changeBackgroundColor={this.changeBackgroundColor.bind(this)}
                        changeTitle={this.changeTitle.bind(this)}
                        changeSubTitle={this.changeSubTitle.bind(this)}
                        //数据部分
                        readCsvFile={this.readCsvFile.bind(this)}
                        changeData={this.changeData.bind(this)}
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
