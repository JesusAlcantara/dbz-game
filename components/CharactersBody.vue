<template>
    <div class="d-flex justify-content-around flex-wrap contenedor">
        <div
            v-for="character in items"
            :key="character.id"
            class="card m-2"
            style="width: 18rem;"
        >
            <img
                :src="getImage(character.image)"
                class="card-img-top"
                :alt="character.name">
            <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                <button
                    class="btn btn-primary"
                    @click="showModal = true; saveCharacter(character)"
                >
                    Ver más
                </button>
            </div>
        </div>
        <modal-characters-desktop
            v-if="!isMobile"
            v-show="showModal"
            :character="item"
            :image="getImage(imageItem)"
            @close-modal="showModal = false"
        />
        <modal-characters-mobile
            v-else
            v-show="showModal"
            :character="item"
            :image="getImage(imageItem)"
            @close-modal="showModal = false"
        />
    </div>
</template>

<script>
import characters from '~/assets/characters.json';
import ModalCharactersDesktop from './modals/modal-characters/desktop/ModalCharacters.vue';
import ModalCharactersMobile from './modals/modal-characters/mobile/ModalCharacters.vue';
import isMobile from '~/static/isMobile';

export default {
    components: { ModalCharactersDesktop, ModalCharactersMobile },
    data () {
        return {
            item: {},
            showModal: false,
            imageItem: 'character-defecto.png',
            isMobile: false
        }
    },
    computed: {
        items () {
            return characters.map((item) => {
                return item
            })
        }
    },
    methods: {
        getImage(img) {
            return require(`../public/images/charactersImg/${img}`);
        },
        saveCharacter (character) {
            this.item = character
            this.imageItem = character.image
        }
    },
    mounted () {
        this.isMobile = isMobile()
    }
}
</script>

<style scoped>
    .contenedor {
        background-color: white;
        height: 100%;
    }
    .card-title {
        font-family: fantasy;
    }
    .card-img-top {
        height: 400px;
        width: 100%;
        object-fit: cover;
    }
</style>