<template>
  <div :class="$style.signinPageWrapper">
    <div :class="$style.signinPageForm">
      <h1>{{ $t('Log in') }}</h1>
      <div>
        <div :class="$style.signinButton" @click="handleSigninAsCompany">
          {{ $t('Sign in as a company') }}
          <img src="/img/google.svg" class="h-5" />
        </div>
        <div :class="$style.signinButton" @click="handleSigninAsEmployee">
          {{ $t('Sign in as an employee') }}
          <img src="/img/google.svg" class="h-5" />
        </div>
      </div>
    </div>
    <div :class="$style.signinPageInfo">
      <h2>{{ $t('Hey there!') }}</h2>
      <p>{{ $t("Let's sign that billion dollar contract!") }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SigninPage',
  layout: 'blank',
  head() {
    return {
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    };
  },
  methods: {
    async signinWithGoogle() {
      return await this.$gAuth.signIn();
    },
    async handleSigninAsCompany() {
      try {
        const googleUser = await this.signinWithGoogle();
        const googleAuthResponse = googleUser.getAuthResponse();
        this.$store.dispatch('auth/signinAsCompany', googleAuthResponse);
      } catch (error) {
        console.error(error);
      }
    },
    async handleSigninAsEmployee() {
      try {
        const googleUser = await this.signinWithGoogle();
        const googleAuthResponse = googleUser.getAuthResponse();
        this.$store.dispatch('auth/signinAsEmployee', googleAuthResponse);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style lang="scss" module>
.signinButton {
  @include flexCenter();
  @include flexBox($gap: 1rem);
  @include size(100%, 3.5rem);

  background-color: $--color-white;
  color: color(gray);
  font-weight: bold;
  border-radius: $rounded-lg;
  box-shadow: $shadow-card;
  margin-bottom: 1rem;
  cursor: pointer;
  user-select: none;
  transition-duration: $duration-base;

  &:hover {
    background-color: color(gray, 100);
  }

  &:active {
    background-color: color(gray, 200);
  }
}
.signinPageWrapper {
  width: 800px;
  box-shadow: $shadow-navbar;
  border-radius: $rounded-lg;
  overflow: hidden;

  @include centerAbsolute();
  @include flexBox();

  @media (max-width: 799.98px) {
    position: initial;
    transform: initial;
    width: 600px;
    margin: 2rem auto;
  }

  @media (max-width: 599.98px) {
    width: 300px;
  }

  .signinPageForm {
    flex: 1;
    text-align: center;
    padding: 1.5rem;

    h1 {
      font-size: $font-size-larger;
      font-weight: bold;
      margin: 1rem auto 2rem;
      color: color(secondary);
    }

    .signinButtonGoogle {
      box-shadow: $shadow-input;
      border-radius: $rounded-full;
      margin: 1rem auto;
      outline: none;

      @include size(50px);
      @include flexCenter();
    }
    .signinButtonSubmit {
      font-size: $font-size-base;
      line-height: $font-size-base;
      box-shadow: $shadow-input;
      border-radius: $rounded-full;
      transition-duration: $duration-base;
      padding: 0.75rem 2rem;
      color: white;
      background-color: color();
      outline: none;

      &:hover {
        background-color: color(primary, 600);
      }

      &:active {
        background-color: color(primary, 700);
      }
    }
    .signinLinkLoginInForm {
      display: none;
    }
    @media (max-width: 799.98px) {
      .signinLinkLoginInForm {
        display: block;
      }
    }
  }
  .signinPageInfo {
    flex: 1;
    text-align: center;
    padding: 1.5rem;
    background-image: url(/img/auth/bg.svg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;

    @include flexCenter();
    @include flexBox($direction: column);

    @media (max-width: 799.98px) {
      display: none;
    }

    h2 {
      font-size: $font-size-large;
      font-weight: bold;
      color: white;
    }

    p {
      font-size: $font-size-base;
      color: white;
    }

    .signinLinkSignup {
      margin-top: 1rem;
      font-size: $font-size-base;
      line-height: $font-size-base;
      font-weight: bold;
      box-shadow: $shadow-input;
      border-radius: $rounded-full;
      transition-duration: $duration-base;
      padding: 0.75rem 2rem;
      color: white;
      background-color: color(secondary);
      outline: none;

      &:hover {
        background-color: color(secondary, 600);
      }

      &:active {
        background-color: color(secondary, 700);
      }
    }
  }
}
</style>
