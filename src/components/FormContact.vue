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
    <form @submit.prevent="addContact()">
      <input type="text" placeholder="Nom" v-model="formContact.name">
      <input type="number" placeholder="Numéro" v-model="formContact.phone">
      <button type="submit">Ajouter</button>
    </form>
</template>

<style scoped>

</style>