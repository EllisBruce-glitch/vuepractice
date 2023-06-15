<template>
  <div></div>
</template>
<script>
import { router } from '@/utils/router'
import { store } from '@/store'

export default {
  setup(){  
    store.dispatch('user/resetData')
    router.replaceRoute('/login')
  }
}
</script>
<style></style>