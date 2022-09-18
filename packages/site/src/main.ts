import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/animate.min.css';
import router from './router';
import animate from './directive/animte';

const app = createApp(App);
app.use(router);
app.directive('animate', animate);
app.mount('#app');
