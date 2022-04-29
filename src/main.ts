import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'


createApp(App).use(router).use(createPinia()).use(mdiVue, {
    icons: mdijs
}).mount('#app')
