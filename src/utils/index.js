import axios from '@/utils/axios'
import configs from '@/utils/configs'
import helpers from '@/utils/helpers'
import translation from '@/utils/translation'
import router from '@/utils/router'
//import socket from '@/utils/socket'

export default (app) => {
  app.use(axios)
  app.use(configs)
  app.use(helpers)
  app.use(translation)
  app.use(router)
  //app.use(socket)
}
