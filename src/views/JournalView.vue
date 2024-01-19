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
}
</script>

<template>
    <div>
        <h1>Journal</h1>
        <ul>
            <li v-for="appel in journalStore.journal">
                <span>{{ appel }}</span>
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
}
</style>