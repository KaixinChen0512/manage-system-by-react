const allMenu = [
    {
      name: '首页',
      url: 'index',
      icon: 'home',
    }, {
      name: '数据管理',
      url: '',
      icon: 'database',
      children: [
        { name: '工人列表', url: 'workerList' },
        { name: '管道列表', url: 'pipeList' },
        { name: '项目列表', url: 'projectList' },
        { name: '管理员列表', url: 'adminList' }
      ]
    }, {
      name: '添加数据',
      url: '',
      icon: 'file-add',
      children: [
        { name: '添加工人', url: 'addWorker' },
        { name: '添加管道', url: 'addPipe' },
        { name: '添加项目', url: 'addProject' },
      ],
    }, {
      name: '可视化分析',
      url: '',
      icon: 'area-chart',
      children: [
        { name: '管道分布', url: 'pipeLocation' },
        { name: '项目进度', url: 'projectProgress' },
        { name: '自定义分析', url: 'customAnalysis' },
        { name: '项目实景', url: 'photos' }
      ],
    }, {
      name: '设置',
      url: '',
      icon: 'setting',
      children: [
        { name: '管理员设置', url: 'adminSetting' },
      ],
    },{
      name: '说明',
      url: '',
      icon: 'profile',
      children: [
        { name: '项目说明', url: 'instruction' },
      ],
    }]
export default allMenu;