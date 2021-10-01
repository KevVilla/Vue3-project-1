<template>
  <div>
    <rm-header></rm-header>
    <router-view />
  </div>
</template>

<script>
import RmHeader from "./components/RmHeader.vue";
export default {
  components: {
    RmHeader,
  },
  setup() {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
</style>
