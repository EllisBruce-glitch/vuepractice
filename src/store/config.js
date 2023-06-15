const data = {
  statusList: []
}

export const state = {
  data
}

export const getters = {
  getData: (state) => {
    return state.data
  }
}

export const mutations = {
  UPDATE_DATA(state, payload) {
    state.data = { ...state.data, ...payload }
  },
  RESET_DATA(state) {
    state.data = { ...data }
  }
}

export const actions = {
  setData: (context, payload) => {
    context.commit('UPDATE_DATA', payload)
  },
  resetData: (context) => {
    context.commit('RESET_DATA')
  }
}

export const config = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
