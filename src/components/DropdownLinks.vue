<script lang="ts" setup>
import type { Link } from '@/types/link'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface Props {
  text: string
  links: Link[]
}

const elementRef = ref<HTMLElement | null>(null)
const isAvtive = ref<boolean>(false)

const route = useRoute()

const handleDropdownButton = (): void => {
  isAvtive.value = !isAvtive.value
}

const handleOutsideClick = (event: MouseEvent): void => {
  if (elementRef.value && !elementRef.value.contains(event.target as Node)) isAvtive.value = false
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const props = defineProps<Props>()
</script>

<template>
  <div ref="elementRef" class="dropdown">
    <button
      @click="handleDropdownButton"
      :class="{ 'dropdown__button--active': isAvtive }"
      class="dropdown__button"
      aria-haspopup="true"
      :aria-expanded="isAvtive"
      :aria-controls="props.text + '-menu'"
    >
      {{ props.text }}
      <div class="dropdown__icon"></div>
    </button>
    <ul v-show="isAvtive" class="dropdown__menu" :id="props.text + '-menu'" role="menu">
      <li role="menuitem" class="dropdown__item" v-for="link in props.links" :key="link.link">
        <RouterLink
          :class="{ 'dropdown__link--active': route.path === link.link }"
          class="dropdown__link"
          :to="link.link"
        >
          {{ link.text }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  $b: #{&};
  $button: #{#{$b}__button};

  &__button {
    color: var(--nav-link-color);
    font-family: 'Rajdhani';
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    gap: 5px;
    text-transform: uppercase;

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

  &__icon {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--nav-link-color);

    #{$button}:active & {
      border-top: 6px solid var(--accent-color);
    }

    #{$button}--active & {
      border-top: 6px solid var(--accent-color);
    }
  }

  &__menu {
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 12px 97px 12px rgba(0, 0, 0, 0.15);
    width: 212px;
  }

  &__link {
    $b: #{&};

    color: var(--nav-link-color);
    font-family: 'Rajdhani';
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    padding-block: 10px;
    padding-left: 20px;
    width: 100%;
    height: 100%;

    &--active {
      background-color: var(--accent-color);
      color: #ffffff;

      &:hover {
        background-color: var(--accent-color) !important;
      }
    }

    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
