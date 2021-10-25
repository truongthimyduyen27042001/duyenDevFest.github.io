<template>
  <div class="init-container">
    <h4 class="content">Chọn cách khởi tạo hợp đồng</h4>
    <div class="templateContract"><router-link to="/home">Khởi tạo hợp đồng mẫu</router-link></div>
    <div class="uploadContract">
      <div class="dropzone">
        <input
          type="file"
          id="dropzone-file"
          class="dropzone-file"
          multiple
          accept="image/*"
        />
        <div class="dropzone-wrapper">
          <label for="dropzone-file" class="dropzone-label dropzone-label-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-arrow-up-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
              />
            </svg>
            <div class="dropzone-label-text">
              <p><strong>Drag and drop files to upload</strong></p>
              <p>
                <small class="secondary-text"
                  >Your files will be added automatically</small
                >
              </p>
               <button type="button" class="button">or select files</button>
              </div>
          </label>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  background: #fafafa;
}
.init-container {
  padding: 20px 250px;
  text-align: left;
}
.content {
  text-align: left;
  cursor: pointer;
  margin-bottom: 30px;
}
.templateContract {
  padding: 50px;
  width: 100%;
  text-align: center;
  background: #fefefe;
  border: 1px solid #cacaca8a;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
}
.uploadContract {
  widows: 100%;
  padding: 50px;
  background: #fefefe;
  border: 1px solid #cacaca8a;
  border-radius: 8px;
}
.dropzone-label svg {
  width: 200px;
  height: 200px;
  margin: auto;
}
.uploadContract {
  border: 1px dashed #cacaca8a;
}
#dropzone-file {
  display: none;
}
.dropzone-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.dropzone-label-text {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dropzone-label-text button {
  border-radius: 3px;
  margin-top: 10px;
  width: fit-content;
  border: 1.5px solid #706f6f8a;
}
.dropzone-label p {
  margin-bottom: 0px!important;
}
</style>
