import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingCell: null,
    fileArray: ["QWERTY","ABCDE"],
    fileIndex: 0,
    blockSize: 2,
  },
  mutations: {
    changeEditing (state, payload) {
      state.editingCell = payload;
    },
    changeFileIndex (state, payload) {
      state.fileIndex = payload;
    },
    changeBlockSize (state, payload) {
      state.blockSize = payload;
    },
  },
  actions: {
    
  }
})
