import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import papa from 'papaparse';

class page1_1_1 extends Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title:{
                    text:'管道铺设情况一览',
                    subtext:'数据来源自中国化学工程第十六建设有限公司',
                    left:'center'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    name:'日期',
                    axisLabel:{
                        color:'#000000',
                        fontSize:'12'
                    }
                },
                yAxis: {
                    type: 'value',
                    name:'铺设数量',
                    axisLabel:{
                        color:'#000000',
                        fontSize:'12'
                    }
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
                ],
                textStyle:{
                    fontFamily:'Microsoft YaHei'
                },
                backgroundColor: '#FFFFFF',
                
            },
            height:610,
            width:830,
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

    render(){
        return (
            <div>
                <Row gutter={48}>
                    <Col span={16}>
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
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default page1_1_1;
