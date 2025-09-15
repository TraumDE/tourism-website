<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { Link } from '@/types/link'

interface Props extends Link {
  isRouteLink: boolean
}

const props = defineProps<Props>()
</script>
<template>
  <RouterLink v-if="props.isRouteLink" class="link" :to="props.link">
    {{ props.text }}
  </RouterLink>
  <a v-if="!props.isRouteLink" class="link" :href="props.link">
    {{ props.text }}
  </a>
</template>

<style lang="scss" scoped>
.link {
  font-family: 'Rajdhani';
  font-weight: 500;
  font-size: 18px;
  color: var(--nav-link-color);
  text-transform: uppercase;
  text-wrap: nowrap;
  text-decoration: none;

  &--active {
    color: var(--accent-color);
  }

  &:active {
    color: var(--accent-color);
  }

  &:hover {
    text-decoration: underline;
  }
}

.dropdown__button {
  $b: #{&};

  color: var(--nav-link-color);

  font-family: 'Rajdhani';
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  gap: 5px;
  text-transform: uppercase;

  &:active {
    color: var(--accent-color);
  }

  &:hover {
    text-decoration: underline;
  }

  &__icon {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--nav-link-color);

    #{$b}:active & {
      border-top: 6px solid var(--accent-color);
    }
  }
}
</style>
