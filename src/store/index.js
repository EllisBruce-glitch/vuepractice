import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { configs } from '@/utils/configs'

import SecureLS from '@/libs/secure-ls'
const secureLocalStorage = new SecureLS({ isLocalStorage: true, isCompression: true, encodingType: 'rc4', encryptionSecret: configs.encryptionSecret })
const secureSessionStorage = new SecureLS({ isLocalStorage: false, isCompression: true, encodingType: 'rc4', encryptionSecret: configs.encryptionSecret })

import { config } from './config'
import { page } from './page'
import { translation } from './translation'
import { user } from './user'

const persistedLocalStorage = createPersistedState({
  key: configs.tokenSession,
  paths: ['translation'],
  storage: {
    getItem: (key) => secureLocalStorage.get(key),
    setItem: (key, value) => secureLocalStorage.set(key, value),
    removeItem: (key) => secureLocalStorage.remove(key)
  }
})

const persistedSessionStorage = createPersistedState({
  key: configs.tokenSession,
  paths: ['user', 'config', 'page'],
  storage: {
    getItem: (key) => secureSessionStorage.get(key),
    setItem: (key, value) => secureSessionStorage.set(key, value),
    removeItem: (key) => secureSessionStorage.remove(key)
  }
})

export const store = createStore({
  modules: {
    config,
    translation,
    page,
    user
  },
  plugins: [persistedLocalStorage, persistedSessionStorage]
})

export function useStore() {
  return store
}

export default store
