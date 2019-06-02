import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: []
  },
  mutations: {
    [types.SET_GROUPS] (state, groups) {
      state.groups = groups
      saveToStorage(state)
    },
    [types.UPDATE_GROUP] (state, payload) {
      const index = payload.index
      const tabs = payload.tabs
      state.groups[index].tabs = tabs
      saveToStorage(state)
    },
    [types.PUSH_TO_GROUP] (state, payload) {
      const index = payload.index
      const tab = payload.tab
      state.groups[index].tabs.push(tab)
      saveToStorage(state)
    },
    [types.DELETE_GROUP] (state, index) {
      state.groups.splice(index, 1)
      saveToStorage(state)
    }
  }
})

const saveToStorage = (obj) => {
  chrome.storage.sync.set(obj)
}
