<template>
  <div :class="$style.layoutWrapper">
    <div :class="$style.layoutInner">
      <div :class="$style.layoutPageWrapper">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'DefaultLayout',
  setup() {},
});
</script>

<style lang="scss" module>
.layoutWrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.layoutInner {
  display: flex;
  flex: 1; // Horizontal spread
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
}

.layoutPageWrapper {
  flex: 1;
  overflow: auto;
  padding: 1rem;
}
</style>
