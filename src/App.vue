<script lang="ts" setup>
import AppLogo from './components/icons/AppLogo.vue'
</script>

<template>
  <app-logo />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <div class="cont"></div>
</template>

<style lang="scss" scoped>
.cont {
  width: 100px;
  height: 100px;
  background-color: aqua;

  @media (--phone-small) {
    height: 50px;
  }
}
</style>
