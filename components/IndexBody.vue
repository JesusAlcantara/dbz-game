<template>
    <div v-if="isMobile">
        <carousel-mobile />
    </div>
    <div v-else>
        <carousel-desktop />
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
import isMobileDevice from '~/helpers/device';

export default {
    components: { CarouselDesktop, CarouselMobile },
    data () {
        return {
            isMobile: false
        }
    },
    mounted () {
        this.isMobile = true ? isMobileDevice() : false
    }
}
</script>

<style scoped>

</style>