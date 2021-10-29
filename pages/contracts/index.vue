<template>
  <div class="contract-wrapper">
    <h1>This is the contract wrapper page</h1>
    <nuxt-child />
  </div>
</template>

<script>
import {
  defineComponent,
  onUnmounted,
  useStore,
} from '@nuxtjs/composition-api';
import { contractStore } from '@/store-lazy/contract';

export default defineComponent({
  name: 'ContractWrapperPage',
  setup() {
    const store = useStore();
    // Dynamic vuex module
    if (!store.hasModule('contract')) {
      store.registerModule('contract', contractStore, {
        preserveState: false,
      });
    }
    // Only exist when viewing this page and it's sub-pages
    onUnmounted(() => {
      store.unregisterModule('contract');
    });
  },
});
</script>
