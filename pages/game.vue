<template>
    
</template>

<script>
import CharacterOptions from '~/components/CharacterOptions.vue'
import CharacterPicture from '~/components/CharacterPicture.vue'
export default {
    name: 'Game',
    components: {
        CharacterOptions,
        CharacterPicture
    },
    data () {
        return {
            character: null
        }
    }
}
</script>

<style>

</style>