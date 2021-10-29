<template>
  <div :class="$style.contractDetailPageWrapper">
    <div :class="$style.contractWrapper">
      <h1>{{ contract.contractName }}</h1>
      <el-form>
        <div
          v-for="(section, sectionIndex) in contract.contractFields"
          :key="'section-' + sectionIndex"
        >
          <h3>{{ section.sectionName }}</h3>
          <div
            v-for="(field, fieldIndex) in section.sectionFields"
            :key="'field-' + fieldIndex"
          >
            <el-form-item>
              <label :for="'section-' + sectionIndex + '-field-' + fieldIndex">
                {{ field.label }}
              </label>
              <el-input
                :id="'section-' + sectionIndex + 'field-' + fieldIndex"
                v-model="field.value"
              />
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Contract } from '@/models/Contract';
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ContractDetailPage',
  data() {
    return {
      contract: Contract(),
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
.contractDetailPageWrapper {
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  :global {
    .el-input {
      width: auto;
    }
    .el-input__inner {
      height: 20px;
      border: none;
      padding: 0;
      border-radius: 0;
      border-bottom: 1px dashed color(gray);
    }
  }
}
.contractWrapper {
  width: 1000px;
  padding: 100px;
  border-radius: 10px;
  background-color: color(gray, 100);
}
</style>
