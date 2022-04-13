import { createApp } from 'vue'
import lovue from 'lovue'
import 'lovue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(lovue)
app.mount('#app')
