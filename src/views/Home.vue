<template>
  <div class="home">
    <section class="hero" id="hero">
      <div class="container">
        <h2 class="sub-headline"><span class="first-letter">W</span>elcome</h2>
        <h1 class="headline">E-Contract</h1>
        <div class="headline-desc">
          <div class="separator">
            <div class="line line-left"></div>
            <div class="asterisk"><i class="fas fa-asterisk"></i></div>

            <div class="line line-right"></div>
          </div>
          <div class="single-animation">
            <h5>Ready to opened</h5>
            <a href="#" class="btn cta-btn slide-btn">Exlore</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero ends -->
    <section class="discover-our-story">
      <div class="container">
        <div class="restaurant-infor row">
          <div class="restaurant-desc col-lg-6 padding-right animate-left">
            <div class="global-headline">
              <h2 class="sub-headline">
                <span class="first-letter">D</span>iscover
              </h2>
              <h1 class="headline headline-dark">Our story</h1>
              <div class="asterisk"><i class="fas fa-asterisk"></i></div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              voluptates expedita accusantium quisquam officia obcaecati quidem
              placeat itaque? Veritatis saepe consequuntur at, officiis dolorum
              inventore esse tempore. In, nulla omnis.
            </p>
            <a href="" class="btn body-btn">About Us</a>
          </div>
          <div class="restaurant-infor-img col-lg-6 animate-right">
            <img src="../assets/images/item1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- discover-our-story ends -->
    <section class="tastefull-recipes between">
      <div class="container">
        <div class="global-headline">
          <div class="animate-top">
            <h2 class="sub-headline">
              <span class="first-letter">E</span> - contract
            </h2>
          </div>
          <div class="animate-bottom">
            <h1 class="headline">Faster create</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- tastefull-recipes ends -->
    <section class="discover-our-menu">
      <div class="container">
        <div class="restaurant-infor">
          <div class="img-group padding-right animate-left">
            <img src="../assets/images/item1.png" alt="" />
            <img src="../assets/images/item2.png" alt="" />
            <img src="../assets/images/item3.png" alt="" />
            <img src="../assets/images/item4.png" alt="" />
          </div>
          <div class="restaurant-desc animate-right">
            <div class="global-headline">
              <h2 class="sub-headline">
                <span class="first-letter">D</span>iscover
              </h2>
              <h1 class="headline headline-dark">Menu</h1>
              <div class="asterisk"><i class="fas fa-asterisk"></i></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque quae nulla maiores! Asperiores numquam saepe
                recusandae, porro voluptas amet fugiat dolore nihil impedit
                deleniti, fugit nam aliquam sunt architecto?
              </p>
              <a href="" class="btn body-btn">View full menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Discover our menu ends -->
    <section class="perfect-blend between">
      <div class="container">
        <div class="global-headline">
          <div class="animate-top">
            <h2 class="sub-headline">
              <span class="first-letter">T</span>he perfect
            </h2>
          </div>
          <div class="animate-bottom">
            <h1 class="headline">Blend</h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Perfect blend ends -->
    <section class="culiry-delight">
      <div class="container">
        <div class="restaurant-infor">
          <div class="restaurant-desc padding-left animate-left">
            <div class="global-headline">
              <h2 class="sub-headline">
                <span class="first-letter">C</span>uliry
              </h2>
              <h1 class="headline headline-dark">delight</h1>
              <div class="asterisk"><i class="fas fa-asterisk"></i></div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              voluptates expedita accusantium quisquam officia obcaecati quidem
              placeat itaque? Veritatis saepe consequuntur at, officiis dolorum
              inventore esse tempore. In, nulla omnis.
            </p>
            <a href="" class="btn body-btn">Make a reservation</a>
          </div>
          <div class="img-group">
            <img class="animate-top" src="../assets/images/item1.png" alt="" />
            <img
              class="animate-bottom"
              src="../assets/images/item2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
* {
  font-family: $body-font;
  font-size: 10px;
  color: $body-font-color;
  scroll-behavior: smooth;
}

section {
  padding: 3.9rem 0;
}

img {
  height: 100%;
  width: 100%;
}

p {
  font-size: 1.6rem;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  width: 100%;
  max-width: 122.5rem;
  margin: 0 auto;
  padding: 0 2.4rem;
}

body {
  overflow: hidden;
  overflow-y: scroll;
}

/* hero */

.hero {
  height: 100vh;
  width: 100%;
  background: url("../assets/images/bg.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
}

.sub-headline {
  font-size: 8.5rem;
  font-family: $secondary-font !important;
  color: $secondary-font-color !important;
  font-weight: 400;
  letter-spacing: 4px;
  margin-right: -4px;
  line-height: 0.4;
  opacity: 0;
  animation: fadeUp 0.5s forwards;
  animation-delay: 0.5s;
  .first-letter {
    font-family: $secondary-font !important;
    color: $secondary-font-color !important;
    font-size: 6.5rem;
    text-transform: uppercase;
  }
}

.headline {
  color: rgb(0, 0, 0);
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  margin-right: -0.5rem;
  font-family: $main-font;
  animation: scale 0.5s forwards;
  font-weight: 700;
}

.separator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.single-animation {
  animation: fadeDown 0.5s forwards;
  animation-delay: 1.5s;
  opacity: 0;
}

.line {
  max-width: 8.9rem;
  width: 100%;
  height: 0.25rem;
  background-color: #000;
  position: relative;
  animation: grow 2s forwards;
  opacity: 0;
  animation-delay: 0.9s;
}

.line-left::before,
.line-right::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 0.5rem solid transparent;
  animation: grow 2s forwards;
  opacity: 0;
  animation-delay: 1.2s;
}

.line-left::before {
  border-left-color: #000;
  left: 0;
}

.line-right::before {
  border-right-color: #000;
  right: 0;
}

.asterisk {
  font-size: 1.2rem;
  color: $secondary-font-color;
  margin: 0 1.6rem;
  animation: spin 0.5s forwards;
  animation-delay: 0.7s;
  opacity: 0;
}

.headline-desc h5 {
  color: #000;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-right: -3px;
  margin-bottom: 1.2rem;
}

.btn {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: -2px;
}

.cta-btn {
  overflow: hidden;
  font-size: 1.1rem;
  background-color: #fff;
  padding: 0.9rem 1.8rem;
  color: $body-font-color;
  border-radius: 0.4rem;
  transform: 0.5s;
  position: relative;
  z-index: 0;
}

.cta-btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: $secondary-font-color;
  z-index: -1;
  transition: 0.5s;
  border-radius: 0 20% 20% 0;
}

.cta-btn:hover:before {
  width: 150%;
}

.cta-btn:hover,
.cta-btn:focus {
  color: #fff;
  height: 100%;
}

/* discover-our-story */

.global-headline {
  text-align: center;
  margin-top: 3.9rem;
}

.global-headline .asterisk {
  color: $body-font-color;
  margin: 2.4rem 0;
}

.headline-dark {
  color: $main-font-color-dark;
  letter-spacing: 7px;
  margin-right: -7px;
}

.global-headline .sub-headline {
  letter-spacing: -0.1rem;
  line-height: 0.5;
}

.restaurant-infor {
  text-align: center;
  display: flex;
}

.restaurant-infor-img {
  margin-top: 2.9rem;
  img {
    width: 70% !important;
  }
}

.restaurant-desc {
  margin-bottom: 3rem;
}

.restaurant-desc p {
  line-height: 1.6rem;
  margin-bottom: 2.4rem;
  font-size: 1.2rem;
}

.body-btn {
  font-size: 1.5rem;
  color: $secondary-font-color;
  position: relative;
  transition: color 0.5s;
}

.body-btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: color 0.5s;
  width: 100%;
  height: 0.2rem;
  background-color: $secondary-font-color;
}

.body-btn:hover,
.body-btn:focus {
  color: $main-font-color-dark;
}

.body-btn:hover:before,
.body-btn:focus:before {
  background-color: $main-font-color-dark;
}

/* tastefull recepes */

.tastefull-recipes {
  background: url("../assets/images/bg2.jpg") center no-repeat;
  background-size: cover;
}

.between {
  min-height: 65vh;
  display: flex;
  align-items: center;
}

/* Discover our menu */

.img-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  img {
    width: 80%!important;
  }
}

.discover-our-story .restaurant-desc {
  padding-top: 3rem;
  margin-bottom: 0;
}

/* The perfect blend  */

.perfect-blend {
  background: url("../assets/images/item4.png") no-repeat;
  background-size: cover;
}
/* Animate */

@keyframes fadeUp {
  0% {
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
  }
}

@keyframes scale {
  0% {
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes grow {
  0% {
    width: 0;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    opacity: 1;
    transform: rotate(-360deg);
  }
}

@keyframes fadeDown {
  0% {
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
  }
}

@keyframes up {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-2rem);
  }
}
</style>
