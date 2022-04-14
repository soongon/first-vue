import { createApp } from 'vue'
import App from './App.vue'
import CustomButton from './global-components/CustomButton.vue';

createApp(App)
    .component('CustomButton', CustomButton)
    .mount('#app')
