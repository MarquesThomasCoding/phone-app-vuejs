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
  </nav>
  
  <RouterView />
</template>

<style scoped>
</style>