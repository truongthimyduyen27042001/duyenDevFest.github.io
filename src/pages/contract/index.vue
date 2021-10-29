<template>
  <div class="contract-wrapper">
    <h1>This is the contract wrapper page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { store } from '@/store'
import { defineComponent, onUnmounted } from '@vue/composition-api'
import { contractStore } from '@/store-lazy/contract'
export default defineComponent({
  name: 'ContractWrapperPage',
  setup() {
    // Dynamic vuex module
    if (!store.hasModule('contract')) {
      store.registerModule('contract', contractStore, {
        preserveState: false,
      })
    }
    // Only exist when viewing this page and it's sub-pages
    onUnmounted(() => {
      store.unregisterModule('contract')
    })
  },
})
</script>
