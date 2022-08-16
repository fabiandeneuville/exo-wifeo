<template>
  <div id="app">
    <formBlock></formBlock>
    <articlesList></articlesList>

  </div>
</template>

<script>

import formBlock from './components/formBlock.vue'
import articlesList from './components/articlesList.vue'

export default {
  name: 'App',
  components: {
    formBlock,
    articlesList
  }
}
</script>

<style>

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
