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
                <button
                    class="btn btn-primary"
                    @click="showModal = true; saveCharacter(serie)"
                >
                    Ver más
                </button>
            </div>
        </div>
        <modal-film-serie-mobile
            v-if="isMobile"
            v-show="showModal"
            :item="item"
            :image="getImage(imageItem)"
            @close-modal="showModal = false"
        />
        <modal-film-serie-desktop
            v-else
            v-show="showModal"
            :item="item"
            :image="getImage(imageItem)"
            @close-modal="showModal = false"
        />
    </div>
</template>

<script>
import series from '~/assets/series.json';
import ModalFilmSerieDesktop from './modals/modal-seriefilm/desktop/ModalFilmSerie.vue';
import ModalFilmSerieMobile from './modals/modal-seriefilm/mobile/ModalFilmSerie.vue';
import isMobileDevice from '~/helpers/device';

export default {
    components: { ModalFilmSerieDesktop, ModalFilmSerieMobile },
    data () {
        return {
            item: {},
            showModal: false,
            imageItem: 'serie-defecto.png',
            isMobile: false
        }
    },
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
        },
        saveCharacter (character) {
            this.item = character
            this.imageItem = character.image
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