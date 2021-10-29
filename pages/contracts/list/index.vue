<template>
  <div class="contracts-page">
    <div
      v-for="contract in contracts"
      :key="contract.name"
      :class="$style.contractItemWrapper"
    >
      <!--  -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ContractsPage',
  data() {
    return {
      contracts: [
        {
          contractId: '', // Backend tự generate
          contractName: '', // Required
          contractDescription: '',
          contractType: '', // Required
          contractStatus: '', // Backend tự generate, PENDING, ACCEPTED, REJECTED
          contractStartDate: '', // Required
          contractEndDate: '', // Nếu null thì là hợp đồng vô hạn
          employeeId: '', // Required
          employeeSignedAt: new Date(),
          employeeSignature: '', // Base 64 string
          companyId: '', // Required
          companySignedAt: new Date(),
          companySignature: '', // Base 64 string
          contractFields: [],
        },
        {
          contractId: '', // Backend tự generate
          contractName: '', // Required
          contractDescription: '',
          contractType: '', // Required
          contractStatus: '', // Backend tự generate, PENDING, ACCEPTED, REJECTED
          contractStartDate: '', // Required
          contractEndDate: '', // Nếu null thì là hợp đồng vô hạn
          employeeId: '', // Required
          employeeSignedAt: new Date(),
          employeeSignature: '', // Base 64 string
          companyId: '', // Required
          companySignedAt: new Date(),
          companySignature: '', // Base 64 string
          contractFields: [],
        },
      ],
    };
  },
  head() {
    return {
      title: this.$route.params.slug,
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    };
  },
});
</script>

<style lang="scss" module>
.contractItemWrapper {
  //
}
</style>
