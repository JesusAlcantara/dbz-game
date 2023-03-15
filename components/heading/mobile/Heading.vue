<template>
  <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-dark">
    <button 
      v-if="!open"
      @click="show()"
      class="navbar-toggler bg-light m-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#opciones"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <button
      v-else 
      @click="show()"
      type="button"
      class="btn-close navbar-toggler bg-light m-2 w-25"
      data-bs-toggle="collapse"
      data-bs-target="#opciones"
      aria-label="Close"
    ></button>
    <nuxt-link
      to="/"
      class="text-white m-2 text-decoration-none font-fantasy"
    >
      Dragon Ball Page
    </nuxt-link>
    <div
      class="collapse navbar-collapse"
      id="opciones"
    >
      <hr class="border-light" />
      <ul class="navbar-nav align-items-center">
        <li 
            v-for="item in options"
            :key="item.id"
            class="nav-item d-flex font-fantasy"
          >
            <nuxt-link
              class="nav-link text-white"
              aria-current="page"
              :to="`${item.url}`"
            >
              {{ item.name }}
            </nuxt-link>
          </li>   
      </ul>
    </div>

    
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <h2 class="navbar-brand m-2 text-white">
        <nuxt-link
          to="/"
          class="link"
        >
          Dragon Ball Page
        </nuxt-link>
      </h2>
        <ul class="navbar-nav">
          <li 
            v-for="item in options"
            :key="item.id"
            class="nav-item d-flex"
          >
            <nuxt-link
              class="nav-link text-white"
              aria-current="page"
              :to="`${item.url}`"
            >
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
        <img
          src="@/public/images/bolaDragon7.png"
          alt="dragonBall"
          width="50"
          height="50"
          class="img-thumbnail rounded float-right m-2"
        >
      </div>
  </nav> -->
</template>

<script>
import optionsHeading from '~/assets/optionsHeading.json'
export default {
    name: 'Encabezado',
    data() {
      return {
        options: optionsHeading,
        open: false
      }
    },
    methods: {
      show () {
        if ( this.open ) { this.open = false }
        else { this.open = true }
      }
    }
}
</script>

<style scoped>
  .font-fantasy {
    font-family: fantasy;
  }
</style>