<!-- 留言板组件 -->
<template>
  <!-- 公共布局 -->
  <!-- $withBase是Vuepress的工具函数, 见https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6 -->
  <Common :sidebar="false">
    <div class="container">
      <div class="author-social">
        <ModuleTransition delay="0.04" duration="0.5">
          <img
            class="logo"
            v-if="$themeConfig.authorAvatar"
            :src="$withBase($themeConfig.authorAvatar)"
            alt="author-avatar"
          />
        </ModuleTransition>

        <ModuleTransition delay="0.08" duration="0.5">
          <div class="friendLinkContainer">
            <div class="friendLinkContent">
              <!-- typed展示输出的内容 -->
              <span id="typed1" class="type"></span>
              <span id="typed2" class="type"></span>
              <span id="typed3" class="type"></span>
              <span id="typed4" class="type"></span>
            </div>
          </div>
        </ModuleTransition>

        <!-- 友链提示板 -->
        <!-- <ModuleTransition delay="0.12" duration="0.5">
         
          <div class="friendLinkContainer">
            <p class="friendLinkTips">🎉 欢迎评论区留言友链信息，互换友链~</p>
            <div class="friendLinkContent">
              <span>985小硕，前百度/字节工程师，现在国企躺不平</span>
              <span>虽然已经年过三十，仍然心智不全，还有那么点社恐</span>
              <span
                >本打算学好技术混口饭吃，却发现行走江湖最不值钱的就是技术</span
              >
              <span
                >但是我不打算妥协，一条路走到黑吧，我的一生，注定是抗争的一生</span
              >
            </div>
          </div>
        </ModuleTransition> -->
        <!-- 评论区域 -->
        <!-- <ModuleTransition delay="0.12" duration="0.5">
         
          <Comments />
        </ModuleTransition> -->
      </div>
    </div>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'
import Comments from '@theme/components/Comments/Comments.vue'
// import { typingMagic } from "@theme/helpers/utils";
import Typed from 'typed.js'

export default {
  name: 'About',
  mixins: [moduleTransitonMixin],
  components: { Common, ModuleTransition, Comments },

  computed: {
    socials() {
      return this.$themeConfig.socials
    },
    // typed函数使用 https://github.com/mumu-pika/typed.js
    typedString1() {
      return new Typed('#typed1', {
        // stringsElement: "#typed-strings",
        strings: ['985小硕，前百度/字节工程师，现在国企半躺平（）'],
        typeSpeed: 80, //设置打字的速度，单位为毫秒，数值越大，打字速度越慢
        startDelay: 0, // 设置开始打字前的延迟
        showCursor: false //设置是否显示鼠标
      })
    },
    typedString2() {
      return new Typed('#typed2', {
        // stringsElement: "#typed-strings",
        strings: ['虽然已经年过三十，仍然心智不全，还有那么点社恐'],
        typeSpeed: 80, //设置打字的速度，单位为毫秒，数值越大，打字速度越慢
        startDelay: 5000, // 设置开始打字前的延迟
        showCursor: false //设置是否显示鼠标
      })
    },
    typedString3() {
      return new Typed('#typed3', {
        // stringsElement: "#typed-strings",
        strings: ['本打算学好技术混口饭吃，却发现行走江湖最不值钱的就是技术'],
        typeSpeed: 100, //设置打字的速度，单位为毫秒，数值越大，打字速度越慢
        startDelay: 10000, // 设置开始打字前的延迟
        showCursor: false //设置是否显示鼠标
      })
    },
    typedString4() {
      return new Typed('#typed4', {
        // stringsElement: "#typed-strings",
        strings: [
          '但是我不打算妥协，一条路走到黑吧，我的一生，注定是抗争的一生'
        ],
        typeSpeed: 100, //设置打字的速度，单位为毫秒，数值越大，打字速度越慢
        startDelay: 14000, // 设置开始打字前的延迟
        showCursor: false //设置是否显示鼠标
      })
    }
  },

  methods: {},
  mounted() {
    // 打字特效
    // typingMagic();
    // 开始打字
    this.typedString1.start()
    this.typedString2.start()
    this.typedString3.start()
    this.typedString4.start()
  },

  watch: {}
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
@require '../styles/mode.styl'
// 个人信息展示区域
.author-social
  position: relative
  display: flex
  margin 0 auto
  max-width 80rem
  height: 100vh
  flex-direction: column
  justify-self center
  text-align: center
  padding: 0 5rem
  // 个人图片
  .logo
    width: 8rem
    height: 8rem
    box-shadow: 0px 0px 40px rgba(60, 80, 180, 0.6)
    border: 2px solid #00aaff
    opacity: 1
    border-radius: 50%
    margin: 6rem auto 2rem auto
    transition: all 2s
  .logo:hover
    box-shadow: 0 0 20px #fff
    -webkit-box-shadow: 0 0 20px #fff
    transform: rotate(-360deg)
    -ms-transform: rotate(-360deg)
    /* IE 9 */
    -moz-transform: rotate(-360deg)
    /* Firefox */
    -webkit-transform: rotate(-360deg)
    /* Safari 和 Chrome */
    -o-transform: rotate(-360deg)
  // 博主留言整体信息区域
  .InfoContainer
    display: flex
    position relative
    flex-direction: column
    justify-content: center
    align-content: center
    width: 30rem
    height: 20rem
    padding: 2rem
    margin: 1rem auto
    border: 2px solid #ec7da1
    border-radius: 1rem
    // 这里设置伪元素是为了背景图片与内部的字体可以分别区分开透明度
    &::before
      content: ''
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      background-image: url("https://cdn.jsdelivr.net/gh/mumu-pika/MyBlogCDN/images/anime/pokemon.webp")
      background-size: cover
      background-repeat: no-repeat
      // background-position: right
      opacity: 0.5
      z-index -1
    .InfoContainer-textContainer
      display block
      height 10rem
      // background-color red

    // 展示的内容区域
    #typed1, #typed2, #typed3, #typed4
      display: inline-block
      margin: 0.6rem auto
      font-size: 1rem
      font-weight: 600
  // 友链留言
  .friendLinkContainer
    display block
    width 50%
    margin 0 auto
    border 2px groove var(--box-shadow-hover)
    .friendLinkTips
      font-weight 500
    .friendLinkContent
      display flex
      flex-direction column
      align-items: flex-start
      flex-flow: word-wrap
      padding 1rem
      background-color var(--background-color)
      box-shadow: var(--box-shadow-hover)
      color: var(--text-color)
      font-size: 1rem
      font-weight: 600
      opacity 0.8
      .type
        display: inline-block
        margin: 0 auto

  // 个人联系方式的小图标
  .socials
    margin: 3rem 0
    h1
      margin: 3rem 0
    .big
      font-size: x-large
      margin: 0 0.5rem
// 图标所需的颜色
.grey
  color: grey
.orange
  color: orange
.green
  color: green
.blue
  color: deepskyblue
.pink
  color: pink
.dgreen
  color: forestgreen
.black
  color: black
.coral
  color: coral
.crimson
  color: crimson
.indianred
  color: indianred
.lightskyblue
  color: lightskyblue
.lightsalmon
  color: lightsalmon
.dodgerblue
  color: dodgerblue
.forestgreen
  color: forestgreen

// ipad 平板
@media (max-width: $MQNarrow)
  .author-social
    padding: 0 1rem
    .InfoContainer
        display: flex
        flex-direction: column
        justify-content: center
        align-content: center
        width: 24rem
        height: 12rem
        padding: 2rem
        margin: 1rem auto
        border: 2px solid #ec7da1
        border-radius: 1rem
        &::before
          content: ''
          position: absolute
          width: 100%
          height: 100%
          top: 0
          left: 0
          background-image: url("https://cdn.jsdelivr.net/gh/mumu-pika/MyBlogCDN/images/anime/pokemon.webp")
          background-size: cover
          background-repeat: no-repeat
          // background-position: right
          opacity: 0.5
          z-index -1
        // 展示的内容区域
        #typed1, #typed2, #typed3, #typed4
          display: inline
          margin: 0.2rem auto
          font-size: 1rem
      .friendLinkContainer
        display block
        width 60%
        margin 0 auto
        border 2px groove var(--box-shadow-hover)
        .friendLinkTips
          font-weight 500
        .friendLinkContent
          display flex
          flex-direction column
          align-items: flex-start
          flex-flow: word-wrap
          overflow scroll
          padding 1rem
          background-color var(--background-color)
          box-shadow: var(--box-shadow-hover)
          color: var(--text-color)
          font-size: 1rem
          font-weight: 600
          opacity 0.8

// 手机
@media (max-width: $MQMobileNarrow)
  .author-social
    padding: 0 1rem
    .InfoContainer
      display: flex
      flex-direction: column
      justify-content: center
      align-content: center
      max-width 15.5rem
      width: 60vw
      padding: 2rem
      margin: 1rem auto
      border: 2px solid #ec7da1
      border-radius: 1rem
      &::before
        content: ''
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        background-image: url("https://cdn.jsdelivr.net/gh/mumu-pika/MyBlogCDN/images/anime/pokemon.webp")
        background-size: cover
        background-repeat: no-repeat
        // background-position: right
        opacity: 0.5
        z-index -1
      // 展示的内容区域
      #typed1, #typed2, #typed3, #typed4
        display: inline
        margin: 0.2rem auto
        font-size: 1rem

    .friendLinkContainer
      display block
      width 95%
      margin 0 auto
      border 2px groove var(--box-shadow-hover)
      .friendLinkTips
        font-weight 500
      .friendLinkContent
        display flex
        flex-direction column
        align-items: flex-start
        flex-flow: word-wrap
        padding 1rem
        background-color var(--background-color)
        box-shadow: var(--box-shadow-hover)
        color: var(--text-color)
        font-size: 1rem
        font-weight: 600
        opacity 0.8
</style>
