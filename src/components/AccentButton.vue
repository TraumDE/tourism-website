<script lang="ts" setup>
interface Props {
  tag?: 'button' | 'a'
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = defineProps<Props>()
</script>

<template>
  <component
    :is="props.tag"
    class="accent-button"
    v-bind="{
      href: props.href,
      type: props.type,
    }"
  >
    <slot name="icon-left"> </slot>
    <slot name="text"> </slot>
    <slot name="icon-right"> </slot>
  </component>
</template>

<style lang="scss" scoped>
.accent-button {
  background-color: var(--accent-color);
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: end;
  justify-content: start;
  border-radius: 50vw;
  padding-block: 19.5px;
  padding-inline: 40px;
  text-align: end;
  gap: 15px;
  line-height: 24px;
  font-family: 'Teko';
  font-weight: 700;
  font-size: 25px;
  width: 289px;
}
</style>
