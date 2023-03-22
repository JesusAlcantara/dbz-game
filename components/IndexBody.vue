<template>
    <div v-if="isMobile">
        <carousel-mobile />
        <news />
    </div>
    <div v-else>
        <carousel-desktop />
        <news />
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
import News from './news/News.vue';
import isMobileDevice from '~/helpers/device';

export default {
    components: { CarouselDesktop, CarouselMobile, News },
    data () {
        return {
            isMobile: false
        }
    },
    mounted () {
        this.isMobile = true ? isMobileDevice() : false
        if (typeof window !== 'undefined') {
            window.scrollTo(0,0)
        }
    }
}
</script>

<style scoped>

</style>