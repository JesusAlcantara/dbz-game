<template>
  <nav class="navbar navbar-expand-lg bg-dark">
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
            class="nav-item"
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
  </nav>
</template>

<script>
import optionsHeading from '~/assets/optionsHeading.json'
export default {
    name: 'Encabezado',
    data() {
      return {
        options: optionsHeading
      }
    }
}
</script>

<style scoped>
  .link {
    font-family: fantasy;
    text-decoration: none;
    color: white;
    font-size: 25px;
  }
  .nav-link {
    font-family: fantasy;
    font-size: 25px;
  }
</style>