<template>
  <div class="miniNav">
    <div class="miniNav-container">
      <h1 class="miniNav-heading">My Document</h1>
      <div class="miniNav-category">
        <div class="miniNav-category__item active" @click="changeStatus('All')">
          <p>All Documents</p>
        </div>
        <div class="miniNav-category__item" @click="changeStatus('Draft')">
          <p>Draft</p>
        </div>
        <div class="miniNav-category__item" @click="changeStatus('Pending')">
          <p>Pending</p>
        </div>
        <div class="miniNav-category__item" @click="changeStatus('Signed')">
          <p>Signed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "miniNav",
  props: ["choiceTypeContract"],
  methods: {
    changeStatus: function (status) {
      this.$emit("changeStatus", status);
    },
  },
};
</script>

<style scoped>
.miniNav-container {
  margin: 1rem 4rem;
}
.miniNav-category {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}
.miniNav-category__item {
  width: calc(100% / 4);
  text-align: center;
  font-size: 1rem;
  border: 1px solid #c4c4c483;
  cursor: pointer;
}
.miniNav-category__item p {
  padding: 0.8rem 1.2rem;
}
.miniNav-category__item.active {
  background: #ebebeb;
  color: #000;
  border-bottom: 2px solid #eec4ce;
}
</style>
