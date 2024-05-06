<template>
  <div role="alert" :class="clsx(v, 'py-[10px] px-[15px] rounded-[3px]')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import type { AlertVariant } from "@/types";
import clsx from "clsx";
import { ALERT_VARIANT } from "@/keys";

const props = withDefaults(
  defineProps<{
    variant: AlertVariant;
    canClose: boolean;
  }>(),
  {
    variant: "success",
    canClose: true,
  },
);

const variantClasses = {
  success: "bg-success-100 border-l-[4px] border-l-[#A0C6CE]",
  warning: "bg-warning-100 border-l-[4px] border-l-[#D5BD8D]",
  error: "bg-danger-100 border-l-[4px] border-l-[#FD9E93]",
  info: "bg-info-100 border-l-[4px] border-l-[#87b3bc]",
};

const v = computed(() => {
  return variantClasses[props.variant];
});

provide(ALERT_VARIANT, props.variant);
</script>

<style scoped></style>
