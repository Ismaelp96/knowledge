<template>
  <header class="header">
    <a @click="toggleMenu" class="toggle" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"> </i>
    </a>
    <h1 class="title">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
    hideToggle: Boolean,
  },
  computed: {
    icon() {
      return 'fa-angle-left'
    },
    methods: {
      toggleMenu() {},
    },
  },
}
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  justify-content: center;
  align-items: center;
}
.header .title {
  font-size: 2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}
header.header > a.toggle {
  width: 6rem;
  height: 100%;

  justify-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: white;
  font-size: 1.6rem;
  transition: background-color 0.3s ease;
}
header.header > a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
