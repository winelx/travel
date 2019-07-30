import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)

export default new vuex.Store({
  state: {
    jsonId: ""
  },
  actions: {
    change(ext, val) {
      ext.commit("change",val)
    }
  },
  mutations: {
    change(state, val) {
      state.jsonId = val
    }
  }
})
