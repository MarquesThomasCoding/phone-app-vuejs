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
            date: `${new Date().getDate().toString().padStart(2, '0')}/${(new Date().getMonth() + 1).toString().padStart(2, '0')}/${new Date().getFullYear()}`,
            hour: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
        }
        this.journal.push(newCall)
    },
  }
})
