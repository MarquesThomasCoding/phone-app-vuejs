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
  <span class="appel-en-cours hidden">Appel...</span>
</template>

<style scoped>
.appel-en-cours {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 20px;
    font-weight: bold;
}
</style>