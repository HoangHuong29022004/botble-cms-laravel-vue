import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Create Vue app
    const app = createApp(App);

    // Use plugins
    app.use(router);
    app.use(store);

    // Mount app
    const container = document.getElementById('app');
    if (container) {
        // Check if an app is already mounted
        const vueApp = (container as HTMLElement & { __vue_app__?: any }).__vue_app__;
        if (vueApp && typeof vueApp.unmount === 'function') {
            vueApp.unmount();
        }

        // Mount new app
        app.mount(container);
    }
});