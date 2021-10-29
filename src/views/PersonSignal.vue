<template>
  <div class="personSignal">
    <form action="" class="form-sign-info">
      <div class="person-info">
        <div class="userInfo-container">
          <div class="contract-info d-flex justify-content-around row">
            <input
              type="text"
              class="nameContract col-8"
              disabled="true"
              v-model="myContract.name"
            />
            <button type="button" class="btn btn-primary col-2">
              Thay đổi
            </button>
          </div>
          <div class="form-info from-info-account">
            <div class="form-header"></div>
            <h5>Thông tin liên hệ</h5>
            <hr />
            <div class="infoContact">
              <div class="infoContact__left d-flex">
                <svg
                  style="width: 25px"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  class="svg-inline--fa fa-eye fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
                <div class="info">
                  <p class="account">
                    truongthimyduyen27042001@gmail.com
                    <span>(chưa được chia sẻ)</span>
                  </p>
                  <p class="changeAccount">Chuyển đổi tài khoản</p>
                </div>
              </div>
              <div class="infoContact__right">
                <svg
                  style="width: 25px"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cloud-upload-alt"
                  class="svg-inline--fa fa-cloud-upload-alt fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="error">* Bắt buộc</div>
          </div>
          <div
            class="list-form-question"
            v-for="(question, index) in employerInfo"
            :key="'question-' + index"
          >
            <div class="form-info">
              <label for=""
                >{{ question.question }} <span class="error">*</span></label
              >
              <div class="field-input">
                <input
                  v-model="question.answer"
                  :id="'anwser-' + index"
                  type="text"
                  placeholder="Câu trả lời của bạn"
                />
                <div
                  class="input-outline"
                  :class="question.checkAns ? '' : 'input-outline-errorssss'"
                ></div>
              </div>
            </div>
          </div>
          <div class="person-choice d-flex">
            <h4 class="choice-content">Chọn loại hợp đồng</h4>
            <v-select :options="typeContract" label="title"></v-select>
          </div>
          <div class="btn-add-more m-left">
            <button
              type="button"
              class="btn btn-secondary"
              @click="addNewField"
            >
              Thêm
            </button>
            <div
              id="modalAdd"
              class="modal"
              v-bind:style="isAddingNew ? 'display: block' : 'display: none;'"
            >
              >
              <div class="modal-content">
                <span class="close" @click="isAddingNew = false">&times;</span>
                <form action="" class="form-info">
                  <label for="" class="field-input"
                    ><input
                      type="text"
                      placeholder="Nhập câu hỏi"
                      v-model="newQuestion.label" /><span class="error"
                      >* Bắt buộc</span
                    >
                    <div class="input-outline"></div
                  ></label>
                  <div class="field-input">
                    <input
                      type="text"
                      placeholder="Câu trả lời của bạn"
                      v-model="newQuestion.answer"
                    />
                    <div class="input-outline"></div>
                  </div>
                  <div class="error-require error">
                    <svg
                      style="width: 17px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="exclamation-circle"
                      class="svg-inline--fa fa-exclamation-circle fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                      ></path>
                    </svg>
                    Đây là một câu hỏi bắt buộc
                  </div>
                  <div class="btn-accept-add mt-3">
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="acceptAdd(newQuestion)"
                    >
                      Xác nhận
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <button class="btn btn-success" @click="sendData">Gửi</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import http from "../api/http-common.js";
import _cloneDeep from "lodash/cloneDeep";

export default {
  model: {
    prop: "contract",
    event: "update",
  },
  props: {
    contract: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      myContract: {},
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      typeContract: [
        { title: "Hợp đồng dài hạn" },
        { title: "Hợp đồng ngắn hạn" },
      ],
      newEmployee: false,
      employerQuestions: [
        {
          id: "âsaasasas",
          label: "Email người lao động",
          answer: "dsdhsudhd",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "questions1sdsdsds11",
          label: "Ngày/tháng/năm ký hợp đồng",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question1",
          label: "Số hợp đồng",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question3",
          label: "Bên A (Người sử dụng lao động)",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question4",
          label: "Đại diện",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "questions4",
          label: "Chức vụ",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question5",
          label: "Quốc tịch",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question6",
          label: "Địa chỉ",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question7",
          label: "Điện thoại",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question8",
          label: "Mã số thuế",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question9",
          label: "Số tài khoản",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question10",
          label: "Tài khoản",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
      ],
      newQuestion: {
        id: "",
        label: "Đã được thêm",
        answer: "",
        checkAns: true,
        isRequired: true,
      },
      isAddingNew: false,
      selectedRole: "2",
    };
  },
  mounted() {
    this.myContract = _cloneDeep(this.contract);
  },
  computed: {
    employerInfo: function () {
      const dataRequires = [
        "company_name",
        "employer_name",
        "employer_position",
        "employer_country",
        "employer_numberPhone",
        "employer_taxNumber",
        "employer_accountNumber",
        "employer_bank",
      ];
      const employerInfo = [];
      dataRequires.forEach((key) => {
        const questionIndex = this.contract.questions.findIndex(
          (question) => question.key === key
        );
        employerInfo.push(this.contract.questions[questionIndex]);
      });
      return employerInfo;
    },
  },
  watch: {
    myContract: {
      handler() {
        this.updateContract();
      },
      deep: true,
    },
  },
  methods: {
    updateContract() {
      console.log("@@@@@@@@@2");
    },
    addNewField() {
      this.isAddingNew = !this.isAddingNew;
    },
    async acceptAdd() {
      this.isAddingNew = false;
      this.newQuestion.label = "";
      this.newQuestion.answer = "";
    },
    update: function (newRole) {
      this.selectedRole = newRole;
    },
    async sendData(event) {
      event.preventDefault();

      const duLieu = this.employerInfo;
      let _obj;
      const mang = [];
      duLieu.map((item) => {
        _obj = {
          [item.key]: item.answer,
        };
        mang.push(_obj);
      });
      // const newObj = Object.assign({},_obj)
      // console.log(newObj);
      // const arrToObj = Object.assign({},mang);
      // console.log(arrToObj);
      try {
        // eslint-disable-next-line no-unused-vars
        const userAccount = await http.post("/a/api/employer/", mang);
      } catch (err) {
        console.error(err);
      }
      // this.newEmployee = {
      //   id: "kkkkk",
      //   dataSigned: "12/12/2020",
      //   numberContract: "0115150",
      //   name: "Ten nguoi thue lao dong",
      //   email: "myduyentruong@gmail.com",
      //   dateOfBirth: "20/11/2020",
      //   sex: "male",
      //   homeTown: "Da Nang",
      //   address: "Dia chi thuong tru",
      //   CMND: "20181515151515",
      //   dateCertification: "31/07/2021",
      //   level: "Trung cấp",
      //   major: "CNTT",
      //   phone: "0789952262",
      // };
      // console.log(this.newEmployee);
      // const userAccount = await http.post("/a/api/employee/", this.employer);
      // console.log(userAccount);
    },
  },
};
</script>

<style lang="scss" scoped>
.nameContract {
  border: 2px solid black;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  text-align: center;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw !important;
  height: 100vh !important;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.modal-content .form-info {
  margin-top: 0px;
  padding: 12px;
}
.modal-content .form-info input {
  border: none;
  padding: 10px 0px;
  border-bottom: 1.5px solid #d4d4d4;
  width: 400px;
}
.modal-content .form-info input:focus {
  outline: none;
}
.modal-content .field-input input:focus-visible ~ .input-outline {
  width: 65%;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.personSignal {
  background: #fff;
  padding-top: 30px;
}
.personSignal .form-sign-info {
  margin: auto;
  padding: 20px 30px;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.05) !important;
}
.person-choice {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  .choice-content {
    margin-right: 20px;
  }
  .form-check {
    margin-right: 20px;
  }
}
.userInfo-container {
  width: fit-content;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  font-size: 20px;
  margin: 20px 0px;
  font-size: 32px;
  line-height: 25.2px;
  color: #202124;
}
form {
  text-align: left;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  width: 640px;
  margin-top: 30px;
}
.from-info-account {
  background: rgb(221, 221, 221);
}
.form-info {
  position: relative;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  width: 640px;
  margin-top: 30px;
}
.form-info label {
  margin-bottom: 20px;
}
.form-info h5 {
  font-size: 32px;
  line-height: 43.2px;
  color: #202124;
  position: relative;
}
.role {
  margin-top: 20px;
  color: #d93025;
  margin-left: 20px;
}
.infoContact {
  display: flex;
  position: relative;
  justify-content: space-between;
}
.form-header {
  position: absolute;
  width: 100%;
  height: 10px;
  background: #3d8f2d;
  top: 0;
  left: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
p {
  margin-bottom: 0px;
}
svg {
  font-size: 50px;
  margin-right: 10px;
}
.error {
  color: #d93025;
}
.field-input {
  position: relative;
}
.field-input input {
  width: 500px;
  border: none;
  border-bottom: 1.5px solid #d4d4d4;
  position: relative;
  padding: 5px 0px;
  font-size: 15px;
}
.field-input input:focus-visible {
  outline: 0 !important;
}
.input-outline {
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 3px solid #3d8f2d;
  transition: 0.5s;
  opacity: 0;
}
.input-outline-error {
  opacity: 1 !important;
  width: 60% !important;
  border-bottom: 3px solid #d93025 !important;
}
.field-input {
  width: 100%;
  opacity: 1;
}
.field-input input:focus-visible ~ .input-outline {
  width: 84%;
  opacity: 1;
}
.error-require {
  margin-top: 15px;
  font-size: 14px;
}
.error-require svg {
  margin-right: 5px;
}
.form-error {
  border: 1px solid #d93025;
}
.btn-add-more {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
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
