<template>
  <div class="profile-page">
    Heheh
    <h1>This is an profile page</h1>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ProfilePage',
  head() {
    return {
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    };
  },
});
</script>
