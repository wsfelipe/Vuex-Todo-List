<template>
  <div class="app">
    <BodyTitle/>
    <ContainerList/>
  </div>
</template>

<script>
import BodyTitle from './components/BodyTitle.vue'
import ContainerList from './components/ContainerList.vue'

export default {
  name: 'App',
  components: {
    BodyTitle,
    ContainerList,
  }
}
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  background: #333;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #999;
  margin: 60px;
}
</style>
