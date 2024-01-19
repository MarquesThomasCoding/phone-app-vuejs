import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        phone: '1234567890',
      },
      {
        id: 2,
        name: 'Jane Doe',
        phone: '0987654321',
      },
      {
        id: 3,
        name: 'John Smith',
        phone: '1230984567',
      },
    ]
  }),
  actions: {
    addContact(contact) {
      this.contacts.push(contact)
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id)
    },
    appelerContact(contact) {
      console.log(`Appel en cours vers ${contact.name} au ${contact.phone}`)
    },
    existContact(phone) {
      return this.contacts.some(contact => contact.phone === phone)
    }
  }
})
