<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'Navbar',
    components: {
        RouterLink,
        RouterView,
    },
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contacts">Contacts</RouterLink>
    <RouterLink to="/journal">Journal</RouterLink>
  </nav>
  
  <RouterView />
</template>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
}
</style>