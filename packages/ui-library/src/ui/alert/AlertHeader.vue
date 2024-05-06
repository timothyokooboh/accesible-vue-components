<script setup lang="ts">
import { computed, inject } from "vue";
import clsx from "clsx";
import { ALERT_VARIANT } from "@/keys";
import type { AlertVariant } from "@/types";

const variant = inject(ALERT_VARIANT) as AlertVariant;

const variantClasses = {
  success: "text-success-500",
  warning: "text-warning-500",
  error: "text-grayScale-500",
  info: "text-info-500",
};

const v = computed(() => {
  return variantClasses[variant];
});
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center]">
      <slot name="alertIcon">
        <!-- DEFAULT ICON-->

        <span
          v-if="variant === 'success'"
          :class="clsx(v, 'material-symbols-sharp font-bold mr-[7px]')"
          >check</span
        >
        <span
          v-if="variant === 'error'"
          :class="clsx(v, 'material-symbols-sharp font-bold mr-[7px]')"
          >chat_error</span
        >

        <span
          v-if="variant === 'warning'"
          :class="clsx(v, 'material-symbols-sharp font-bold mr-[7px]')"
          >warning</span
        >

        <span
          v-if="variant === 'info'"
          :class="clsx(v, 'material-symbols-sharp font-bold mr-[7px]')"
          >info</span
        >
      </slot>

      <slot name="alertTitle">
        <!-- DEFAULT TITLE -->
        <p
          v-if="variant === 'success'"
          :class="clsx(v, 'font-bold text-[18px]')"
        >
          Success
        </p>
        <p
          v-else-if="variant === 'error'"
          :class="clsx(v, 'font-bold text-[18px]')"
        >
          Error
        </p>
        <p
          v-else-if="variant === 'warning'"
          :class="clsx(v, 'font-bold text-[18px]')"
        >
          Warning
        </p>
        <p
          v-else-if="variant === 'info'"
          :class="clsx(v, 'font-bold text-[18px]')"
        >
          Info
        </p>
      </slot>
    </div>

    <button>
      <slot name="alertCloseIcon">
        <!-- DEFAULT CLOSE ICON-->
        <span :class="clsx(v, 'material-symbols-sharp font-bold')">close</span>
      </slot>
    </button>
  </div>
</template>

<style scoped></style>
