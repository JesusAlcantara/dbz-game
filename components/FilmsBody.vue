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
            </div>
        </div>
    </div>
</template>

<script>
import films from '~/assets/films.json';
import ModalFilmSerie from './modals/modal-seriefilm/desktop/ModalFilmSerie.vue';

export default {
    components: { ModalFilmSerie },
    data () {
        return {
            item: {},
            showModal: false,
            imageItem: 'film-defecto.png' 
        }
    },
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
        },
        saveCharacter (character) {
            this.item = character
            this.imageItem = character.image
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