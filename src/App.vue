<template>
  <div id="app">
    <!-- add loader page / splash here -->
    <router-view v-if="loaded" />
    <notifications position="top right" :max="1" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { store } from "@/store";

export default {
  name: "App",
  components: {},
  setup() {
    let loaded = ref(false);

    onMounted(async () => {
      await store.dispatch("translation/fetchData");
      await store.dispatch("user/fetchData");
      await store.dispatch("page/resetData");
      loaded.value = true;
    });

    return { loaded };
  },
};
</script>

<style>
.vue-notification-group {
  margin-top: 5px;
}
</style>
