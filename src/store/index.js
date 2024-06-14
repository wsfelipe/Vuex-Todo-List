import { createStore } from 'vuex'
import cards from './modules/cards'
import appinfos from './modules/appinfos'
import containers from './modules/containers'

export default createStore({
  modules: {
    appinfos,
    cards,
    containers
  }
})