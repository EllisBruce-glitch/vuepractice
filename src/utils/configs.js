import configs from '@/configs.js';
import extendedConfigs from '@/extendConfigs.js';


const install = (app) => {
  let conf = {...configs, ...extendedConfigs};
  app.config.globalProperties.$configs = conf;
}


export { install as default, configs, extendedConfigs}
