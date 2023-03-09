<template>
  <div>
    <heading />
    <nuxt />
    <footer-vue />
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import FooterVue from '@/components/Footer.vue'
export default {
    components: {
        Heading,
        FooterVue
    }
}
</script>