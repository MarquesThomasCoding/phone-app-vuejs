<script>

export default {
    name: 'CallCard',
    props: {
        appel: {
            type: Object,
            required: true,
        },
        journalStore: {
            type: Object,
            required: true,
        }
    },
    methods: {
        appeler(contact) {
            this.showCall();
            this.journalStore.addAppel(contact);
        },
        showCall() {
            const appelEnCours = document.querySelector('.appel-en-cours');
            appelEnCours.classList.remove('hidden');
            setTimeout(() => {
                appelEnCours.classList.add('hidden');
            }, 1000);
        },
    }
}
</script>

<template>
    <span class="called">{{ appel.called }}</span>
    <div>
        <span>{{ appel.date }}</span>
        <span>{{ appel.hour }}</span>
    </div>
    <button @click="appeler(appel.called)" class="appel">📞</button>
</template>

<style>
.called {
    font-weight: bold;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
}

li div {
    display: flex;
    flex-direction: column;
}

button {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
}
</style>