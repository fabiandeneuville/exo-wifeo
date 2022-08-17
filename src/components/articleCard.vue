<template>
    
    <div class="card">
        <div class="btn__container">
            <button v-on:click="moveElement('left')">←</button>
            <button v-on:click="moveElement('right')">→</button>
            <button v-on:click="removeArticle">🗑</button>
        </div>
        <h2>{{ article }}</h2>
    </div>

</template>

<script>

import store from '../store/index'

export default {
    name: 'articleCard',
    props: ['article', 'index'],
    methods: {
        removeArticle(){
            store.commit('REMOVE_ARTICLE', this.index)
        },
        moveElement(direction){
            let payload = {
                index: this.index,
                newIndex : 0,
                article : this.article
            }
            if(direction === 'left'){
                payload.newIndex = this.index - 1
                store.commit('MOVE_ELEMENT', payload)
            } else if (direction === 'right'){
                payload.newIndex = this.index + 1
                store.commit('MOVE_ELEMENT', payload)
            } else {
                return
            }
        }
    }
}

</script>

<style scoped>

.card {
    width: 200px;
    border: 1px solid #333
}

.btn__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

button {
    border: none;
    padding: 5px;
    cursor: pointer;
    font-size: 20px;
}

button:hover {
    background: #333;
    color: white;
}

</style>