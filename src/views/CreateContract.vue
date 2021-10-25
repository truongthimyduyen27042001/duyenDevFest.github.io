<template>
  <div class="create-container">
    <h2 class="content">Tạo hợp đồng</h2>
    <ul class="list-step-create-contract">
      <li
        class="step-create init-contract"
        @click="setSelectComponent('personalSignal')"
        :class="{ active: isActive('personalSignal') }"
      >
        <div class="step" :class="{ stepActive: isActive('personalSignal') }">1</div>
        Thông tin người ký
      </li>
      <li
        class="step-create init-contract"
        :class="{ active: isActive('initContract') }"
        @click="setSelectComponent('initContract')"
      >
        <div class="step" :class="{ stepActive: isActive('initContract') }">2</div>
        Khởi tạo hợp đồng
      </li>
      <li
        class="step-create init-contract"
        :class="{ active: isActive('designcontract') }"
        @click="setSelectComponent('designcontract')"
      >
        <div class="step" :class="{ stepActive: isActive('designcontract') }">3</div>
        Thiết kế hợp đồng
      </li>
      <li
        class="step-create init-contract"
        :class="{}"
        @click="setSelectComponent('confirm')"
      >
        <div class="step" :class="{ stepActive: isActive('confirm') }">4</div>
        Xác nhận và hoàn tất
      </li>
    </ul>
    <component :is="theSelectComponent"></component>
  </div>
</template>

<script>
import designcontract from "./DesignContract.vue";
import confirm from "./Confirm.vue";
import personalSignal from "./PersonSignal.vue";
import initContract from "./InitContract.vue";
export default {
  components: {
    designcontract,
    confirm,
    personalSignal,
    initContract,
  },
  data() {
    return {
      theSelectComponent: "initContract",
    };
  },
  methods: {
    isActive: function (menuItem) {
      return this.theSelectComponent === menuItem;
    },
    setSelectComponent(menuItem) {
      this.theSelectComponent = menuItem;
    },
  },
};
</script>

<style scoped>
.step-create {
  cursor: pointer;
}
.list-step-create-contract {
  display: flex;
  list-style: none;
  align-items: center;
  padding: 20px 250px;
  justify-content: space-between;
}
.step-create {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
}
.step {
  border: 1px solid #72767a;
  padding: 10px 16px;
  border-radius: 50%;
  margin-right: 10px;
  color: #000;
  font-size: 15px; 
  font-weight: 500;
}
.stepActive {
    background: #72767a !important;
}
.active {
    color: #72767a!important;
    font-size: 16px;
    font-weight: 600;
}
</style>
