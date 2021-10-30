<template>
  <footer>
    <div class="container">
      <div class="back-to-top">
        <a href="#hero"><i class="fas fa-chevron-up"></i></a>
      </div>
      <div class="footer-content">
        <div class="footer-content-about animate-up">
          <h4>About E-Contract</h4>
          <div class="asterisk"><i class="fas fa-asterisk"></i></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            odit officia, atque repudiandae nobis deserunt temporibus quaerat
            nisi deleniti libero. Velit ea culpa iste sed perferendis possimus
            nostrum distinctio! Praesentium!
          </p>
        </div>
        <div class="footer-content-divider animate-bottom">
          <div class="social-menu">
            <h4>Follow along</h4>
            <ul class="social-icons">
              <li>
                <a href=""><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-facebook-square"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-facebook-messenger"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
          <div class="newletter-container">
            <h4>New letter</h4>
            <form action="" class="newletter-form">
              <input
                type="text"
                class="newletter-input"
                placeholder="Your Email"
              />
              <button type="submit" class="newletter-btn">
                <i class="fas fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
footer {
  padding: 5rem 0;
  background-color: #121212;
  text-align: center;
  position: relative;
}
.container {
  max-width: 700px !important;
}
.back-to-top {
  width: 7rem;
  height: 7rem;
  background-color: #121212;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -40%);
}

.back-to-top i {
  color: #fff;
  display: block;
  font-size: 2rem;
  padding: 2rem;
  transform: translateY(-0.6rem);
  animation: up 2s infinite;
}

.footer-content {
  /* overflow: hidden; */
}

.footer-content h4 {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
}

.footer-content .asterisk {
  margin: 1.8rem 0;
}

.footer-content-about {
  margin-bottom: 5.4rem;
}

.footer-content-about p {
  line-height: 2;
}

.social-icons {
  display: flex;
  list-style: none;
  margin-bottom: 4.4rem;
  justify-content: center;
}

.social-icons i {
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  color: #fff;
  transition: color 0.5s;
}

.social-icons i:hover,
.social-icons i:focus {
  color: $secondary-font-color;
}

.newletter-form {
  width: 150%;
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
}

.newletter-input {
  width: 100%;
  max-width: 25rem;
  padding: 1rem;
  border-radius: 0.4rem;
}

.newletter-btn {
  color: $main-font-color-dark;
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 1.6rem;
  padding: 0.1rem 0.6rem;
  position: absolute;
  top: 50%;
  transform: translate(-80%, -50%);
  margin-left: 20.5rem;
}
.culiry-delight {
  .img-group {
    img {
      width: 100% !important;
    }
  }
}
.footer-content-divider {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .newletter-container {
    transform: translateX(-50%);
  }
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
