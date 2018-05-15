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
                title : {
                    text: '管道工程管理可视化平台访问数据',
                    subtext: '数据来源自后台管理系统',
                    x:'center'
                },
                textStyle:{
                    fontFamily:'Microsoft YaHei'
                },
                backgroundColor: '#FFFFFF',
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','GitHub跳转','博客跳转','个人网站跳转','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'GitHub跳转'},
                            {value:234, name:'博客跳转'},
                            {value:135, name:'个人网站跳转'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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

    //修改X轴字体颜色
    changeXFontColor=(e)=>{
        e.persist();//防止频繁触发
        this.setState({
            option: Object.assign({},this.state.option,{xAxis:{
                axisLabel:{
                    color:e.target.value,
                }
            }})
        });
    }

    //修改X轴字体大小
    changeXFontSize = (value) => {
        this.setState({
            option: Object.assign({},this.state.option,{xAxis:{
                axisLabel:{
                    fontSize:value,
                }
            }})
        });
    }

    //修改X轴名称
    changeXName=(e)=>{
        e.persist();
        this.setState({
            option: Object.assign({},this.state.option,{xAxis: {
                    type: this.state.option.xAxis.type,
                    data: this.state.option.xAxis.data,
                    name:e.target.value,
                    axisLabel:this.state.option.xAxis.axisLabel
                }})
        });
    }

    //修改Y轴字体颜色
    changeYFontColor = (e) => {
        e.persist();//防止频繁触发
        this.setState({
            option: Object.assign({},this.state.option,{yAxis:{
                axisLabel:{
                    color:e.target.value,
                }
            }})
        });
    }

    //修改Y轴字体大小
    changeYFontSize = (value) => {
        this.setState({
            option: Object.assign({},this.state.option,{yAxis:{
                axisLabel:{
                    fontSize:value,
                }
            }})
        });
    }

    //修改Y轴名称
    changeYName=(e)=>{
        e.persist();
        this.setState({
            option: Object.assign({},this.state.option,{yAxis: {
                    type: this.state.option.yAxis.type,
                    name: e.target.value,
                    axisLabel:this.state.option.yAxis.axisLabel
                }})
        });
    }

    //修改静态数据X
    changeDataX=(e)=>{
        e.persist();
        const data = e.target.value.split(',')
        // console.log(data)
        this.setState({
            option: Object.assign({},this.state.option,{xAxis: {
                type: this.state.option.xAxis.type,
                data: data,
                name:this.state.option.xAxis.name,
                axisLabel:this.state.option.xAxis.axisLabel
            }})
        });
    }

    //修改静态数据Y
    changeDataY=(e)=>{
        e.persist();
        const data = e.target.value.split(',')
        // console.log(data)
        this.setState({
            option: Object.assign({},this.state.option,{series: [{
                data: data,
                type: this.state.option.series[0].type
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
                        changeXFontColor={this.changeXFontColor.bind(this)}
                        changeXFontSize={this.changeXFontSize.bind(this)}
                        changeXName={this.changeXName.bind(this)}
                        changeYFontColor={this.changeYFontColor.bind(this)}
                        changeYFontSize={this.changeYFontSize.bind(this)}
                        changeYName={this.changeYName.bind(this)}
                        //数据部分
                        changeDataX={this.changeDataX.bind(this)}
                        changeDataY={this.changeDataY.bind(this)}
                        readCsvFile={this.readCsvFile.bind(this)}
                        //交互部分
                        addAxisPointer={this.addAxisPointer.bind(this)}
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
