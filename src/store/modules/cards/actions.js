export default {
  setStatus({ commit }, newValue) {
    commit("SET_CARD_STATUS", newValue)
  },
  backward({ commit }, newValue) {
    commit("BACKWARD", newValue)
  },
  forward({ commit }, newValue) {
    commit("FORWARD", newValue)
  },
  
}