<template>
    
    <ul>
        <li v-bind:key="index" v-for="(article, index) in getAllArticles">
            <articleCard
            v-bind:article="article"
            v-bind:index="index"
            >
            </articleCard>
        </li>
    </ul>

</template>

<script>

import store from '../store/index'

import articleCard from './articleCard.vue'

export default {
    name: 'articleList',
    components: {
        articleCard
    },
    computed : {
        getAllArticles(){
            return store.state.articlesList
        }
    }
}

</script>

<style scoped>

    ul {
        width: 90%;
        max-width: 650px;
        margin: 25px auto;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

</style>