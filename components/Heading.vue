<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <h2 class="navbar-brand m-2 text-white">Dragon Ball Game</h2>
        <ul class="navbar-nav">
          <li 
            v-for="item in options"
            :key="item"
            class="nav-item d-flex"
          >
            <nuxt-link class="nav-link text-white" aria-current="page" :to="`/${item.route}`">{{ item }}</nuxt-link>
          </li>
        </ul>
        <img src="../assets/images/bolaDragon7.png" alt="dragonBall" width="50" height="50" class="img-thumbnail rounded float-right m-2">
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Encabezado',
    data() {
      return {
        options: [
          'Inicio',
          'Juego',
          'Personajes'
        ],
      };
    },
}
</script>

<style scoped>
  h2 {
    font-family: fantasy;
  }
  a {
    font-family: fantasy;
  }
</style>