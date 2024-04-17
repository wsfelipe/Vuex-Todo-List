<template>
  <div class="content-list">
      <ContainerLevel title="A Fazer" :status=0 />
      <ContainerLevel title="Fazendo" :status=1 />
      <ContainerLevel title="Aguardando Pendências" :status=2 />
      <ContainerLevel title="Concluído" :status=3 />
  </div>
</template>

<script>
import ContainerLevel from './ContainerLevel.vue';
export default {
  name: 'ContainerList',
  components: {
    ContainerLevel
  }
}
</script>

<style scoped>
.content-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  border-radius: 8px;
  height: 400px;
  gap: 10px;
  background: #333;
}
</style>