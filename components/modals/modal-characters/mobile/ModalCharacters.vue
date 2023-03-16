<template>
    <div>
        <transition name="fade">
            <div
                class="modal-overlay"
                @click="$emit('close-modal')"
            >
            </div>
        </transition>
        <transition name="fade">
            <div
                class="d-block modal"
                @click.stop
            >
                <img
                    :src="image"
                    class="img-modal"
                    :alt="character.name">
                <h1 class="name-modal">{{ character.name }}</h1>
                <p class="description">{{ character.description }}</p>
                <button
                    class="btn btn-secondary d-block m-auto mb-2"
                    @click="$emit('close-modal')"
                >Cerrar</button>
            </div>
        </transition>
    </div>
</template>
  

<script>
export default {
    props: {
        character: {
            type: Object,
            default: {}
        },
        image: {
            type: String
        }
    }
}
</script>

<style>
    ::-webkit-scrollbar {
        width: 0px
    }
    .img-modal {
        display: block;
        width: 100%;
        height: 75%;
        object-fit: cover;
        margin: 0px auto 5px;
    }
    .name-modal {
        font-family: fantasy;
        text-align: center;
    }
    .description {
        width: 50%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        margin-left: 25%;
    }
    .modal-overlay {
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        min-height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .modal {
        position: fixed;
        width: 75%;
        height: 75%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFF;
        border-radius: 15px;
        z-index: 101;
    }
</style>