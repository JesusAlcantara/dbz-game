<template>
    <h2>{{ character.name }}</h2>
</template>

<script>
import characters from '~/assets/characters.json'
export default {
    data () {
        return {
            character: {}
        }
    },
    mounted () {
        characters.forEach(item => {
            if ( item.id === this.$route.params.id ) {
                console.log('llego');
                this.character = item
            }
        });
    }
}
</script>

<style>

</style>