<script>
import { useJournalStore } from '@/stores/journal';
import CallCard from '@/components/CallCard.vue';

export default {
    name: 'JournalView',
    components: {
        CallCard,
    },
    setup() {
        const journalStore = useJournalStore();
        return {
            journalStore,
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <div>
        <h1>Journal</h1>
        <ul>
            <li v-for="appel in journalStore.journal">
                <CallCard :appel="appel" :journalStore="this.journalStore" />
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
</style>