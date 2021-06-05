import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedCategory: '',
        cartList: []
    },
    mutations: {
        changeCategory(state, id) {
            state.selectedCategory = id;
        },
        addToCart(state, el) {
            state.cartList.push(el);
        }
    },
    actions: {
        changeCategory(context, id) {
            context.commit('changeCategory', id);
        },
        addToCart(context, el) {
            context.commit('addToCart', el);
        }
    }
});
