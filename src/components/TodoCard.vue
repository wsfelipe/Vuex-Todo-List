<template>
  <div v-for="card in cardlist" v-bind:key="card.index" class="content-card">
    <div v-if="card.status == status">
      <div class="card">
        <p>{{ card.title }}</p>
        <p>{{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoCard',
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters('cards', {
      cards: 'cards'
    }),
    cardlist: function() {
      return this.cards.filter((card) => {
        return card.status == this.status
      })
    }
  },
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
  transition: .8s;
}

.content-card:hover {
  cursor: pointer;
  background-color: #eee;
}

.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

</style>