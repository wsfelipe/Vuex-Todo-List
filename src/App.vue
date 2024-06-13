<template>
  <div class="app">
    <BodyTitle/>
    <ContainerList/>
    <Footer/>
  </div>
</template>

<script>
import BodyTitle from './components/BodyTitle.vue'
import ContainerList from './components/ContainerList.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    BodyTitle,
    ContainerList,
    Footer
  }
}
</script>

<style>
body {
  display: flex;
  width: auto;
  flex-direction: column;
  background: #333;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #999;
  margin: 0;
  padding: 0;
}
</style>
