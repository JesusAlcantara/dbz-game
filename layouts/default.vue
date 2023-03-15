<template>
  <div v-if="!isMobile">
    <heading-desktop />
    <nuxt />
    <footer-vue />
  </div>
  <div v-else>
    <heading-mobile />
    <nuxt />
    <footer-vue />
  </div>
</template>

<script>
import HeadingDesktop from '@/components/heading/desktop/Heading.vue'
import HeadingMobile from '@/components/heading/mobile/Heading.vue'
import FooterVue from '@/components/footer/desktop/Footer.vue'
import isMobile from '~/static/isMobile'
export default {
    components: {
        HeadingDesktop,
        HeadingMobile,
        FooterVue
    },
    data() {
      return {
        isMobile: false
      }
    },
    mounted () {
      this.isMobile = isMobile()
    }
}
</script>