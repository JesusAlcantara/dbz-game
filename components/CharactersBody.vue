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
        <ModalCharacters
            v-show="showModal"
            :character="item"
            :image="getImage(imageItem)"
            @close-modal="showModal = false"
        />
    </div>
</template>

<script>
import characters from '~/assets/characters.json';
import ModalCharacters from './modals/ModalCharacters.vue';

export default {
    components: { ModalCharacters },
    data () {
        return {
            item: {},
            showModal: false,
            imageItem: 'character-defecto.png' 
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