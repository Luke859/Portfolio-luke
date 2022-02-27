import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.mount('#app')

new Vue({
    el: "#allTheNav",
    data: {
      opened: false
    }
  })
