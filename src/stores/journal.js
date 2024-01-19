import { defineStore } from 'pinia'

export const useJournalStore = defineStore('journal', {
  state: () => ({
    journal: [
    ]
  }),
  actions: {
    addAppel(appel) {
      this.journal.push(appel)
    },
  }
})
