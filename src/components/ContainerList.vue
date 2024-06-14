<template>
  <div class="content-list">
      <ContainerLevel
        v-for="container in containers"
        :key="container.index"
        :title="container.title"
        :status="container.status"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContainerLevel from './ContainerLevel.vue';
export default {
  name: 'ContainerList',
  components: {
    ContainerLevel
  },
  computed: {
    ...mapGetters('containers', {
      containers: 'containers'
    })
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