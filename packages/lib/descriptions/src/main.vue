<template>
  <div
    class="hsc-descriptions"
    :style="{ width: isNaN(Number(width)) ? width : `${width}px` }"
    :class="{ 'is-border': border }"
  >
    <div class="hsc-descriptions__header">
      <div class="hsc-descriptions__title">{{ title }}</div>
      <slot name="extra"></slot>
    </div>
    <div
      class="hsc-descriptions__body"
      :style="{
        gridTemplateColumns: `repeat(${column}, auto)`,
        gridGap: gap,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hsc-descriptions",
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
    border: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    column: {
      type: Number,
      default: 1,
    },
    gap: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style lang="scss" scoped>
.is-border {
  border: 1px solid #ebeef5;
}
</style>
