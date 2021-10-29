<template>
  <div class="law-container">
    <div class="container">
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <a id="view" class="filter__link" href="#">Xem</a>
          </div>
          <div class="header__item">
            <a id="number" class="filter__link filter__link--number" href="#"
              >Số hiệu</a
            >
          </div>
          <div class="header__item">
            <a id="date" class="filter__link filter__link--number" href="#"
              >Ngày ban hành</a
            >
          </div>
          <div class="header__item-desc">
            <a id="desc" class="filter__link filter__link--number" href="#"
              >Nội dung tóm tắt</a
            >
          </div>
        </div>
        <div class="table-content">
          <div class="table-row">
            <div class="table-data"><i class="fas fa-eye"></i></div>
            <div class="table-data">32/32/1/32132dsad</div>
            <div class="table-data">11/01/2022</div>
            <div class="table-data-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              amet, omnis ratione nostrum ad, porro repellendus voluptatum esse
              ipsum repudiandae dolor a error ab voluptatem odit est commodi
              aliquam quos!
            </div>
          </div>
          <div class="table-row">
            <div class="table-data"><i class="fas fa-eye"></i></div>
            <div class="table-data">32/32/1/32132dsad</div>
            <div class="table-data">11/01/2022</div>
            <div class="table-data-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              amet, omnis ratione nostrum ad, porro repellendus voluptatum esse
              ipsum repudiandae dolor a error ab voluptatem odit est commodi
              aliquam quos!
            </div>
          </div>
          <div class="table-row">
            <div class="table-data"><i class="fas fa-eye"></i></div>
            <div class="table-data">32/32/1/32132dsad</div>
            <div class="table-data">11/01/2022</div>
            <div class="table-data-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              amet, omnis ratione nostrum ad, porro repellendus voluptatum esse
              ipsum repudiandae dolor a error ab voluptatem odit est commodi
              aliquam quos!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Law",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  padding: 24px;
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.container {
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
}

.table {
  width: 100%;
  border: 1px solid #eeeeee;
}

.table-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background: #000;
  padding: 18px 0;
}

.table-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 18px 0;
}

.table-row:nth-of-type(odd) {
  background: #eeeeee;
}

.table-data-desc,
.header__item-desc {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 50%;
  flex: 1 1 50%;
}

.table-data,
.header__item {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 20%;
  flex: 1 1 20%;
  text-align: center;
  align-items: center;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: 24px;
  padding-right: 24px;
}

.filter__link::after {
  content: "";
  position: absolute;
  right: -18px;
  color: white;
  font-size: 12px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.filter__link.desc::after {
  content: "(desc)";
}

.filter__link.asc::after {
  content: "(asc)";
}
</style>
