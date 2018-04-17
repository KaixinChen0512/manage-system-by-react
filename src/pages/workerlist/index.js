
import React from 'react';
import { Table, Icon } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    filters: [{
      text: 'Joe',
      value: 'Joe',
    }, {
      text: 'Jim',
      value: 'Jim',
    }, {
      text: 'Submenu',
      value: 'Submenu',
      children: [{
        text: 'Green',
        value: 'Green',
      }, {
        text: 'Black',
        value: 'Black',
      }],
    }],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
      text: 'London',
      value: 'London',
    }, {
      text: 'New York',
      value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  }];
  
  const data = [];
  for(let i=1;i<=100;i++){
      data.push({
          key:i,
          name:`kayson ${i}`,
          age:Math.ceil(Math.random()*10)+20,
          address:`China ${i}`
      })
  }
  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

const workerList = () => (
    <Table columns={columns} dataSource={data} onChange={onChange}/>
);

export default workerList;