export default {
  SET_CARD_STATUS(state, status){
    state.cards.status = status;
  },
  BACKWARD(state, id){
    state.cards[id-1].status--;
  },
  FORWARD(state, id){
    state.cards[id-1].status++;
  }
}