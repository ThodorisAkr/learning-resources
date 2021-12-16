import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheResources from './components/learning-resources/TheResources.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('the-resources', TheResources);
app.component('base-dialog', BaseDialog);

app.mount('#app');
