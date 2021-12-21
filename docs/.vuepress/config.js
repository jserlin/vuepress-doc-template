module.exports = {
  theme: 'reco',
  title: 'VuePress + Element',
  description: 'VuePress搭建Element的组件库文档教程示例代码',
  base: '/',
  port: '8080',
  themeConfig: { // 新增代码
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/comps/': ['/comps/', '/comps/select.md']
    },
    subSidebar: 'auto'
  },
  head: [],
  plugins: [ 'demo-container' ],
  markdown: {}
}