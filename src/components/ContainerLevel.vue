<template>
  <div class="content-level">
      <div class="title">
        <h3>{{ title }}</h3>
      </div>
      <div class="content-cards">
        <TodoCard :status="status"></TodoCard>
      </div>
  </div>
</template>

<script>
import TodoCard from './TodoCard.vue'
export default {
  name: 'ContainerLevel',
  props: {
    title: {
      type: String,
      default: ''
    },
    status: {
      type: Number,
      default: 0
    }
  },
  components: {
    TodoCard
  }
}
</script>

<style scoped>
.content-level {
  background: #555;
  border-radius: 8px;
  box-shadow: #222 4px 2px 4px 2px;
  margin: 20px;
  width: 100%;
  padding: 10px;
  color: #ccc;
}
.content-cards{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h3 {
  padding-bottom: 1rem;
  border-bottom: 2px solid #ccc;
}
</style>