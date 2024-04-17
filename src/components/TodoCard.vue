<template>
  <div v-for="card in cards" v-bind:key="card.index" class="content-card">
    <div v-if="card.status == status">
      <div class="card-title">
        <p>{{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoCard',
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      cards: this.$store.getters.cards.filter((c) => c.status==this.status)
    }
  }
}
</script>

<style scoped>
.content-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  font-size: 14px;
  border-radius: 4px;
  background: #aaa;
}

</style>