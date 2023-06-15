import { get, isValidResponse } from '@/utils/axios'
import { router } from '@/utils/router'

const data = {
  Token: null,
  UserData : null
}

export const state = {
  data
}

export const getters = {
  getToken: (state) => {
    //check expiration of token
    return state.data.Token
  },
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
  },
  fetchData: async (context, payload) => {
    if(!context.state.data.Token) return;
    
    const UserData = await get(`/user/info`)
    if(!isValidResponse(UserData)) return router.replaceRoute('/logout')

    //console.log('user data fetched', UserData);
    context.commit('UPDATE_DATA', { UserData })
    return
  }
}

export const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
