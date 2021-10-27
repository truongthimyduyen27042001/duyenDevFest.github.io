<template>
  <div class="navbar-container">
    <div class="navbar__left">
      <ul class="list-nav-item">
        <li class="brand">
          <a class="sidebar__logo d-flex align-items-center" href="index.html">
            <img
              class="sidebar__logo-icon"
              src="../assets/images/logotype.svg"
              alt="#"
              style="width: 44px"
            />
            <div class="sidebar__logo-text">E-Contract</div>
          </a>
        </li>
        <li
          class="item-nav"
          @click="currentPage = 'Home'"
          :class="currentPage == 'Home' ? 'active' : ''"
        >
          <router-link to="/">Home</router-link>
        </li>
        <li
          class="item-nav"
          @click="currentPage = 'Create'"
          :class="currentPage == 'Create' ? 'active' : ''"
        >
          <router-link to="/createContract">Create</router-link>
        </li>
        <li
          class="item-nav"
          @click="currentPage = 'Document'"
          :class="currentPage == 'Document' ? 'active' : ''"
        >
          <router-link to="/document">Document</router-link>
        </li>
      </ul>
    </div>
    <div class="navbar__right">
      <ul class="list-nav-item">
        <li class="item-nav item-help">Help</li>
        <li class="item-nav">
          <svg
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
        <li
          class="item-nav account account__login"
          onMouseEnter="{showPopover}"
          onMouseLeave="{hidePopover}"
          v-if="isLogin"
        >
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
            />
          </svg>
          <img
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/246363487_580700436528500_8455566915423897883_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=BfdZnkOoiIIAX_eJI5I&_nc_ht=scontent.fhan14-1.fna&oh=ca9d9a4db93b2c397344beb51660eb53&oe=6178B361"
            alt=""
            class="item-nav__img"
          />
          <p>Truong my duyen</p>
          <div class="text-center my-3 control__account">
            <b-button id="popover-target-1">
              <svg
                style="width: 17px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-square-down"
                class="svg-inline--fa fa-caret-square-down fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z"
                />
              </svg>
            </b-button>
            <b-popover
              target="popover-target-1"
              triggers="hover"
              placement="top"
            >
              <ul class="nav-menu">
                <li>
                  <a class="nav-menu__link">Tài khoản</a>
                </li>
                <li>
                  <a class="nav-menu__link"> Đăng xuất </a>
                </li>
              </ul>
            </b-popover>
          </div>
        </li>
        <li v-else class="item-nav account">
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
            @click="login()"
            >Login</GoogleLogin
          >
        </li>
      </ul>
    </div>
    <button @click="addUser">Truong duyennnn</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLogin: false,
      currentPage: "Home",
      users: [],
      userTemplte: {
        name: "Duyen",
        phoneNumber: "0799634057",
        address: "62 Ngo Si Lien",
        email: "truongthimyduyen27042001@gmail.com ",
        idCard: "id_cart",
        bankAccount: "0484811515115BANKACCOUNT",
        issued0n: "isSuscjsdbsd",
        idNo: "1",
      },
      newUsers: {
        email: "letuan1235@gmail.com",
        fullName: "Le Tuan",
        role: 1,
      },
    };
  },
  methods: {
    async login() {
      const googleUser = await this.$gAuth.signIn();
      console.log(googleUser);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
ul {
  list-style: none;
  margin-bottom: 0px;
}
svg {
  width: 17px !important;
  margin-right: 5px;
}
p {
  margin-bottom: 0px;
}
a {
  text-decoration: none;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar-container {
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  padding: 0px 20px;
  border-bottom: 1px solid #e5e9f2;
}

.navbar-container .navbar__left {
  display: flex;
}

.navbar-container .navbar__left .brand svg {
  color: #8a8787;
}
.brand a {
  text-decoration: none;
  color: #8a8787;
}
.brandname {
  font-size: 24px;
  color: black;
}
.navbar__right {
  display: flex;
}
.brandname .navbar__right {
  display: flex;
}
.brandname .item-help {
  color: #0000;
  font-size: 14px !important;
}
.item-nav__img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-left: 1.5rem;
}
.item-nav p {
  padding: 0 0.6rem;
}
.list-nav-item {
  display: flex;
}
.item-nav,
.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #8a8787;
  padding: 8px 5px;
  transition: 0.2s ease-in !important;
}
.item-nav {
  a {
    text-decoration: none;
    color: #8a8787;
    padding: 10px;
    border-radius: 5px;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.active {
  a {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }
}
.nav-menu {
  padding: 10px 0px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.nav-menu__link {
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
}
.control__account button {
  background: #fff;
  border: #fff;
  padding: 0px;
}
.control__account button:focus {
  box-shadow: none;
}
.control__account svg {
  color: #8a8787;
}
</style>
