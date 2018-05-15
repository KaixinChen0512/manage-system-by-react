import Middle from './middle.js';
import Right from './right.js';
import Draggable from 'react-draggable';
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import papa from 'papaparse';

class page1_1_1 extends Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title: {
                    text:'自动焊接机焊接参数',
                    subtext:'数据来源自中国化学工程第十六建设有限公司',
                    left:'center'
                },
                series: [
                    {
                        type: 'tree',
                        data: [{
                            "name": "自动焊参数",
                            "children": [{
                                "name": "基础记录部分",
                                "children": [
                                    {"name": "材质","value": '2'}, //碳钢=1、不锈钢=2、合金钢=3
                                    { "name": "外径","value": '800'}, //Φ100mm～Φ1600mm
                                    { "name": "壁厚","value": '26'}, //δ=3mm～30mm
                                    { "name": "焊接选材","value": '0512' }, //焊材型号
                                    { "name": "单线图号","value": '4116'}
                                ]
                            }, {
                                "name": "焊接部分",
                                "children": [
                                    {"name": "焊接电流","value": '100'}, //75A-150A
                                    { "name": "焊接电压","value": '12'}, //打底焊11-13V，填充焊20-28V
                                    { "name": "送丝速度","value": '8'}, //6～17cm/min
                                    { "name": "气体流量","value": '8'}, //8-15L/min
                                    { "name": "焊枪位置","value": '160'}, //以角度标识，以平焊为0°为例
                                    { "name": "焊枪摆动角度","value": '36'}, //按照焊缝坡口宽度考虑，焊枪沿焊缝宽度方向移动，3mm～45 mm）
                                    { "name": "焊枪角度","value": '55'}, //沿焊缝方向30°～75°
                                    { "name": "焊枪所处焊层","value": '3'} //打底=1、填充=2、盖面=3
                                ]
                            }]
                        }],
                        top: '1%',
                        left: '11%',
                        bottom: '1%',
                        right: '20%',
                        symbolSize: 12,
                        label: {
                            normal: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 14
                            }
                        },
                        leaves: {
                            label: {
                                normal: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                }
                            }
                        },
                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }
                ],
                textStyle:{
                    fontFamily:'Microsoft YaHei'
                },
                backgroundColor: '#FFFFFF',
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
                    data: JSON.parse(e.target.value),
                    top: this.state.option.series[0].top,
                    left: this.state.option.series[0].left,
                    bottom: this.state.option.series[0].bottom,
                    right: this.state.option.series[0].right,
                    symbolSize:this.state.option.series[0].symbolSize,
                    expandAndCollapse: this.state.option.series[0].expandAndCollapse,
                    animationDuration: this.state.option.series[0].animationDuration,
                    animationDurationUpdate: this.state.option.series[0].animationDurationUpdate
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
export default page1_1_1;
