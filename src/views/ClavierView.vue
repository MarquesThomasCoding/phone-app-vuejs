<script>
import { useContactStore } from '@/stores/contact';
import { useJournalStore } from '@/stores/journal';

export default {
    name: 'ClavierView',
    setup() {
        const contactStore = useContactStore();
        const journalStore = useJournalStore();
        return {
            contactStore,
            journalStore,
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
        appeler(number) {
            if (this.exist) {
                this.journalStore.addAppel(this.contactStore.returnContact(number).name);
            }
            else {
                this.journalStore.addAppel(number);
            }
        },
    }
}
</script>

<template>
    <div>
        <h1>Clavier</h1>
        <div class="contact">
            <span v-if="this.exist" class="contact">{{ this.contactStore.returnContact(this.number).name }}</span>
            <span class="number">{{ this.number }}</span>
        </div>

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

        <div class="appel">
            <button v-if="this.number.length > 0" @click="appeler(this.number)" class="appelBtn">📞</button>
        </div>
    </div>
</template>

<style scoped>
.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    height: 30px;
    padding: 0;
}
.clavier {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 30px;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1/1;
}

button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border-radius: 50%;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

div.appel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;
    margin-top: 20px;
    padding: 0;
}

button.appelBtn {
    height: 100%;
    width: 65px;
    border: none;
    border-radius: 50%;
    background-color: #42b983;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
}
</style>