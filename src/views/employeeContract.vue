<template>
  <div class="showContract-container">
    <h2 class="content">Thông tin hợp đồng</h2>
    <ul class="list-step-create-contract row">
      <li
        class="step-create init-contract col-3"
        @click="setSelectComponent('employeeSignal')"
        :class="{ active: isActive('employeeSignal') }"
      >
        <div class="step" :class="{ stepActive: isActive('employeeSignal') }">
          1
        </div>
        Thông tin người ký
      </li>
      <li
        class="step-create init-contract col-3"
        :class="{ active: isActive('contract') }"
        @click="setSelectComponent('contract')"
      >
        <div class="step" :class="{ stepActive: isActive('contract') }">2</div>
        Xem hợp đồng
      </li>
    </ul>
    <component :is="theSelectComponent"></component>

    <div class="control-step">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="setReturn(theSelectComponent)"
        :disabled="isReturn"
      >
        Quay lại
      </button>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="setNext(theSelectComponent)"
        :disabled="isNext"
      >
        Tiếp theo
      </button>
    </div>
  </div>
</template>

<script>
import contract from "./Contract.vue";
import employeeSignal from "./employeeSignal.vue";
export default {
  components: {
    contract,
    employeeSignal,
  },
  data() {
    return {
      theSelectComponent: "employeeSignal",
    };
  },
  methods: {
    isActive: function (menuItem) {
      return this.theSelectComponent === menuItem;
    },
    setSelectComponent(menuItem) {
      this.theSelectComponent = menuItem;
    },
    setNext(theSelectComponent) {
      if (theSelectComponent === "personalSignal")
        this.theSelectComponent = "contract";
      if (theSelectComponent === "contract")
        this.theSelectComponent = "confirm";
      if (theSelectComponent === "confirm")
        this.theSelectComponent = "doneContract";
    },
    setReturn(theSelectComponent) {
      if (theSelectComponent === "doneContract")
        this.theSelectComponent = "confirm";
      if (theSelectComponent === "contract")
        this.theSelectComponent = "personalSignal";
      if (theSelectComponent === "confirm")
        this.theSelectComponent = "contract";
    },
  },
  computed: {
    isReturn() {
      return this.theSelectComponent === "personalSignal";
    },
    isNext() {
      return this.theSelectComponent === "doneContract";
    },
  },
};
</script>

<style lang="scss" scoped>
.showContract-container {
  padding-bottom: 30px;
  padding-top: 30px;
}
.create-container {
  padding-top: 30px;
  padding-bottom: 50px;
}
.step-create {
  cursor: pointer;
}
.list-step-create-contract {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
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
  color: #fff;
}
.active {
  color: #72767a !important;
  font-size: 16px;
  font-weight: 600;
}
button:focus {
  box-shadow: none !important;
}
.control-step {
  width: 700px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: auto;
  padding-top: 20px;
}
</style>
