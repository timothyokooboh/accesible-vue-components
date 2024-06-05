<template>
  <div
    data-testid="breadcrumbitem"
    :class="clsx(`flex items-center gap-x-[8px] ${classes}`)"
  >
    <slot name="link" />

    <div data-testid="separator">
      <slot name="separator" v-if="showSeparator"> / </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { BREADCRUMB_ACTIVE_CLASS } from "@/constants";

const props = withDefaults(
  defineProps<{
    isCurrentPage?: boolean;
    showSeparator?: boolean;
  }>(),
  {
    showSeparator: true,
  },
);

const classes = computed(() => {
  if (props.isCurrentPage) {
    /** USE THE RAW CLASS FIRST THEN DURING UNIT TESTING EXPLAIN TO STUDENTS WHY A CONSTANT SHOULD BE USED */
    return BREADCRUMB_ACTIVE_CLASS;
  }

  return "text-brand-400";
});
</script>

<style scoped></style>
