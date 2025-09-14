<script lang="ts" setup>
import { RouterLink } from 'vue-router'

// interface DropdownLink {
//   text: string
//   link: string
// }

interface BaseProps {
  text: string
}

interface LinkProps extends BaseProps {
  link: string
  dropdownLinks?: never
}

interface DropdownProps extends BaseProps {
  dropdownLinks: string
  link?: never
}

type Props = LinkProps | DropdownProps

const props = defineProps<Props>()
</script>
<template>
  <RouterLink class="link" v-if="props.link" :to="props.link">
    {{ props.text }}
  </RouterLink>
  <button class="dropdown" v-if="props.dropdownLinks" aria-haspopup="listbox">
    {{ props.text }}
    <div class="dropdown__icon"></div>
  </button>
</template>

<style lang="scss" scoped>
.link {
  font-family: 'Rajdhani';
  font-weight: 500;
  font-size: 18px;
  color: var(--nav-link-color);
  text-transform: uppercase;
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

.dropdown {
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
