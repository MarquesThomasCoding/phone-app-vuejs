<script>
import { useContactStore } from '@/stores/contact'

export default {
    name: 'FormContact',
    setup() {
        const contactStore = useContactStore()
        return {
            contactStore
        }
    },
    data() {
        return {
            formContact: {
                name: '',
                phone: '',
            },
        }
    },
    methods: {
      addContact() {
        this.contactStore.addContact(this.formContact)
        this.formContact = {
          name: '',
          phone: '',
        }
      }
    }
}
</script>

<template>
    <div>
        <h1>Ajouter</h1>
        <img class="profile-default" src="@/assets/imgs/profile-default.png" alt="Image de profil">
        <form @submit.prevent="addContact()">
            <input type="text" placeholder="Nom" v-model="formContact.name">
            <input type="text" placeholder="Numéro" v-model="formContact.phone">
            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}
.profile-default {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0 auto;
    display: block;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
}

input:focus {
    background-color: rgba(255, 255, 255, 0.2);
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>