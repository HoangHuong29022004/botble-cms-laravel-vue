import { createStore } from "vuex";
import { InjectionKey } from "vue";
import { Store } from "vuex";

export interface State {
    count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
    state: {
        count: 0,
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
}); 