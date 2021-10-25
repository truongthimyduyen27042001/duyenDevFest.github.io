<template>
  <div class="createTemplate-container">
    <h1>This is create by template</h1>
    <button
      type="button"
      class="btn btn-secondary"
      @click="isChoiceTemplate = false"
    >
      Quay lại
    </button>
  </div>
</template>

<script>
export default {
  props: ["isChoiceTemplate"],
};
</script>

<style scoped>
button:focus {
    box-shadow: none!important;
}
</style>
