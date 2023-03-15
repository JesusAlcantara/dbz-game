<template>
    <div v-if="!isMobile">
        <carousel-desktop />
    </div>
    <div v-else>
        <carousel-mobile />
    </div>
    <!-- <div class="container">
        <div class="row align-items-start">
            <div class="col">
                Una de tres columnas
            </div>
            <div class="col">
                Una de tres columnas
            </div>
            <div class="col">
                Una de tres columnas
            </div>
        </div>
    </div> -->
</template>

<script>
import CarouselDesktop from './carousel/desktop/CarouselDesktop.vue'
import CarouselMobile from './carousel/mobile/CarouselMobile.vue'
import isMobile from '~/static/isMobile'

export default {
    components: { CarouselDesktop, CarouselMobile },
    data () {
        return {
            isMobile: false
        }
    },
    mounted () {
        this.isMobile = isMobile()
    }
}
</script>

<style scoped>

</style>