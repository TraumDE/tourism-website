<script lang="ts" setup>
import AppLink from './AppLink.vue'
import LogoItem from './LogoItem.vue'
import DropdownLinks from './DropdownLinks.vue'
import type { Link } from '@/types/link'

const templateLinks: Link[] = [
  {
    text: 'aboba',
    link: '/',
  },
  {
    text: 'Trinagle',
    link: '/',
  },
  {
    text: 'Adron',
    link: '/',
  },
]
</script>

<template>
  <nav class="nav">
    <LogoItem />
    <div class="nav__links">
      <DropdownLinks text="home" :links="templateLinks" />
      <AppLink text="about us" link="/" />
      <AppLink text="services" link="/" />
      <DropdownLinks text="pages" :links="templateLinks" />
      <DropdownLinks text="blog" :links="templateLinks" />
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
