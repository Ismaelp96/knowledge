<template>
  <div class="app">
    <header-component
      title="Cod3r - Base de Conhecimento"
      :hideToggle="false"
    />
    <menu-component />
    <content-component />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/template/Header.vue'
import MenuComponent from './components/template/Menu.vue'
import ContentComponent from './components/template/Content.vue'
import FooterComponent from './components/template/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr 4rem;
  grid-template-columns: 30rem 1fr;
  grid-template-areas: 'header header' 'menu content' 'footer footer';
}

a {
  text-decoration: none;
}
li {
  list-style: none;
}
</style>
