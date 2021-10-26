<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
export default {
  components: {
    defaultLayout,
    unauthLayout,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === "unauth") return "unauthLayout";
      else return "defaultLayout";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro:400,900&display=swap");

* {
  margin: 0px;
  font-family: "Roboto", sans-serif;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
