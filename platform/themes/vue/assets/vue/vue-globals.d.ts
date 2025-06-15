import { App } from 'vue';

declare global {
    const Vue: typeof import('vue');

    interface Window {
        Vue: typeof import('vue');
    }

    interface HTMLElement {
        __vue_app__?: App<Element>;
    }
} 