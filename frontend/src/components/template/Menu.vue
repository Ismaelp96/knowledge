<template>
  <aside class="menu"></aside>
</template>

<script>
export default {
  name: 'MenuComponent',
}
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
