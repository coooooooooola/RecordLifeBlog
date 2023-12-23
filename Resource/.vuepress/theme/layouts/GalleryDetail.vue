<template>
  <Common class="gallery-wrapper" :sidebar="false">
    <ModuleTransition>
      <div class="container">
        <div class="header">
          <h1 class="header-title">{{ albumName }}</h1>
        </div>
        <div class="wrap">
          <a class="item" v-for="(item, index) in imgList" :key="index">
            <el-image :src="item" :preview-src-list="imgList" class="cover">
            </el-image>
          </a>
        </div>
      </div>
    </ModuleTransition>
  </Common>
</template>

<script>
import { defineComponent } from 'vue-demi'
import Common from '@theme/components/Common'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
export default defineComponent({
  data() {
    return {
      imgList: [],
      albumName: ''
    }
  },
  components: { Common, ModuleTransition },
  mounted() {
    this.albumName = this.$route.query.albumName
    let imgList = []
    let filepath = '../../../Photos/Album1'
    //参数：1.路径；2.是否遍历子目录；3.正则表达式
    const files = require
      .context('../../../Photos', true, /\.jpg|jpeg|png$/)
      .keys()
    files.forEach(element => {
      if (this.albumName == element.split('/')[1]) {
        imgList.push(require('../../../Photos' + element.slice(1)))
      }
    })
    this.imgList = imgList
  }
})
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style scoped>
/* 大屏 */
@media screen and (min-width: 896px) {
  .gallery-wrapper {
    max-width: 1140px;
    margin: 0 auto !important;
    padding: 4.6rem 2.5rem 0;
  }

  .container {
    min-height: calc(100vh -350px);
    max-width: 1140px;
    width: 100%;
  }

  .wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
    grid-gap: 10px;
    justify-content: center;
  }

  .item {
    position: relative;
    /* padding-top: 100%; */
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 150px;
    height: 150px;
  }
  .cover {
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    bottom: 0;
    width: calc(100% - 10px);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
    margin-left: 10px;
  }
  .header {
    text-align: center;
    margin: 100px auto;
  }
  .header .header-title {
    font-size: 2rem;

    color: var(--color-text);
  }
  .header .header-subtitle {
    font-size: 1rem;
  }
}

@media screen and (max-width: 895px) {
  .gallery-wrapper {
    max-width: 100%;
    margin: 0 auto !important;
    padding: 0 10px;
  }

  .container {
    min-height: calc(100vh -350px);
    max-width: 1140px;
    width: 100%;
  }

  .wrap {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 300px));
    grid-gap: 0px;
    justify-content: center;
  }

  .item {
    position: relative;
    /* padding-top: 100%; */
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 185px;
    height: 185px;
    padding: 5px;
  }
  .cover {
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
    margin-left: 10px;
  }
  .header {
    text-align: center;
    margin: 100px auto;
  }
  .header .header-title {
    font-size: 2rem;

    color: var(--color-text);
  }
  .header .header-subtitle {
    font-size: 1rem;
  }
}
</style>
