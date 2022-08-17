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
        },
        MOVE_ELEMENT(state, payload){
            let temp = payload.article;
            state.articlesList.splice(payload.index, 1);
            state.articlesList.splice(payload.newIndex, 0, temp);
        }
    }
})