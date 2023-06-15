import { store } from '@/store'

const translation = {
  getLanguage() {
    let languageCode = store.getters['translation/getData']?.languageCode
    return languageCode
  },
  translate(translationCode, fallbackTrans) {
    let languageCode = store.getters['translation/getData']?.languageCode
    let translationName = store.getters['translation/getData']?.translations?.[languageCode]?.[translationCode] || fallbackTrans || translationCode
    return translationName
  }
}

const install = (app) => {
  app.config.globalProperties.$t = translation
}

export { install as default, translation }
