import { createStore } from 'vuex'
import cards from './modules/cards'
import appinfos from './modules/appinfos'

export default createStore({
  modules: {
    appinfos,
    cards
  }
})