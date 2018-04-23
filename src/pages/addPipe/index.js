import { Form, Input, Cascader, Checkbox, Button, AutoComplete,DatePicker} from 'antd';
import React ,{Component} from 'react';
import './index.css';
import address from './address.js';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const AutoCompleteOption = AutoComplete.Option;

const addresses = address;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    //！！的作用是将value强制转换成布尔型
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  
  //输入网站时自动补全
  handleDepartmentChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['-1期', '-2期', '-3期','-4期'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: '请选择日期！' }],
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
    const departmentOptions = autoCompleteResult.map(department => (
      <AutoCompleteOption key={department}>{department}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit} style={{marginRight:'200px'}}>
      <FormItem
          {...formItemLayout}
          label="管道编号"
        >
          {getFieldDecorator('pipeNumber', {
            rules: [{ required: true, message: '请输入管道编号!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="管道所属项目名称"
        >
          {getFieldDecorator('projectName', {
            rules: [{ required: true, message: '请输入管道所属项目名称!' }],
          })(
            <AutoComplete
              dataSource={departmentOptions}
              onChange={this.handleDepartmentChange}
              placeholder="武汉-1期"
            >
              <Input />
            </AutoComplete>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="管道所在地区"
        >
          {getFieldDecorator('addresses', {
            initialValue: ['11', '1101', '110101'],
            rules: [{ type: 'array', required: true, message: '请选择管道所在地区!' }],
          })(
            <Cascader options={addresses} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="焊接参数预设"
        >
        <div>
            <span>管道外径:</span><Input />
            <span>管道壁厚:</span><Input />
            <span>焊接电流:</span><Input />
            <span>焊接电压:</span><Input />
            <span>送丝速度:</span><Input />
            <span>气体流量:</span><Input />
            <span>焊枪位置:</span><Input />
            <span>摆动角度:</span><Input />
        </div>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="管道焊接完成日期"
        >
          {getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('check', {
            valuePropName: 'checked',
          })(
            <Checkbox>请确认管道信息添加准确</Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" >确认添加</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;