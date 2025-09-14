<script lang="ts" setup>
import AppLink from './AppLink.vue'
import LogoItem from './LogoItem.vue'
</script>

<template>
  <nav class="nav">
    <LogoItem />
    <div class="nav__links">
      <AppLink text="home" dropdown-links="/" />
      <AppLink text="about us" link="/" />
      <AppLink text="services" link="/" />
      <AppLink text="pages" link="/" />
      <AppLink text="blog" link="/" />
      <AppLink text="contact us" link="/" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &__links {
    display: flex;
    gap: 36px;
  }
}
</style>
