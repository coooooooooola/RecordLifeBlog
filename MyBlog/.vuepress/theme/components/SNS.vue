<template>
  <div class="sns-wrapper">
    <!-- SNS -->
    <!-- <a
      v-for="(user, platform) in defaultSNS"
      :key="`${platform}-${user}`"
      :href="getSNSLink(platform)"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon name="oi-git-compare" />
     
    </a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultSNS: [
        {
          name: 'github',
          icon: 'fa-github-alt',
          url: 'https://github.com/',
        },
        {
          name: 'email',
          icon: 'fa-envelope',
          url: 'mailto:',
        },
        {
          name: 'rss',
          icon: 'ri-rss-fill',
          url: '',
          iconScale: 0.9,
        },
      ],
    }
  },
  methods: {
    setStyle(items) {
      items.style.transition = `all ${this.duration}s ease-in-out ${this.delay}s`
      items.style.transform = 'translateY(-20px)'
      items.style.opacity = 0
    },
    getSNSLink(platform) {
      return this.defaultSNS[platform].url
    },
    getSNSIcon(platform) {
      return this.defaultSNS[platform].icon
    },

    getSNSIconScale(platform) {
      return this.defaultSNS[platform].iconScale || 1
    },
  },
}

// defineProps({
//   large: {
//     type: Boolean,
//     default: true,
//   },
// })
</script>

<style lang="css"></style>
