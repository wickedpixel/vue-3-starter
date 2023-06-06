import { createApp, vue } from 'vue'
import ResultsTable from './components/ResultsTable.vue'

defaultConfig({
    theme: 'genesis', // will load from CDN and inject into document head,
    locales: { ro },
    locale: 'ro',
})

import './assets/main.scss'


jQuery( document ).ready(function() {
    const appContainer = document.querySelectorAll("#app");
    if(appContainer.length){
        const app = createApp(ResultsTable);
        app.use(plugin, defaultConfig)
        app.mount('#app');
    }
});


