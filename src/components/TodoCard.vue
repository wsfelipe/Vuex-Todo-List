<template>
  <div v-for="card in cardlist" v-bind:key="card.index" class="content-card">
    <div v-if="card.status == status">
      <div class="card">
        <img
          v-if="this.status !== 0"
          class="arrows"
          src="../assets/left-arrow.png"
          @click="this.backward(card.id)"
        >
        <p>{{ card.title }}</p>
        <p>{{ card.title }}</p>
        <img 
          v-if="this.status !== 3"
          class="arrows"
          src="../assets/right-arrow.png"
          @click="this.forward(card.id)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TodoCard',
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions('cards', {
      backward: 'backward',
      forward: 'forward'
    })
  },
  computed: {
    ...mapGetters('cards', {
      cards: 'cards'
    }),
    cardlist: function() {
      return this.cards.filter((card) => {
        console.log(this.status)
        return card.status == this.status
      })
    },
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
  justify-content: space-around;
  gap: 10px;
  align-items: center;
}

.arrows {
  width: 15px;
  height: 15px;
  padding: 10px;
  border-radius: 100%;
  transition: .6s;
}

.arrows:hover {
  background-color: #aaa;
}

</style>