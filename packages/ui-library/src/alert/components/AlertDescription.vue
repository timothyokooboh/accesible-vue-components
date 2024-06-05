<script setup lang="ts">
import { ALERT_VARIANT } from "@/keys";
import { computed, inject } from "vue";
import clsx from "clsx";
import type { AlertVariant } from "@/types";

const variant = inject(ALERT_VARIANT) as AlertVariant;
const variantClassStrategy = {
  success: "text-success-500",
  warning: "text-warning-500",
  error: "text-grayScale-500",
  info: "text-info-500",
};

const variantClass = computed(() => {
  return variantClassStrategy[variant];
});
</script>

<template>
  <div :class="clsx(variantClass, 'text-sm')">
    <slot />
  </div>
</template>

<style scoped></style>
