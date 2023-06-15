let configs = {
  baseURL: '',
  environment: 'local',
  title: 'Onomato Demo',
  appId: 'onomato-app-1',
  baseURLInfo: {
    local: 'http://localhost:3000/api',
    development: '',
    production: ''
  },
  axiosTimeout: 300000,
  tokenSession: 'onomato-web-app',
  encryptionSecret: 'sOxEJy03FPI2OCl$35ew1c0c!r'
}

configs.baseURL = configs.baseURLInfo[configs.environment]

export default configs