import Middle from './middle.js';
import Right from './right.js';
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import papa from 'papaparse';

class page extends Component{
    constructor(props){
        super(props);
        this.state = {
            option: {
                title: {
                    subtext: '三种材质管道焊接参数概览',
                    left: 'center'
                },
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                },
                backgroundColor: '#333',
                legend: {
                    bottom: 30,
                    data: ['碳钢', '不锈钢', '合金钢'],
                    itemGap: 20,
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                tooltip: {
                    padding: 10,
                    backgroundColor: '#222',
                    borderColor: '#777',
                    borderWidth: 1,
                },
                parallelAxis: [{
                    dim: 0,
                    name: '外径'
                },
                {
                    dim: 1,
                    name: '壁厚'
                },
                {
                    dim: 2,
                    name: '焊接电流'
                },
                {
                    dim: 3,
                    name: '焊接电压'
                },
                {
                    dim: 4,
                    name: '送丝速度'
                },
                {
                    dim: 5,
                    name: '气体流量'
                },
                {
                    dim: 6,
                    name: '焊枪位置'
                },
                {
                    dim: 7,
                    name: '摆动角度'
                }],
                visualMap: {
                    show: true,
                    min: 0,
                    max: 150,
                    dimension: 2,
                    inRange: {
                        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse(),
                    }
                },
                parallel: {
                    left: '5%',
                    right: '18%',
                    bottom: 100,
                    top: 100,
                    parallelAxisDefault: {
                        type: 'value',
                        name: 'AQI指数',
                        nameLocation: 'end',
                        nameGap: 20,
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#aaa'
                            }
                        },
                        axisTick: {
                            lineStyle: {
                                color: '#777'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                },
                series: [{
                    name: '碳钢',
                    type: 'parallel',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: [['757', '5.76', '110.69', '24.24', '12', '9.17', '82', '32'], ['760', '3.57', '130.15', '22.36', '13', '14.08', '110', '32'], ['653', '15.64', '126.81', '27.73', '14', '14.39', '138', '27'], ['467', '7.25', '76.76', '17.53', '7', '8.47', '344', '31'], ['1505', '4.77', '114.48', '22.92', '13', '10.77', '169', '32'], ['328', '29.76', '92.16', '11.93', '13', '12.89', '173', '11'], ['1577', '13.78', '110.60', '25.93', '8', '12.40', '326', '43'], ['565', '4.18', '92.23', '18.25', '14', '12.36', '223', '41'], ['1123', '12.07', '122.27', '18.22', '9', '10.20', '299', '40'], ['1183', '22.84', '136.82', '15.18', '11', '8.21', '30', '43']]
                },
                {
                    name: '不锈钢',
                    type: 'parallel',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: [['1279', '15.36', '91.33', '25.51', '10', '12.63', '48', '17'], ['615', '9.61', '83.32', '12.71', '14', '14.82', '248', '9'], ['776', '28.35', '118.46', '14.87', '12', '8.63', '134', '42'], ['921', '29.02', '113.36', '20.73', '8', '14.84', '355', '3'], ['1037', '8.05', '86.24', '13.65', '7', '14.31', '77', '41'], ['1549', '13.07', '111.73', '25.88', '16', '14.83', '226', '32'], ['882', '7.89', '133.40', '14.95', '13', '10.58', '255', '35'], ['874', '16.32', '80.51', '23.71', '15', '8.66', '105', '23'], ['357', '12.99', '129.90', '19.91', '7', '9.10', '220', '26'], ['415', '23.60', '85.51', '11.10', '16', '14.29', '256', '13']]
                },
                {
                    name: '合金钢',
                    type: 'parallel',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: [['375', '10.49', '80.20', '11.49', '8', '8.05', '114', '17'], ['442', '13.64', '98.49', '18.96', '15', '12.43', '262', '18'], ['1387', '7.95', '106.49', '18.30', '11', '9.00', '174', '44'], ['805', '18.22', '137.27', '25.00', '10', '13.81', '62', '39'], ['1126', '21.42', '124.47', '23.98', '9', '10.40', '140', '24'], ['962', '19.17', '132.40', '17.07', '15', '12.73', '258', '25'], ['552', '16.92', '148.43', '25.09', '12', '13.36', '237', '17'], ['115', '28.64', '138.31', '19.01', '12', '10.70', '301', '42'], ['1418', '28.47', '105.19', '16.37', '16', '10.89', '331', '41'], ['1566', '13.22', '86.99', '23.10', '12', '11.77', '291', '30']]
                }]
            },
            height: 610,
            width: 830,
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
