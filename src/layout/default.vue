<template>
  <div class="default-inner">
    <Navbar />
    <h1>This is default</h1>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
