import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';

class page1_1_1 extends Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                xAxis: {
                    type: 'category',
                    data: this.state.data.x,
                    name:'X轴',
                    axisLabel:{
                        color:'#000000',
                        fontSize:'12'
                    }
                },
                yAxis: {
                    type: 'value',
                    name:'Y轴',
                    axisLabel:{
                        color:'#000000',
                        fontSize:'12'
                    }
                },
                series: [{
                    data: this.state.data.y,
                    type: 'bar'
                }],
                textStyle:{
                    fontFamily:'Microsoft YaHei'
                },
                backgroundColor: '#FFFFFF',
                
            },
            height:610,
            width:850,
            
        }
    }
    state={
        data:{
            x:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            y:[120, 200, 150, 80, 70, 110, 130]
        }
    }
    changeOption=(newOption)=>{
        this.setState({
            option: Object.assign({},this.state.option,newOption)
        })
    }
    changeHeight=(newHeight)=>{
        this.setState({
            height:newHeight
        })
    }
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
    render(){
        return (
            <div>
                <Row gutter={16}>
                    <Col span={17}>
                        <Middle 
                        option={this.state.option} 
                        chartHeight={this.state.height} 
                        chartWidth={this.state.width}
                        />
                    </Col>
                    <Col span={7}>
                        <Right 
                        option={this.state.option}
                        chartHeight={this.state.height} 
                        chartWidth={this.state.width}
                        changeOption={this.changeOption.bind(this)} 
                        changeHeight={this.changeHeight.bind(this)} 
                        changeWidth={this.changeWidth.bind(this)} 
                        changeGlobalFontFamily={this.changeGlobalFontFamily.bind(this)}
                        changeBackgroundColor={this.changeBackgroundColor.bind(this)}
                        changeXFontColor={this.changeXFontColor.bind(this)}
                        changeXFontSize={this.changeXFontSize.bind(this)}
                        changeYFontColor={this.changeYFontColor.bind(this)}
                        changeYFontSize={this.changeYFontSize.bind(this)}
                        addAxisPointer={this.addAxisPointer.bind(this)}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default page1_1_1;