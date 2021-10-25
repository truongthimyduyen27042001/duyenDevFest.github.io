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
        My document
        <div class="sideBar-category__doc">
          <i class="fas fa-folder"></i> <span>Employee Contracts</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.sideBar-create {
  margin-top: 2rem;
  padding: 0.8rem 1.4rem;
  outline: none;
  border: none;
  background-color: #75e95e;
  font-weight: 700;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
.sideBar-search input {
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
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
  width: 80%;
}
.sideBar-category__heading {
  font-size: 1.4rem;
  color: #c4c4c4;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
}
.sideBar-category__docs {
  font-size: 1.2rem;
}
.sideBar-category__docs i {
  margin-right: 0.4rem;
  color: #c4c4c4;
}
.sideBar-category__doc {
  margin-top: 0.6rem;
  margin-left: 1rem;
}
</style>
