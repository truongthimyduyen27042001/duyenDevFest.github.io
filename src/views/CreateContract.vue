<template>
  <div class="create-container">
    <h2 class="content">{{ contract.name }}</h2>
    <ul class="list-step-create-contract">
      <li
        class="step-create init-contract"
        @click="setSelectComponent('personalSignal')"
        :class="{ active: isActive('personalSignal') }"
        :contract="contract"
      >
        <div class="step" :class="{ stepActive: isActive('personalSignal') }">
          1
        </div>
        Thông tin người ký
      </li>
      <li
        class="step-create init-contract"
        :class="{ active: isActive('contract') }"
        @click="setSelectComponent('contract')"
      >
        <div class="step" :class="{ stepActive: isActive('contract') }">2</div>
        Khởi tạo hợp đồng
      </li>
      <li
        class="step-create init-contract"
        :class="{ active: isActive('confirm') }"
        @click="setSelectComponent('confirm')"
      >
        <div class="step" :class="{ stepActive: isActive('confirm') }">3</div>
        Xác nhận hợp đồng
      </li>
      <li
        class="step-create init-contract"
        :class="{}"
        @click="setSelectComponent('doneContract')"
      >
        <div class="step" :class="{ stepActive: isActive('doneContract') }">
          4
        </div>
        Hoàn tất
      </li>
    </ul>
    <component :is="theSelectComponent" :contract="contract"></component>

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
import confirm from "./Confirm.vue";
import personalSignal from "./PersonSignal.vue";
import initContract from "./InitContract.vue";
import contract from "./Contract.vue";
import doneContract from "./DoneContract.vue";

export default {
  components: {
    confirm,
    personalSignal,
    initContract,
    contract,
    doneContract,
  },
  data() {
    return {
      activeTab: 0,
      contract: {
        id:
          Math.floor(Math.random() * 100) +
          "HDLD-" +
          new Date().getFullYear() +
          "/ABC/XYZ/",
        name: "Hợp đồng lao động",
        description: "Hợp đồng lao động công ty Paradox Vietnam",
        steps: [
          {
            description: "Nhập thông tin cá nhân",
          },
          {
            description: "Nhập thông tin công việc",
          },
          {
            description: "Xác nhận",
          },
        ],
        questions: [
          {
            key: "company_name",
            question: "Tên Công ty",
            type: "",
            answer: "",
            style: {
              width: "100%",
            },
          },
          {
            key: "employer_name",
            question: "Tên đại diện",
            type: "",
            answer: "",
            style: {
              width: "60%",
            },
          },
          {
            key: "employer_position",
            question: "Chức vụ",
            type: "",
            answer: "",
            style: {
              width: "40%",
            },
          },
          {
            key: "employer_country",
            question: "Quốc tịch",
            type: "",
            answer: "",
            disabled: true,
            style: {
              width: "100%",
            },
          },
          {
            key: "employer_address",
            question: "Địa chỉ",
            type: "",
            answer: "",
            style: {
              width: "100%",
            },
          },
          {
            key: "employer_numberPhone",
            question: "Số điện thoại",
            type: "",
            answer: "",
            style: {
              width: "100%",
            },
          },
          {
            key: "employer_taxNumber",
            question: "Mã số thuế",
            type: "",
            answer: "",
            style: {
              width: "100%",
            },
          },
          {
            key: "employer_accountNumber",
            question: "Số tài khoản",
            type: "",
            answer: "",
            style: {
              width: "60%",
            },
          },
          {
            key: "employer_bank",
            question: "Tên ngân hàng",
            type: "",
            answer: "",
            disabled: true,
            style: {
              width: "100%",
            },
          },
          {
            key: "employee_name",
            question: "Bên B (Tên người lao động)",
            type: "",
            answer: "",
            style: {
              width: "100%",
            },
          },
          {
            key: "employee_dateOfBirth",
            question: "Ngày/ tháng/ năm sinh",
            type: "",
            answer: "",
            style: {
              width: "50%",
            },
          },
          {
            key: "employee_Sex",
            question: "Giới tính",
            type: "",
            answer: "",
            style: {
              width: "50%",
            },
          },
          {
            key: "employee_homeTown",
            question: "Quê quán",
            type: "",
            answer: "",
            disabled: true,
            style: {
              width: "100%",
            },
          },
          {
            key: "employee_address",
            question: "Địa chỉ thường trú",
            type: "",
            answer: "",
            style: {
              width: "100%",
            },
          },
          {
            key: "employee_CMND",
            question: "Số CMND",
            type: "",
            answer: "",
            style: {
              width: "50%",
            },
          },
          {
            key: "employee_dateConform",
            question: "Ngày cấp",
            type: "",
            answer: "",
            style: {
              width: "50%",
            },
          },
          {
            key: "employee_level",
            question: "Trình độ",
            type: "",
            answer: "",
            style: {
              width: "60%",
            },
          },
          {
            key: "employee_major",
            question: "Chuyên ngành",
            type: "",
            answer: "",
            disabled: true,
            style: {
              width: "40%",
            },
          },
        ],
        employeeSignedAt: new Date(),
        companySignedAt: new Date(),
      },
      theSelectComponent: "personalSignal",
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

<style scoped>
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
