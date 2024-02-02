import { createApp } from 'vue'
import routes from './routes'
import App from './App.vue'
import Vue3Marquee from 'vue3-marquee'

import '@/assets/scss/main.scss'
const app = createApp(App)

// app.use(routes)
app.use(Vue3Marquee)
app.mount('#app')
