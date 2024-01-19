<script>
import { useContactStore } from '@/stores/contact';
import { useJournalStore } from '@/stores/journal';

export default {
    name: 'ContactView',
    setup() {
        const contactStore = useContactStore();
        const journalStore = useJournalStore();
        return {
            contactStore,
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
        <h1>Contacts</h1>
        <RouterLink to="/add-contact" class="add-contact">+</RouterLink>
        <ul>
            <li v-for="contact in contactStore.contacts">
                <span class="name">{{ contact.name }}</span>
                <span class="number">{{ contact.phone }}</span>
                <button @click="appeler(contact.name)" class="appel">📞</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

.add-contact {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

span.name {
    color: white;
}

span.number {
    overflow: hidden;
    text-overflow: ellipsis;
}

button {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
}
</style>