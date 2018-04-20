import "./index.css";
import React,{Component} from 'react';
import { Table, Icon,Button,Input } from 'antd';
// import Json2csvParser from 'json2csv;'
class workerList extends Component {
  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
    selectedRowKeys:[],
    selectedRows:[],
    loading:false
  };
  //自定义查找功能
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');//g表示global全局搜索，i表示ignore care忽略大小写
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  };
  //导出到excel功能
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    // console.log(this.state.selectedRowKeys);
    this.state.selectedRowKeys.forEach(element => {
      this.state.selectedRows.push(data[element]);
    })
    // let out=this.state.selectedRows;
    // const fields=["key","name","age","address"];
    // const json2csvParser=new Json2csvParser({fields});
    // const csv =json2csvParser.parse(out);
    // console.log(csv);
    // let csvContent = "data:text/csv;charset=utf-8,";
    // this.state.selectedRows.forEach(function(rowArray){
    //   let row = rowArray.join(",");
    //   csvContent += row + "\r\n"; // add carriage return
    // }); 
    //  console.log(csvContent);
    //然后你可以使用JavaScript的window.open和encodeURI下载CSV文件的函数如下：
    // var encodedUri = encodeURI(csvContent);
    // window.open(encodedUri);
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        selectedRows:[],
        loading: false,
      });
    }, 1000);
    
  };
  
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const columns = [
      {
        title: '工号',
        dataIndex: 'jobNumber',
        key: 'jobNumber',
        sorter: (a, b) => a.jobNumber - b.jobNumber
      },
      {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    }, 
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email - b.email
    },
    {
      title: '居住地址',
      dataIndex: 'address',
      key: 'address',
      filters: [{
        text: '筛选条件1',
        value: '筛选条件1',
      }, {
        text: '筛选条件2',
        value: '筛选条件2',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length
    },
    {
      title: '联系方式',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      sorter: (a, b) => a.phoneNumber - b.phoneNumber
    },
    {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
      sorter: (a, b) => a.department - b.department
    }
    ];
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            导出到Excel
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}
const data = [];
for(let i=1;i<=100;i++){
    data.push({
        key:i,
        jobNumber:`2018WH${i}`,
        name:`kayson ${i}`,
        age:Math.ceil(Math.random()*10)+20,
        email:'********@163.com',
        address:'XX省XX市',
        phoneNumber:'13XXXXXXXXX',
        department:'XX事业部',

        
    })
}

export default workerList;