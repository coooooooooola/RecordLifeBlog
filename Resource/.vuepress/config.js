module.exports = {
  title: '冬日の秘境', //左上角网站标题
  description: 'Loading ...', //网站描述，会在首次loading页面时加载
  dest: 'dist', //vuepress build 的输出目录
  // 对于head来说, [tagName, { attrName: attrValue }, innerHTML?]
  head: [
    // DNS 预解析 dns-prefetch , 是为了优化图片加载的速度
    ['link', { rel: 'dns-prefetch', href: 'https://s2.loli.net' }],
    // 为document.head部分添加link标签
    ['link', { rel: 'icon', href: '@theme/images/avatar.jpg' }],
    // deploying a manifest
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],

  // 主题配置 （这里是在reco主题的基础上做自定义修改）
  themeConfig: {
    // 首页封面格言
    mottos: [
      {
        zh: '山中方一日，世上已千年',
        en: 'How time flies',
      },
    ],
    mottosStyle: {
      color: '#ffe8f6',
    },
    //首页封面大图, 注意这里传递的是一个数组
    heroImages: ['/cover.jpeg'],

    // 博客文章封面图
    covers: [
      'https://s2.loli.net/2022/06/19/feVXGT3QLhjA4Pb.webp', //阿瓦隆
      'https://s2.loli.net/2022/06/19/B2M1SYUiIkXVob5.webp', //男孩
      'https://s2.loli.net/2022/06/19/Lkird5zCs9aJ8lH.webp', //圣诞
      'https://s2.loli.net/2022/06/19/LGcwb9Uj3omAy4C.webp', //樱花在桌
      'https://s2.loli.net/2022/06/19/7yqp9J3LjuADmEM.webp', //fsn
      'https://s2.loli.net/2022/06/19/5jNDPgfdumQ2qYB.webp', //女孩
      'https://s2.loli.net/2022/06/19/hStRIp413swc26N.webp', // 四月是你的谎言
    ],

    // 顶部导航栏配置
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'tech',
        icon: 'reco-message',
        link: 'https://swtywang.gitbook.io/tech/',
      },

      {
        text: 'Gallery',
        icon: 'reco-account',
        link: '/gallery/',
      },
      {
        text: 'Bookmark',
        icon: 'reco-account',
        link: '/bookmark/',
      },
      {
        text: 'About',
        icon: 'reco-account',
        link: '/about/',
      },
      {
        text: 'Talk',
        icon: 'reco-account',
        link: '/talk/',
      },
    ],
    // 右侧侧边栏全局开启
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 博客配置
    blogConfig: {
      category: {
        location: 2, //在导航栏菜单中从左至右所占的位置，默认2
        text: 'Category', //默认文案 “分类”
      },
      tag: {
        location: 3, //在导航栏菜单中从左至右所占的位置，默认3
        text: 'Tag', //默认文案 “标签”
      },
    },

    // 社交信息
    socials: {
      github: 'https://github.com/xxx', //github
      gitlub: false, //gitlub
      gitee: 'https://gitee.com/xxxx', //gitee
      jianshu: 'https://www.jianshu.com/u/xxxx', //简书
      zhihu: 'https://www.zhihu.com/people/xxxx', //知乎
      toutiao: false, //头条
      juejin: 'https://juejin.im/user/xxxx', //掘金
      segmentfault: 'https://segmentfault.com/u/xxxx', //思否
      csdn: false, //CSDN
      wechat: '你的微信', //微信
      qq: '你的QQ', //QQ
    },

    // 其他部分
    type: 'blog', // 设置好网站首页，会显示HomeBlog.vue。如果注释掉，会显示Home.vue组件。
    anchorImage: '/loading.gif', //触发下拉图片设置
    logo: '/avatar.jpg', //导航栏左侧logo
    search: true, //顶部搜索栏，true表示开启搜索
    searchMaxSuggestions: 10, //输入所要搜索的内容之后，搜索提示的最大数量
    startYear: '2023', //项目开始时间
    lastUpdated: 'Last Updated', //最后更新的时间，显示在博客或文档底部
    author: 'swtywang', //网站搭建者名称
    authorAvatar: '/avatar.jpg', //网站搭建者avatar，会显示在首页
    record: "swtywang 's blog", // 记录，可以记录网站访问量，这里暂时先写description
    startYear: '2023', //底部网站运行开始时间
    codeTheme: 'tomorrow', //代码块中代码的样式，这里的主题选取自PrismJS中的prism-themes
    // 配置评论valine的appId和appKey, 我这边自定义配置写在Valine.vue中
    valineConfig: {},
    smoothScroll: true, //启用页面滚动效果
  },
  // 插件配置 (这里将插件分离出去，详见./config/plugins)
  plugins: [
    ['vuepress-plugin-cursor-effects'],
    // 背景樱花特效 https://github.com/JabinPeng/vuepress-plugin-sakura
    [
      'vuepress-plugin-sakura',
      {
        num: 16, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...', // 绝对路径
        },
      },
    ],
    // 图片懒加载 https://github.com/tolking/vuepress-plugin-img-lazy
    ['vuepress-plugin-img-lazy'],

    // 代码块复制代码功能 掘金风格 https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制',
        tip: {
          content: '复制成功!',
        },
      },
    ],
    // PWA插件 https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-pwa
    [
      '@vuepress/plugin-pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '新的异世界挑战出现！',
          buttonText: '冒险！冲！',
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true, //显示行号
  },
}
