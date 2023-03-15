<template>
  <div>
    <heading />
    <nuxt />
    <footer-vue />
  </div>
</template>

<script>
import Heading from '@/components/heading/desktop/Heading.vue'
import FooterVue from '@/components/footer/desktop/Footer.vue'
export default {
    components: {
        Heading,
        FooterVue
    }
}
</script>