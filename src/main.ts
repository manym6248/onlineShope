import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// Import Quasar css
import 'quasar/src/css/index.sass'



createApp(App).use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
.mount('#app')
