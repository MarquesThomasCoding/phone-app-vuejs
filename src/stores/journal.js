import { defineStore } from 'pinia'

export const useJournalStore = defineStore('journal', {
  state: () => ({
    journal: [
    ]
  }),
  actions: {
    addAppel(appel) {
        let newCall = {
            id: this.journal.length + 1,
            called: appel,
            date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            hour: `${new Date().getHours()}:${new Date().getMinutes()}`,
        }
        this.journal.push(newCall)
    },
  }
})
