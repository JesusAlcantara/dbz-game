<template>
    <div class="d-flex align-content-start flex-wrap contenedor">
        <div
            v-for="character in items"
            :key="character.key"
            class="card m-2"
            style="width: 18rem;"
        >
            <img
                :src="getImage(character.image)"
                class="card-img-top"
                :alt="character.name">
            <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                <nuxt-link
                    :to="`/characters/${character.id}`"
                >
                   <button @click="saveCharacter(character.id)" class="btn btn-primary">Ver más</button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import characters from '~/assets/characters.json';
export default {
    data () {
        return {
            item: {}
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
        saveCharacter (id) {
            characters.forEach(charact => {
                if (charact.id === id) {
                    this.item = charact
                    console.log(this.item);
                }
            });
        }
    }
}
</script>

<style scoped>
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