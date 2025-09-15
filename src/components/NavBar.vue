<script lang="ts" setup>
import AppLink from './AppLink.vue'
import LogoItem from './LogoItem.vue'
import DropdownLinks from './DropdownLinks.vue'
import SearchIcon from './icons/SearchIcon.vue'
import AccentButton from './AccentButton.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import type { Link } from '@/types/link'

const templateLinks: Link[] = [
  {
    text: 'Extreme Surfing',
    link: '/extreme-surfing',
  },
  {
    text: 'Kayaking',
    link: '/kayaking',
  },
  {
    text: 'Scuba Diving',
    link: '/scuba-diving',
  },
]
</script>

<template>
  <nav class="nav">
    <LogoItem />
    <div class="nav__main">
      <div class="nav__links">
        <DropdownLinks text="home" :links="templateLinks" />
        <AppLink :is-route-link="true" text="about us" link="/" />
        <AppLink :is-route-link="true" text="services" link="/" />
        <DropdownLinks text="pages" :links="templateLinks" />
        <DropdownLinks text="blog" :links="templateLinks" />
        <AppLink :is-route-link="true" text="contact us" link="/" />
      </div>
      <div class="nav__search">
        <SearchIcon class="nav__search-icon" />
      </div>
      <AccentButton class="nav__call" tag="a" href="tel:+0123456789">
        <template #text> +0123456789 </template>
        <template #icon-left> <PhoneIcon /> </template>
      </AccentButton>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  padding-block: 17.5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &__main {
    display: flex;
    align-items: center;
  }

  &__links {
    display: flex;
    gap: 36px;
  }

  &__search {
    margin-left: 23px;
    padding-left: 28px;
    border-left: 1px solid #bed2df;
    cursor: pointer;
  }

  &__call {
    margin-left: 58px;
  }
}
</style>
