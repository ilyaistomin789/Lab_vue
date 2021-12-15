<template>
  <div class="footer">
    <div class="footer__container">
      <img class="container__content" src="@/assets/itechart-logo-white.png" alt="itechart-logo">

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TheFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  height: 67px;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer__container {
    width: 180px;
   .container__content{
     width: 100%;
     height: auto;
   }
  }

}
</style>
