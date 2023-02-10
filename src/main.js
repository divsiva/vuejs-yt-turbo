import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './index.css'
import Multiselect from 'vue-multiselect'


const app = createApp(App)
app.component(Multiselect)
app.provide(Multiselect)

app.use(createPinia())
app.use(router)

app.mount('#app')
