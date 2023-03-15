<template>
  <div v-if="!isMobile">
    <heading-desktop />
    <nuxt />
    <footer-desktop />
  </div>
  <div v-else>
    <heading-mobile />
    <nuxt />
    <footer-mobile />
  </div>
</template>

<script>
import HeadingDesktop from '@/components/heading/desktop/Heading.vue'
import HeadingMobile from '@/components/heading/mobile/Heading.vue'
import FooterDesktop from '@/components/footer/desktop/Footer.vue'
import FooterMobile from '@/components/footer/mobile/Footer.vue'
import isMobile from '~/static/isMobile'
export default {
    components: {
        HeadingDesktop,
        HeadingMobile,
        FooterDesktop,
        FooterMobile
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