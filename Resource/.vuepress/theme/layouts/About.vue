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
          <div class="introContainer">
            <!-- typed展示输出的内容 -->
            <span id="typed1" class="type fzzj"></span>

            <div class="introContent Kalam">
              <h2 style="border-left: solid 3px yellow; padding-left: 10px">
                自画像
              </h2>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >经历</span
                >：985小硕，前百度/字节工程师，现在国企躺不平。</span
              >
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >爱好</span
                >：电影 / 羽毛球 / DOTA2云玩家 / 王者荣耀（又菜又苟）/ 旅行 /
                美食。
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >性格</span
                >：ISTJ（有点儿准），还有一点儿内向+社恐，只和很熟悉的人话比较多，很不喜欢无效社交，享受独处时光
              </span>
              <h2 style="border-left: solid 3px yellow; padding-left: 10px">
                建站
              </h2>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >目的</span
                >：一直以来都很想打造属于自己的桃花源，在纷繁复杂的乱世中寻得一片宁静。在这里我可以不受任何打扰，随心所欲地记录生活、发表感悟。
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >失败经历</span
                >：2019年的时候基于vue+springboot+flask完成了第一个博客+管理后台的开发，但由于过于注重代码实现而忽视了记录生活的初衷，维护了几个月就无疾而终。
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >内容为王</span
                >：2023年12月逛知乎刷到了个人博客的话题，再加上在国企工作不太忙，感觉又可以重新出发。吸取了上次失败教训，这次只留给自己二周的时间调研+二次开发，一切以内容为主。
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >二次开发</span
                >：本次主要使用了vuepress-theme-reco主题，在<a
                  href="https://github.com/mumu-pika/MyBlog_vuepress-theme-reco"
                  >mumu-pika</a
                >的基础上新增了书签、相册功能并做了样式调整，其他功能会在以后的使用过程中不断完善优化。
              </span>

              <h2 style="border-left: solid 3px yellow; padding-left: 10px">
                已有功能
              </h2>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >首页</span
                >：封面图、导航栏、文章列表、文章分类和tag数据，在config.js中的themeConfig配置
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >文章</span
                >：文章存放在/Resource/blogs，支持按照分类、tag以及时间轴展示
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >相册</span
                >：照片存放在/Resource/photots，支持分相册展示
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >书签</span
                >：存放有用的、有意思的网址
              </span>

              <h2 style="border-left: solid 3px yellow; padding-left: 10px">
                未来的功能
              </h2>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >说说</span
                >：类似一条朋友圈，简短表达心情
              </span>
              <span style="padding-left: 5px">
                <span
                  style="background-color: rgb(31, 157, 163); display: inline"
                  >密码</span
                >：输入密码后才可进入某个页面
              </span>
            </div>
          </div>
        </ModuleTransition>
      </div>
    </div>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'
import Comments from '@theme/components/Comments/Comments.vue'
import Typed from 'typed.js'

export default {
  name: 'About',
  mixins: [moduleTransitonMixin],
  components: { Common, ModuleTransition, Comments },

  computed: {
    socials() {
      return this.$themeConfig.socials
    },
    // typed函数使用
    typedString1() {
      return new Typed('#typed1', {
        // stringsElement: "#typed-strings",
        strings: ['此际浮华满天 未曾让我艳羡'],
        typeSpeed: 80, //设置打字的速度，单位为毫秒，数值越大，打字速度越慢
        startDelay: 0, // 设置开始打字前的延迟
        showCursor: false, //设置是否显示鼠标
      })
    },
  },

  methods: {},
  mounted() {
    // 打字特效
    // typingMagic();
    // 开始打字
    this.typedString1.start()
  },

  watch: {},
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
  #typed1
    display: inline-block
    margin: 0.6rem auto
    font-size: 2rem
    font-weight: 600
  .introContainer
    display block
    width 50%
    margin 0 auto
    border 2px groove var(--box-shadow-hover)
    .introContent
      margin-top:30px
      display flex
      flex-direction column
      align-items: flex-start
      flex-flow: word-wrap
      text-align: left
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
      .introContainer
        display block
        width 60%
        margin 0 auto
        border 2px groove var(--box-shadow-hover)
        .introContent
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

    .introContainer
      display block
      width 95%
      margin 0 auto
      border 2px groove var(--box-shadow-hover)
      .introContent
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
