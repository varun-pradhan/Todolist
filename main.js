import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// createApp(App).use(createPinia()).mount('#app')

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// const userStore = useTaskStore()

app.mount('#app')