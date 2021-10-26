<template>
  <div class="sideBar">
    <div class="sideBar-search">
      <input placeholder="Search documents" />
      <i class="fas fa-search"></i>
    </div>
    <button class="sideBar-create mt-2 p-2">Search</button>
    <div class="sideBar-category">
      <span class="sideBar-category__heading">Private</span>
      <div class="sideBar-category__docs">
        <i class="fas fa-folder"></i>
        Hợp đồng dài hạn (3)
      </div>
      <div class="sideBar-category__docs">
        <i class="fas fa-folder"></i>
        Hợp đồng ngắn hạn (4)
      </div>
      <div class="add-more-folder" @click="isAddingFile = !isAddingFile">
        <i class="fas fa-plus-square"></i>
        Thêm thư mục
      </div>
      <div class="add-new" v-if="isAddingFile">
        <div class="add-file-new">
          <i class="fas fa-folder"></i>
          <input type="text" />
        </div>
        <button type="button" class="btn btn-secondary">Thêm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAddingFile: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.sideBar {
  height: 100vh;
  width: 18rem;
  top: 0;
  margin-top: 3.5rem;
  z-index: -1;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-top: 2rem;
  padding: 0.8rem 1.4rem;
  outline: none;
  border: none;
  background-color: #49c79f;
  font-weight: 700;
  border-radius: 5px;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
.sideBar-search input {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  outline: none;
}
.sideBar-search {
  position: relative;
}
.sideBar-search i {
  position: absolute;
  top: 50%;
  right: 0.4rem;
  color: #c4c4c4;
  font-size: 1rem;
}
.sideBar-category {
  text-align: left;
}
.sideBar-category__heading {
  color: #c4c4c4;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
}
.sideBar-category__doc {
  margin-top: 0.6rem;
  margin-left: 1rem;
  cursor: pointer;
}
.sideBar-category__docs i {
  margin-right: 0.4rem;
  color: #c4c4c4;
}
.add-more-folder {
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
}
.add-new {
  .add-file-new {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
    padding: 5px 8px;
    border: transparent;
    background-color: #49c79f;
    transition: 0.8s;
  }
  button:focus {
    box-shadow: none !important;
  }
}
.add-file-new i {
  margin-right: 10px !important;
}
input {
      padding-left: 1rem;
      padding: 0.4375rem 1rem;
      font-size: 0.8125rem;
      font-weight: 400;
      line-height: 1.25rem;
      color: #3c4d62;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #dbdfea;
      border-radius: 4px;
    }
    input:focus {
      color: #3c4d62;
      background-color: #fff;
      border-color: #854fff;
      outline: 0;
      box-shadow: 0 0 0 3px rgb(133 79 255 / 10%);
    }
</style>
