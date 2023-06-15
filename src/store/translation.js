import { get, isValidResponse } from '@/utils/axios'

const data = {
  languageCode: 'EN',
  translations: {},
}

export const state = {
  data
}

export const getters = {
  getData: (state) => {
    return state.data
  },
  getLanguage: (state) => {
    return state.data.languageCode
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
  setLanguage: async (context, payload) => {
    context.commit('UPDATE_DATA', payload)
  },
  resetData: (context) => {
    context.commit('RESET_DATA')
  },
  fetchData: async (context, payload) => {
    
    const translationList = await get(`/translation/public`, { LanguageCode : context.state.data.languageCode })
    if(!isValidResponse(translationList)) return;

    let translations = context.state.data.translations
    translations[context.state.data.languageCode] = translationList
    context.commit('UPDATE_DATA', { translations })

  }
}

export const translation = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
