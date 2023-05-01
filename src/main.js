import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import Vue3TagsInput from 'vue3-tags-input'
import VueNextSelect from 'vue-next-select'
import App from './App.vue'


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.component(VueNumberInput.name, VueNumberInput);
app.component('vue3-tags-input', Vue3TagsInput);
app.component('vue-select', VueNextSelect)

app.mount('#app')
