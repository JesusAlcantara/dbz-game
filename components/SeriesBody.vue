<template>
    <div class="d-flex justify-content-around flex-wrap contenedor">
        <div
            v-for="serie in items"
            :key="serie.id"
            class="card m-2"
            style="width: 18rem;"
        >
            <img
                :src="getImage(serie.image)"
                class="card-img-top"
                :alt="serie.name">
            <div class="card-body">
                <h5 class="card-title">{{ serie.name }}</h5>
                <nuxt-link
                    :to="`/characters/${serie.id}`"
                    class="btn btn-primary"
                >
                   Ver más
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import series from '~/assets/series.json';
export default {
    computed: {
        items () {
            return series.map((serie) => {
                return serie
            })
        }
    },
    methods: {
        getImage(img) {
            return require(`../public/images/series/${img}`);
        }
    }
}
</script>

<style>
.contenedor {
        background-color: white;
    }
    .card-title {
        font-family: fantasy;
    }
    .card-text {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .card-img-top {
        height: 400px;
        width: 100%;
        object-fit: cover;
    }
</style>