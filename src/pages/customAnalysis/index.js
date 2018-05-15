import React, { Component } from 'react';
import {Layout} from 'antd';
import './index.css';
import Top from './header.js';
import Contents from './content.js';
class Container extends Component{
	
	// render(){
	// 	return (
	// 			<div className="container">
	// 				<Row>
	// 					<Top />
	// 				</Row>
	// 				<Row gutter={16}>
	// 					{/*<Col span={3} style={{background:'#F7F8FA'}}>
	// 						<LeftSide />
	// 					</Col>*/}
	// 					<Col span={17}>
	// 						<Contents />
	// 					</Col>
	// 					<Col span={7} style={{background:'#F7F8FA'}}>
	// 						<RightSide />
	// 					</Col>
	// 				</Row>
	// 				{/*<iframe src="https://datav.aliyun.com/admin/screen/113071?spm=datav.10712463.0.0.5a193967DKz7aE" style={{height:'100%',width:'100%'}}/>*/}
	// 			</div>
	// 	)
	// }
	render() {
		return (
			<div style={{margin:'-24px'}}>
				<Layout>
					<Top />
					<Contents />
				</Layout>
			</div>
		);
	  }
}

export default Container;
