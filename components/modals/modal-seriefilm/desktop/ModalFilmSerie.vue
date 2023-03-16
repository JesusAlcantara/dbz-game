<template>
    <div ck>
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
                    :alt="item.name">
                <h1 class="name-modal">{{ item.name }}</h1>
                <div v-for="saga in item.sagas" :key="saga">
                    <h3 class="saga-name">- <ins>{{ saga.saga_name }}</ins></h3>
                    <p class="saga-description">{{ saga.description }}</p>
                </div>
                <button
                    class="btn btn-secondary d-block m-auto mb-2"
                    @click="$emit('close-modal')"
                >
                    Cerrar
                </button>
            </div>
        </transition>
    </div>
</template>
  

<script>
export default {
    props: {
        item: {
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
        width: 500px;
        height: 650px;
        object-fit: cover;
        border-radius: 10px;
        margin: 10px auto 5px;
    }
    .name-modal {
        font-family: fantasy;
        text-align: center;
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
        width: 90%;
        height: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFF;
        border-radius: 15px;
        z-index: 101;
    }
    .saga-name {
        font-family: fantasy;
        padding: 10px;
    }
    .saga-description {
        font-family: cursive;
        padding: 5px;
    }
</style>