import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articlesList : []
    },
    mutations : {
        ADD_ARTICLE(state, article){
            state.articlesList.push(article);
        },
        REMOVE_ARTICLE(state, index){
            state.articlesList.splice(index, 1);
        }
    }
})