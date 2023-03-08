<template>
    <div class="d-flex align-content-start flex-wrap contenedor">
        <div
            v-for="character in items"
            :key="character.key"
            class="card m-2"
            style="width: 18rem;"
        >
            <img :src="getImage(character.image)" class="card-img-top" :alt="character.name">
            <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                <p class="card-text">{{ character.description }}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
            </div>
        </div>
    </div>
</template>

<script>
import characters from '~/assets/characters.json';
export default {
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