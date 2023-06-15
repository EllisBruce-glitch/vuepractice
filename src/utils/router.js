import $router from "@/router";

const router = {
    changeRoute(url, query){
      $router.push({ path: url, query: query || {}});
    },
    replaceRoute(url, query){
      $router.replace({ path: url, query: query || {}});
    },
    goBack() {
      $router.go(-1)
    },
    reload() {
      $router.go()
    }
}

const install = (app) => {
  app.config.globalProperties.$r = router
}

export { install as default, router }
