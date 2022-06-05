import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        thirdRendering: false,
    },
    mutations: {
        setStatusThirdRendering (state, payload) {
            state.thirdRendering = payload;
        }
    },
    actions: {
        setStatusThirdRendering (context, payload) {
            context.commit('setStatusThirdRendering', payload)
        }
    },
    getters: {
        thirdRendering: ({ thirdRendering }) => thirdRendering
    }
})
