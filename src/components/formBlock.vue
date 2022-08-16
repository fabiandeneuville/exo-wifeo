<template>
    
    <form>
        <h1>Ajouter un article</h1>
        <input v-model="article" type="text">
        <button v-on:click="addArticle">Ajouter</button>
        <p class="error">{{ error }}</p>
    </form>

</template>

<script>

import store from '../store/index'

export default {
    name: 'formBlock',
    data(){
        return {
            article: '',
            error: ''
        }
    }, 
    methods: {
        addArticle(e){
            e.preventDefault()
            if(this.article === ''){
                this.error = "Veuillez renseigner un article à ajouter"
            } else {
                this.error = '';
                store.commit('ADD_ARTICLE', this.article)
                this.article = '';
            }
        }
    }
}

</script>

<style scoped>

h1 {
    margin-bottom: 10px;
}

p {
    margin: 10px auto;
}

button {
    padding: 5px;
    border-radius: 0;
    border: 1px solid grey;
    cursor: pointer;
}

input {
    padding: 5px;
    border-radius: 0;
    border: 1px solid grey;
}

</style>