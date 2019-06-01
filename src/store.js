import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: []
  },
  mutations: {
    [types.SET_GROUPS] (state, payload) {
      state.groups = payload
      saveToStorage(state)
    }
  }
})

const saveToStorage = (obj) => {
  chrome.storage.sync.set(obj)
}
