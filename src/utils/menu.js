const allMenu = [
    {
      name: '首页',
      url: 'app/index',
      icon: 'home',
    }, {
      name: '数据管理',
      url: '',
      icon: 'database',
      children: [
        { name: '工人列表', url: 'app/workerList' },
        { name: '管道列表', url: 'app/pipeList' },
        { name: '项目列表', url: 'app/projectList' },
        { name: '管理员列表', url: 'app/adminList' }
      ]
    }, {
      name: '添加数据',
      url: '',
      icon: 'file-add',
      children: [
        { name: '添加工人', url: 'app/addWorker' },
        { name: '添加管道', url: 'app/addPipe' },
        { name: '添加项目', url: 'app/addProject' },
      ],
    }, {
      name: '可视化分析',
      url: '',
      icon: 'area-chart',
      children: [
        { name: '管道分布', url: 'app/pipeLocation' },
        { name: '项目进度', url: 'app/projectProgress' },
        { name: '自定义分析', url: 'app/customAnalysis' },
        { name: '项目实景', url: 'app/photos' }
      ],
    }, {
      name: '设置',
      url: '',
      icon: 'setting',
      children: [
        { name: '管理员设置', url: 'app/adminSetting' },
      ],
    },{
      name: '说明',
      url: '',
      icon: 'profile',
      children: [
        { name: '项目说明', url: 'app/instruction' },
      ],
    }]
export default allMenu;