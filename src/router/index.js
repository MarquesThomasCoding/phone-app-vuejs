import { createRouter, createWebHistory } from 'vue-router'
import ClavierView from '@/views/ClavierView.vue'
import ContactsView from '@/views/ContactsView.vue'
import JournalView from '@/views/JournalView.vue'
import AddContactView from '@/views/AddContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/journal',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/add-contact',
      name: 'add-contact',
      component: AddContactView
    }
  ]
})

export default router
