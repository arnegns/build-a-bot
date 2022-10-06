import { createApp } from 'vue';
import currencyFilter from '@/shared/currency-filter';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency: currencyFilter,
};

app
  .use(router)
  .use(store)
  .mount('#app');
