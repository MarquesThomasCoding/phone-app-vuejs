import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        phone: '1',
      },
      {
        id: 2,
        name: 'Jane Doe',
        phone: '08765432',
      },
      {
        id: 3,
        name: 'John Smith',
        phone: '23084567',
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
    returnContact(number) {
        return this.contacts.find(contact => contact.phone === number)
    },
    existContact(phone) {
      return this.contacts.some(contact => contact.phone === phone)
    }
  }
})
