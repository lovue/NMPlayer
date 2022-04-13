import { createApp } from 'vue'
import lovue from 'lovue'
import App from './App.vue'

const app = createApp(App)
app.use(lovue)
app.mount('#app')
