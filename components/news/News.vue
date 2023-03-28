<template>
    <div>
        <h2 class="m-2 fw-bold title"><u>Novedades:</u></h2>
        <div class="d-flex justify-content-around flex-wrap contenedor">
            <div
                v-for="item in news"
                :key="item.id"
                class="card m-2"
                style="width: 18rem;"
            >
                <img
                    :src="getImage(item.image)"
                    class="card-img-top"
                    :alt="item.name">
                <div class="card-body">
                    <h6>{{ item.category }}</h6>
                    <hr>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import news from '~/assets/news.json';

export default {
    data () {
        return {
            news: news
        }
    },
    methods: {
        getImage(img) {
            return require(`@/public/images/news/${img}`);
        }
    }
}
</script>

<style>

</style>