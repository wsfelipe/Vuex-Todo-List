import { createStore } from 'vuex'

const store = createStore({
  state: {
    appName: 'Vuex To Do List',
    cards: [
      {
        index: 1,
        title: 'titulo 1',
        desc: 'lorem ipsum',
        status: 2
      },
      {
        index: 2,
        title: 'titulo 2',
        desc: 'lorem ipsum',
        status: 1
      },
      {
        index: 3,
        title: 'titulo 3',
        desc: 'lorem ipsum',
        status: 0
      },
      
    ],
    status: ['fazer','fazendo','aguardando','concluido']
  },
  getters: {
    appName(state) {
      return state.appName
    },
    cards(state) {
      return state.cards
    },
    status(state) {
      return state.status
    }
  }
})

export default store