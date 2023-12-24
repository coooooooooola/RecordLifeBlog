// 这里封装博客所需要用到的插件

module.exports = [
  //为博客文章自动随机添加名人名言或其他，可自定义样式和内容的插件。 https://github.com/zpj80231/vuepress-plugin-boxx
  ['vuepress-plugin-boxx'],

  // 添加动态标题的插件  https://github.com/moefyit/vuepress-plugin-dynamic-title
  [
    'vuepress-plugin-dynamic-title',
    {
      showIcon: '/avatar.jpg',
      showText: '',
      hideIcon: '/avatar.jpg',
      hideText: '',
      recoverTime: 2000
    }
  ],

  //光标效果的插件 https://github.com/moefyit/vuepress-plugin-cursor-effects
  [
    'vuepress-plugin-cursor-effects'
    // {
    //     size: 2, // size of the particle, default: 2
    //     shape: ['star' | 'circle'], // shape of the particle, default: 'star'
    //     zIndex: 999999999, // z-index property of the canvas, default: 999999999
    // }
  ],

  // 气泡效果的插件 https://github.com/chenxuan0000/vue-canvas-effect/blob/master/document/README.md
  [
    // 'vue-canvas-effect'
  ],

  // 背景樱花特效 https://github.com/JabinPeng/vuepress-plugin-sakura
  [
    'vuepress-plugin-sakura',
    {
      num: 16, // 默认数量
      show: true, //  是否显示
      zIndex: -1, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...' // 绝对路径
      }
    }
  ],
//TODO:音乐播放器

  // 图片懒加载
  // https://github.com/tolking/vuepress-plugin-img-lazy
  ['vuepress-plugin-img-lazy'],

  // 代码块复制代码功能 掘金风格
  // https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy
  [
    'vuepress-plugin-nuggets-style-copy',
    {
      copyText: '复制',
      tip: {
        content: '复制成功!'
      }
    }
  ],
  

  // PWA插件
  // https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-pwa
  [
    '@vuepress/plugin-pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '新的异世界挑战出现！',
        buttonText: '冒险！冲！'
      }
    }
  ],

]
