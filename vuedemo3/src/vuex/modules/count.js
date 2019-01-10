export default {
  state: {
    num: 0
  },
  mutations: {
    increment (state,index) {
      state.num=state.num+index
    }
  }
}
