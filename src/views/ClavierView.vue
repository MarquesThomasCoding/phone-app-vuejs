<script>
export default {
    name: 'ClavierView',
    methods: {
        appeler(number) {
            console.log(number.toString());
        },
    }
}
</script>

<template>
    <div>
        <ul class="clavier">
            <li v-for="i in 9">
                <button @click="appeler(i-1)" class="btn btn-clavier">{{ i-1 }}</button>
            </li>
            <li>
                <button @click="appeler('*')" class="btn btn-clavier">*</button>
            </li>
            <li>
                <button @click="appeler(0)" class="btn btn-clavier">0</button>
            </li>
            <li>
                <button @click="appeler('#')" class="btn btn-clavier">#</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.clavier {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>