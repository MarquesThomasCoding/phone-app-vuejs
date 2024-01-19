<script>
import { useContactStore } from '@/stores/contact';

export default {
    name: 'ClavierView',
    setup() {
        const contactStore = useContactStore();
        return {
            contactStore,
        }
    },
    data() {
        return {
            number: '',
            exist: false,
        }
    },
    methods: {
        addNumber(number) {
            this.number += number.toString();
            this.existContact(this.number);
        },
        existContact(number) {
            this.exist = this.contactStore.existContact(number)
        },
    }
}
</script>

<template>
    <div>
        <span v-if="this.exist" class="contact">{{ this.contactStore.returnContact(this.number).name }}</span>
        <span class="number">{{ this.number }}</span>

        <ul class="clavier">
            <li v-for="i in 9">
                <button @click="addNumber(i)" class="btn btn-clavier">{{ i }}</button>
            </li>
            <li>
                <button @click="addNumber('*')" class="btn btn-clavier">*</button>
            </li>
            <li>
                <button @click="addNumber(0)" class="btn btn-clavier">0</button>
            </li>
            <li>
                <button @click="addNumber('#')" class="btn btn-clavier">#</button>
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