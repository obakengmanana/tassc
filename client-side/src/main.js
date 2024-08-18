import { createApp } from 'vue'; // Updated import for Vue 3
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Register the router
app.mount('#app');
