<!-- 单个文档的单独小组件 -->

<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <div class="cover">
      <a
        ><img-lazy
          class="cover-img"
          :src="
            item.frontmatter.cover ||
            this.$themeConfig.covers[
              Math.floor(Math.random() * this.$themeConfig.covers.length)
            ] ||
            '@theme/public/lighthouse.webp'
          "
          :alt="item.title"
      /></a>
    </div>
    <div class="content-wrap">
      <div class="content">
        <a class="post-title" :href="item.path">
          <h3>{{ item.title }}</h3></a
        >
        <div class="post-meta">
          <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
        </div>
        <div class="float-content">
          <p>{{ item.frontmatter.desc }}</p>
          <div class="post-bottom">
            <a
              href="https://2heng.xin/2019/09/10/docker-zabbix-grafana/"
              class="button-normal"
            >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag'],
})
</script>

<style lang="stylus" scoped>
.abstract-item
  position: relative
  margin: 0 auto 2rem
  width: 100%
  overflow: hidden
  box-shadow: var(--box-shadow)
  box-sizing: border-box
  transition: all 0.3s
  background-color: var(--background-color)
  border:solid #6d2999
  cursor: pointer
  > *
    pointer-events: auto
  .cover
    max-width: 50%
    float:right
  .cover a
    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;


  .cover-img
    width: 100%
    transition: 1s ease-out
  .cover-img:hover
    transform: scale3d(1.1, 1.1, 1)
  .content-wrap
    position: absolute;
    display: inline-block;
    float: left;
    padding: 0;
    width: 45%;
    margin: 0;
  .content h3
    margin-left: 10px;
  .float-content
    padding: 10px;
  .post-meta
    padding: 10px;
.abstract-item-left
  .cover
    float: left !important
//小屏幕适配
@media (max-width: $MQMobile)
  .abstract-item
    .cover
      max-width: 100%

    .content-wrap
      position: relative !important;
      display: block;
      width: 100%;
</style>
