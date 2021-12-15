<template>
  <div class="nav">
    <div class="nav__logo">{{ title }}</div>
    <div class="nav__links">
      <router-link
        to="/"
        custom
        v-slot="{  navigate, isActive }"
      >
        <a
          :class="[isActive ? 'nav__link active' : 'nav__link']"
          @click="navigate"
        >Home
        </a>
      </router-link>
      <router-link
        to="/products"
        custom
        v-slot="{ navigate, isActive }"
      >
        <a
          :class="[isActive ? 'nav__link active' : 'nav__link']"
          @click="navigate"
        >Products
        </a>
      </router-link>
      <router-link
        to="/about"
        custom
        v-slot="{ navigate, isActive }"
      >
        <a
          :class="[isActive ? 'nav__link active' : 'nav__link']"
          @click="navigate"
        >About
        </a>
      </router-link>
      <router-link
        to="/signin"
        custom
        v-slot="{ navigate, isActive }"
      >
        <a
          :class="[isActive ? 'nav__link active' : 'nav__link']"
          @click="navigate"
        >Sign In
        </a>
      </router-link>
      <router-link
        to="/signup"
        custom
        v-slot="{ navigate, isActive }"
      >
        <a
          :class="[isActive ? 'nav__link active' : 'nav__link']"
          @click="navigate"
        >Sign Up
        </a>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class TheNavbar extends Vue {
  readonly title: string = 'Games Market';
}
</script>

<style lang="scss" scoped>
.nav {
  height: 67px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: #121212;
  justify-content: space-between;

  .nav__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    width: 150px;
  }

  .nav__links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .nav__link:hover {
      cursor: pointer;
    }
    .nav__link:hover:after {
      display: block;
    }

    .nav__link {
      color: #ffffff;
      display: inline-block;
      position: relative;
      vertical-align: top;
      margin: 0 15px;
      justify-content: center;
      flex-direction: column;
      .active {
        color: #ffffff;
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 70px;
      }
    }

    .nav__link:after {
      content: "";
      margin-top: 20px;
      display: block;
      width:100%;
      height: 3px;
      background-color: red;
      opacity: 0;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;

      transition: opacity .1s linear;
    }
    .nav__link:hover:after, .nav__link.active:after{
      opacity: 1;
    }
  }

}
</style>
