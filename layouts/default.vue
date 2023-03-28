<template>
  <div v-if="isMobile">
    <heading-mobile />
    <nuxt />
    <footer-mobile />
  </div>
  <div v-else>
    <heading-desktop />
    <nuxt />
    <footer-desktop />
  </div>
</template>

<script>
import HeadingDesktop from '@/components/heading/desktop/Heading.vue'
import HeadingMobile from '@/components/heading/mobile/Heading.vue'
import FooterDesktop from '@/components/footer/desktop/Footer.vue'
import FooterMobile from '@/components/footer/mobile/Footer.vue'
import isMobileDevice from '~/helpers/device';

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
      // Determina si el dispositivo actual es mobile o no
      this.isMobile = true ? isMobileDevice() : false
    }
}
</script>