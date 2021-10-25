<template>
  <div class="userInfo-container">
    <h2 class="content">User Information</h2>
    <form action="" class="form-info">
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
    </form>
    <div
      class="list-form-question"
      v-for="question in listQuestions"
      :key="question.id"
    >
      <form
        action=""
        class="form-info"
        :class="question.checkAns ? '' : 'form-error'"
      >
        <label for=""
          >{{ question.label }}
          <span class="error" v-if="question.isRequired">*</span></label
        >
        <div class="field-input">
          <input type="text" placeholder="Câu trả lời của bạn" />
          <div
            class="input-outline"
            :class="question.checkAns ? '' : 'input-outline-error'"
          ></div>
        </div>
        <div v-if="question.checkAns"></div>
        <div v-else class="error-require error">
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
      </form>
    </div>
    <div class="btn-add-more m-left">
      <button type="button" class="btn btn-secondary">Thêm</button>
      <button type="button" class="btn btn-success">Gửi</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listQuestions: [
        {
          id: "question1",
          label: "Tên",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question2",
          label: "Email",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question3",
          label: "Địa chỉ",
          checkAns: true,
          isRequired: true,
        },
        {
          id: "question4",
          label: "Số điện thoại",
          checkAns: false,
          isRequired: false,
        },
        {
          id: "question5",
          label: "Ghi chú",
          checkAns: false,
          isRequired: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.userInfo-container {
  width: fit-content;
  margin: auto;
}
.content {
  font-size: 25px;
  margin-top: 30px;
  font-size: 32px;
  line-height: 43.2px;
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
.form-info {
  position: relative;
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
  width: 350px;
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
  width: 60%;
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
  box-shadow: none!important;
}
</style>
