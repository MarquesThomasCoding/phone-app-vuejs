<script>
import { useJournalStore } from '@/stores/journal';

export default {
    name: 'JournalView',
    setup() {
        const journalStore = useJournalStore();
        return {
            journalStore,
        }
    },
    methods: {
        appeler(contact) {
            this.journalStore.addAppel(contact);
        },
    }
}
</script>

<template>
    <div>
        <h1>Journal</h1>
        <ul>
            <li v-for="appel in journalStore.journal">
                <span class="called">{{ appel.called }}</span>
                <div>
                    <span>{{ appel.date }}</span>
                    <span>{{ appel.hour }}</span>
                </div>
                <button @click="appeler(appel.called)" class="appel">📞</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

li {
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.called {
    font-weight: bold;
    color: white;
}

li div {
    display: flex;
    flex-direction: column;
}
</style>