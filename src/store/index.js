import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    }
  },
  actions: {
    increaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
    },
    decreaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseCounter', response.data)
      })
    },
  },
  getters: {

  },
  modules: {
  }
})
