export default defineAppConfig({
  pages: [
    'pages/login/login',
    
    'pages/user/user',

    'pages/admin-room/admin-room',
    'pages/admin-user/admin-user',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/admin-room/admin-room',
        text: '最新',
      },
      {
        pagePath: 'pages/admin-user/admin-user',
        text: '热门',
      },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#eeeeee',
    borderStyle: 'white',
    
    // 是否开启自定义底部选项卡
    custom: true,
  },
})
