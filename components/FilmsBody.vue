<template>
    <div class="d-flex justify-content-around flex-wrap contenedor">
        <div
            v-for="film in items"
            :key="film.id"
            class="card m-2"
            style="width: 18rem;"
        >
            <img
                :src="getImage(film.image)"
                class="card-img-top"
                :alt="film.name">
            <div class="card-body">
                <h5 class="card-title">{{ film.name }}</h5>
                <nuxt-link
                    :to="`/characters/${film.id}`"
                    class="btn btn-primary"
                >
                   Ver más
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import films from '~/assets/films.json';
export default {
    computed: {
        items () {
            return films.map((film) => {
                return film
            })
        }
    },
    methods: {
        getImage(img) {
            return require(`../public/images/films/${img}`);
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