<template>
  <Common class="talk-wrapper" :sidebar="false">
    <ModuleTransition>
      <div>
        <div class="header">
          <h1 class="header-title">朋友圈</h1>
          <p class="header-subtitle">
            我有4个朋友：热爱吃喝玩乐的<span style="text-decoration: underline"
              >逍遥子</span
            >、日常打抱不平的<span style="text-decoration: underline"
              >吐槽君</span
            >、经常闭门思过的1<span style="text-decoration: underline"
              >小和尚</span
            >以及没有什么存在感的<span style="text-decoration: underline"
              >小透明</span
            >
          </p>
        </div>
        <div class="tab-pane">
          <div class="streamline">
            <ol>
              <div
                class="record"
                v-for="(item, index) in recordList"
                :key="index"
              >
                <a class="record-avatar">
                  <img :src="item.friendInfo.avatar" />
                </a>

                <div class="record-content">
                  <div class="record-content-heading">
                    <a href="https://www.ibyte.me">{{
                      item.friendInfo.name
                    }}</a>
                    <span class="record-publish-time"
                      >{{ item.createTime }}
                    </span>
                  </div>
                  <div class="record-content-body">
                    <p style="word-wrap: break-word">{{ item.content.text }}</p>
                    <div class="record-pic">
                      <a
                        class="item"
                        v-for="(img, index) in item.content.picList"
                        :key="index"
                      >
                        <el-image
                          :src="img"
                          :preview-src-list="item.content.picList"
                          class="cover"
                        >
                        </el-image>
                      </a>
                    </div>
                  </div>
                  <div class="record-content-footer say_footer">
                    <span class="text-muted">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </span>
                      {{ item.location.first }}⋅{{ item.location.second }}
                    </span>
                  </div>
                </div>
              </div>
            </ol>
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

import { RecoIcon } from '@vuepress-reco/core/lib/components'
export default defineComponent({
  data() {
    return {
      recordList: [
        {
          friendInfo: {
            name: '小透明',
            avatar: 'https://www.ibyte.me/avatar/85.png',
          },
          createTime: '2023年12月30日',
          content: {
            text: '终于赶在2024年之前完成了博客的首次上线✌️，先把过去的点滴迁移过来，然后就开始记录新生活～',
            picList: [
              'http://image.swtywang.top/uploads/small/6b6b1e8c07e00998ac41a40c18f9d624.png',
            ],
          },
          location: {
            first: '北京',
            second: '朝阳',
          },
        },
        {
          friendInfo: {
            name: '逍遥子',
            avatar: 'https://www.ibyte.me/avatar/82.png',
          },
          createTime: 'October 7th, 2023 at 11:42 pm',
          content: {
            text: 'Baota账号：swtywang/19920409',
            picList: [],
          },
          location: {
            first: 'Beijing',
            second: 'Chaoyang',
          },
        },
        {
          friendInfo: {
            name: '逍遥子',
            avatar: 'https://www.ibyte.me/avatar/83.png',
          },
          createTime: '2024年1月1日 14:45',
          content: {
            text: '《年会不能停》简直大厂照妖镜：踏实努力的螺丝钉们默默无闻，懂得汇报的中层莺莺燕燕，大家说着黑话 拉通对齐，看似很忙但并没有实际产出。\n\n 这个时代有人敢于提出问题就已经十分不易，职场环境改善也非一朝一夕，我也需要好好思考下未来的路该怎么走，毕竟距离35岁不远喽',

            picList: [],
          },
          location: {
            first: '北京',
            second: '朝阳剧场',
          },
        },
        {
          friendInfo: {
            name: '小和尚',
            avatar: 'https://www.ibyte.me/avatar/84.png',
          },
          createTime: '2024年1月10日 20:00',
          content: {
            text: '男女之事，源自天时地利，差一分一厘，就是空门。 ----《繁花》',
            picList: [],
          },
          location: {
            first: 'Beijing',
            second: 'Chaoyang',
          },
        },
        {
          friendInfo: {
            name: '逍遥子',
            avatar: 'https://www.ibyte.me/avatar/81.png',
          },
          createTime: '2024年1月15日 00:07',
          content: {
            text: '十年后，希望自己仍然只是一名纯粹的工程师。',
            picList: [],
          },
          location: {
            first: 'Beijing',
            second: 'Chaoyang',
          },
        },
                {
          friendInfo: {
            name: '逍遥子',
            avatar: 'https://www.ibyte.me/avatar/81.png',
          },
          createTime: '2024年1月26日 19:30',
          content: {
            text: '和爱扫兴的父母一起生活太痛苦了，希望以后的另一半不要太扫兴（如果我有的话🐶）',
            picList: [],
          },
          location: {
            first: 'Beijing',
            second: 'Chaoyang',
          },
        },
      ],
    }
  },
  components: { Common, ModuleTransition, RecoIcon },
  methods: {
    detail(item) {
      this.$router.push({
        path: `/gallerydetail/`,
        query: { albumName: item.path },
      })
    },
  },
})
</script>

<style scoped>
/** 上方header块 */
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

.talk-wrapper {
  padding: 100px 0 0px;
  max-width: 1000px;
  margin: 0 auto !important;
}

.tab-pane {
  padding-right: 15px;
  padding-left: 15px;
  opacity: 1;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.streamline {
  border-left: 1px solid #dee5e7;
  position: relative;
}

.record {
  padding: 15px 0;
}

.record a {
  position: relative;
}
.record-avatar {
  display: inline-block;
  width: 40px;
  height: auto;
  float: left !important;
  margin-left: -20px;
}
.record-avatar img {
  width: 100%;
  width: 40px !important;
  height: 40px;
  border-radius: 100%;
}

ol {
  padding-left: 0em;
}
.record-content {
  background: #212121;
  transition: all 0.2s ease;
  margin-left: 30px;
}

/** 内容第一行：作者 + 日期 start */
.record-content-heading {
  cursor: pointer;
  padding: 0px 15px;
  border-bottom: 1px solid #191919;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.record-content-heading a {
  color: #777;
}
.record-content-heading span {
  color: #777;
}
.record-publish-time {
  float: right !important;
}
/** 内容第一行：作者 + 日期 start  */
/** 第二行 */
.record-content-body {
  padding: 0 50px;
  color: #777;
  margin: 0px;
  padding-bottom: 10px;
  white-space: pre-line;
}

.record-content-body p {
  line-height: 1;
}
/** 第二行 end */
/** 第三行 start */
.record-content-footer {
  background: #212121;
  border-radius: 0 0 2px 2px;
  border-top: 1px solid rgba(237, 241, 242, 0.1);
  padding: 10px 15px;
}
.say_footer {
  font-size: 12px;
  line-height: 0;
}
.say_footer svg {
  width: 12px;
  height: 13px;
  vertical-align: -2px;
}
.text-muted {
  color: #777 !important;
}
.m-xs {
  margin: 5px;
}
/** 第三行 end */
/** 图片 */
.record-pic {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
  grid-gap: 10px;
  justify-content: left;
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
/**end */
</style>
