import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: global.localStorage,
})
export const state = () => ({
  xWon: 0,
  oWon: 0,
  equal: 0,
})

export const mutations = {
  setXWon(state) {
    state.xWon++
  },
  setOWon(state) {
    state.oWon++
  },
  setEqual(state) {
    state.equal++
  },
  resetScores(state) {
    state.xWon = 0
    state.oWon = 0
    state.equal = 0
  },
}

export const plugins = [vuexLocal.plugin]
