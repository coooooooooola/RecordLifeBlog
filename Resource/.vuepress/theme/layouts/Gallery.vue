<template>
  <Common class="gallery-wrapper" :sidebar="false">
    <ModuleTransition>
      <div class="container">
        <div class="header">
          <h1 class="header-title">相册</h1>
          <p class="header-subtitle">Photos</p>
        </div>
        <div class="wrap">
          <a
            class="item"
            @click.stop="detail(item)"
            v-for="(item, index) in albumList"
            :key="index"
          >
            <img class="cover" :src="$withBase($themeConfig.authorAvatar)" />
            <div class="title-wrap">
              <div class="mask">
                <h3 class="title">{{ item.albumName }}</h3>
              </div>
            </div>
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

import { useInstance } from '@theme/helpers/composable'
export default defineComponent({
  data() {
    return {
      albumList: [
        {
          albumName: '相册1',
          path: 'album1'
        },
        {
          albumName: '相册2',
          path: 'album2'
        },
        {
          albumName: '相册3',
          path: 'album2'
        },
        {
          albumName: '相册4',
          path: 'album3'
        },
        {
          albumName: '相册5',
          path: 'album4'
        }
      ]
    }
  },
  components: { Common, ModuleTransition },
  methods: {
    detail(item) {
      this.$router.push({
        path: `/gallerydetail/`,
        query: { albumName: item.path }
      })
    }
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
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    grid-gap: 10px;
    justify-content: center;
  }

  .item {
    position: relative;
    /* padding-top: 100%; */
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 300px;
    height: 300px;
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
