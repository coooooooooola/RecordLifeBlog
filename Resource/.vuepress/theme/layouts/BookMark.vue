<template>
  <Common class="b" :sidebar="false">
    <ModuleTransition>
      <div class="ookmark-wrapper">
        <div class="header">
          <h1 class="header-title">收藏夹</h1>
          <p class="header-subtitle">Bookmark</p>
        </div>
        <!-- links-wrapper -->
        <div class="bookmark-wrapper">
          <div
            class="bookmark-section"
            v-for="(section, index) in bookmarklist"
            :key="index"
          >
            <h2>{{ section.title }}</h2>
            <div class="bookmark-group">
              <div
                class="bookmark-item"
                v-for="(item, index) in section.sublist"
                :key="index"
              >
                <div class="content">
                  <a href="" target="_blank">
                    <img :src="item.img" />
                    <span class="sitename">{{ item.name }}</span>
                    <div class="desc">{{ item.desc }}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
      bookmarklist: [
        {
          title: 'Coding',
          sublist: [
            {
              name: 'Github',
              desc: '源代码托管平台',
              img: '/bookmarklogo/github.png'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            }
          ]
        },
        {
          title: '自己能用就完事儿了',
          sublist: [
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            },
            {
              name: 'Flint',
              desc: 'pytorch山寨版',
              img: 'xx'
            }
          ]
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
  .header {
    text-align: center;
    margin: 100px auto 30px auto;
  }
  .header .header-title {
    font-size: 2rem;

    color: var(--color-text);
  }
  .header .header-subtitle {
    font-size: 1rem;
  }
  .bookmark-wrapper {
    padding: 10px 0 50px;
    max-width: 1140px;
    margin: 0 auto !important;
  }
  .bookmark-section {
    width: 60%;
    max-width: 745px;
    margin: 0 auto;
  }
  .bookmark-section h2 {
    font-weight: 400;
    font-size: 18px;
    border-left: 3px solid yellow;
    padding-left: 10px;
    margin-left: 5px;
    margin-top: 50px;
    color: yellow;
  }
  .bookmark-group {
    width: 100%;
    list-style: none;
    margin-top: 10px;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 33.33%);
  }
  .bookmark-item {
    margin: 4px;
    cursor: pointer;
  }

  .bookmark-item .content {
    border: 1px solid #3c4a5f;
    border-radius: 10px;
    padding: 13px 30px 13px 20px;
    overflow: hidden;
    transition: all ease 0.3s;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    -ms-transition: all ease 0.3s;
  }
  .bookmark-item .content a {
    text-decoration: none;
  }

  .bookmark-item .content a img {
    padding: 2px;
    border-radius: 100%;
    max-width: 100%;
    float: right;
    box-shadow: inset 0 0 10px rgb(255, 255, 255, 8);
    margin-top: 5px;
    margin-right: -15px;
    width: 65px;
    height: 65px;
  }
  .bookmark-item .content a span.sitename {
    color: #74b3eb;
    padding: 8px 0 13px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
  }
  .bookmark-item .content a .desc {
    color: #74b3eb;
    font-size: 13px;
    padding: 10px 0;
    border-top: 1px dashed #ddd;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 15px;
  }
}

@media screen and (max-width: 895px) {
  .header {
    text-align: center;
    margin: 80px auto 30px auto;
  }
  .header .header-title {
    font-size: 2rem;

    color: var(--color-text);
  }
  .header .header-subtitle {
    font-size: 1rem;
  }
  .bookmark-wrapper {
    padding: 10px 0 50px;
    max-width: 1140px;
    margin: 0 auto !important;
  }
  .bookmark-section {
    width: 100%;
  }
  .bookmark-section h2 {
    font-weight: 400;
    font-size: 18px;
    border-left: 3px solid yellow;
    padding-left: 10px;
    margin-left: 17px;
    margin-top: 50px;
    color: yellow;
  }
  .bookmark-group {
    grid-template-columns: repeat(1, 100%);
  }
  .bookmark-item {
    margin: 8px 15px 8px 15px;
    cursor: pointer;
  }

  .bookmark-item .content {
    border: 1px solid #3c4a5f;
    border-radius: 10px;
    padding: 13px 30px 13px 20px;
    overflow: hidden;
    transition: all ease 0.3s;
  }
  .bookmark-item .content a {
    text-decoration: none;
  }

  .bookmark-item .content a img {
    padding: 2px;
    border-radius: 100%;
    max-width: 100%;
    float: right;
    box-shadow: inset 0 0 10px rgb(255, 255, 255, 8);
    margin-top: 5px;
    margin-right: -15px;
    width: 65px;
    height: 65px;
  }
  .bookmark-item .content a span.sitename {
    color: #74b3eb;
    padding: 8px 0 13px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
  }
  .bookmark-item .content a .desc {
    color: #74b3eb;
    font-size: 13px;
    padding: 10px 0;
    border-top: 1px dashed #ddd;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 15px;
  }
}
</style>
