<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import LogoIcon from './icons/LogoIcon.vue'
</script>

<template>
  <RouterLink to="/" class="logo">
    <LogoIcon class="logo__icon" />
    <span class="logo__text">Extreme Surfing</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  color: #000000;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 25.27px;
  font-weight: 400;
  font-family: 'Squada One';
  gap: 5px;
  text-decoration: none;
}
</style>
