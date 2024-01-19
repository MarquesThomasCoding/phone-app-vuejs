import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [
      {
        name: 'John Doe',
        phone: '0645109072',
      },
      {
        name: 'Jane Doe',
        phone: '08765432',
      },
      {
        name: 'John Smith',
        phone: '23084567',
      },
    ]
  }),
  actions: {
    addContact(contact) {
        if (this.existContact(contact.phone)) {
            return
        }
        this.contacts.push(contact)
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
