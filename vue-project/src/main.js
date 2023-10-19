import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Photo from './components/content/Photo.vue';
import SmallCard from './components/content/SmallCard.vue';
import TitleDesc from './components/content/TitleDesc.vue';
import Button from './components/core/Button.vue';
import InputFeild from './components/core/InputFeild.vue';
import Icon from './components/core/Icon.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.component('Photo', Photo)
app.component('SmallCard', SmallCard)
app.component('TitleDesc', TitleDesc)
app.component('Button', Button)
app.component('InputFeild', InputFeild)
app.component('Icon', Icon)
