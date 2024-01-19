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
    <RouterLink to="/"><img src="@/assets/imgs/home.png" alt="Home"></RouterLink>
    <RouterLink to="/contacts"><img src="@/assets/imgs/contact.png" alt="Contacts"></RouterLink>
    <RouterLink to="/journal"><img src="@/assets/imgs/journal.png" alt="Journal"></RouterLink>
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

img {
  width: 30px;
  height: 30px;
}

img:hover {
  filter: grayscale(100%) brightness(50%);
}
</style>