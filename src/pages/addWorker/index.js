import { Form, Input, Cascader, Select, Checkbox, Button, AutoComplete } from 'antd';
import React ,{Component} from 'react';
import './index.css';
import address from './address.js';
const FormItem = Form.Item;
const Option = Select.Option;
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
  //密码二次校验
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const departmentOptions = autoCompleteResult.map(department => (
      <AutoCompleteOption key={department}>{department}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit} style={{marginRight:'200px'}}>
      <FormItem
          {...formItemLayout}
          label="工号"
        >
          {getFieldDecorator('jobNumber', {
            rules: [{ required: true, message: '请输入您的工号!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="姓名"
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入您的姓名', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="常用邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '您输入的不是一个有效的邮箱地址!',
            }, {
              required: true, message: '请输入您的常用邮箱!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="登录密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入您的登录密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认您的密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        
        <FormItem
          {...formItemLayout}
          label="居住地址"
        >
          {getFieldDecorator('addresses', {
            initialValue: ['11', '1101', '110101'],
            rules: [{ type: 'array', required: true, message: '请选择你的住址!' }],
          })(
            <Cascader options={addresses} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="联系方式"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的联系方式!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="所在部门"
        >
          {getFieldDecorator('department', {
            rules: [{ required: true, message: '请输入你所在的部门!' }],
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
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('check', {
            valuePropName: 'checked',
          })(
            <Checkbox>本人保证以上所填信息属实</Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">确认添加</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;