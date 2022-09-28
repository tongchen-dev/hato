import App from './App.vue';
import { createApp } from 'vue';
import router from './router/router';
import arco from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(router);
app.use(arco);
app.mount('#app');
