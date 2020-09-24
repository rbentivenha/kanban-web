import { createApp } from 'vue'
import { router } from './router'
import store from './store/index.js'
import App from './App.vue'
import './index.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
