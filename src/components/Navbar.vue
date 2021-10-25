<template>
  <div class="navbar-container">
    <div class="navbar__left">
      <ul class="list-nav-item">
        <li class="item-nav brand active">
          <svg
            aria-hidden="true"
            style="width: 30px"
            focusable="false"
            data-prefix="fas"
            data-icon="file-signature"
            class="svg-inline--fa fa-file-signature fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z"
            ></path>
          </svg>
          <h3 class="brandname">Contractbook</h3>
        </li>
        <li class="item-nav active"><router-link to="/home">Home</router-link></li>
        <li class="item-nav"><router-link to="/createContract">Create</router-link></li>
        <li class="item-nav"><router-link to="/document">Document</router-link></li>
        <li class="item-nav"><router-link to="/document">Search</router-link></li>
      </ul>
    </div>
    <div class="navbar__right">
      <ul class="list-nav-item">
        <li class="item-nav item-help">Help</li>
        <li class="item-nav">
          <svg
            style="width: 25px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="comment-dots"
            class="svg-inline--fa fa-comment-dots fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            ></path>
          </svg>
        </li>
        <li class="item-nav">
          <svg
            aria-hidden="true"
            style="width: 25px"
            focusable="false"
            data-prefix="fas"
            data-icon="bell"
            class="svg-inline--fa fa-bell fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
            ></path>
          </svg>
        </li>
        <li class="item-nav account">
          <svg
            aria-hidden="true"
            style="width: 25px"
            focusable="false"
            data-prefix="fas"
            data-icon="user"
            class="svg-inline--fa fa-user fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
            ></path>
          </svg>
          Rischar Hendiciles
          <svg style="width: 15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-square-down" class="svg-inline--fa fa-caret-square-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z"></path></svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*  {
  font-family: 'Roboto', sans-serif;

}
a:hover {
  text-decoration: none!important;
}
ul {
  list-style: none;
}
svg {
  width: 17px!important;
  margin-right: 5px;
}
.navbar-container {
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  background: rgb(235, 229, 230);
  .navbar__left {
    display: flex;
    .brand {
      svg {
        color: #1e15f9;
      }
      .brandname {
        font-size: 24px;
        color: black;
      }
    }
  }
  .navbar__right {
    display: flex;
    .item-help {
      color: #0000;
      font-size: 14px!important;
    }
    .item-nav {
      border-right: 0.5px solid #dddada;
    }
    .account {
      svg:nth-child(2) {
        margin-left: 5px;
        font-size: 12px!important;
      }
    }
    svg {
      padding: 0px 12px;
    }
  }
  .list-nav-item {
    display: flex;
    .item-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      color: #8a8787;
      padding: 15px 8px;
      transition: 0.2s ease-in!important;
    }
  }
}
.item-nav:hover, .active{
  color: #a29dd2!important;
}
</style>
