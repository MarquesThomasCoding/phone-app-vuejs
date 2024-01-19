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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

a {
  color: white;
  text-decoration: none;
}
</style>