<script>
import Navbar from './components/Navbar.vue';
import Topbar from './components/Topbar.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Topbar,
    },
}
</script>

<template>
  <Topbar />
  <Navbar />
</template>

<style scoped>

</style>