<template>
  <div class="hsc-descriptions-item">
    <slot name="label"></slot>
    <span v-if="label" class="hsc-descriptions-item__cell">{{ label }}：</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hsc-descriptions-item",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
