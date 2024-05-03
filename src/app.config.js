export default defineAppConfig({
  pages: [
    'pages/login/login',

    'pages/room/room',
    'pages/user/user',
    
    // 'template/user/index/index',
  ],
  subpackages: [
    {
      "root": "template/user",
      "name": "user",
      "pages": [
        "index/index"
      ],
      "independent": false
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/room/room',
        text: '最新',
      },
      {
        pagePath: 'pages/user/user',
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
