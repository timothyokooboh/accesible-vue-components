<script setup lang="ts">
import { computed, inject } from "vue";
import clsx from "clsx";
import { ALERT_HIDDEN, ALERT_VARIANT } from "@/keys";
import type { AlertVariant } from "@/types";

const variant = inject(ALERT_VARIANT) as AlertVariant;
const { canHideAlert, updateCanHideAlert } = inject(ALERT_HIDDEN) as {
  canHideAlert: boolean;
  updateCanHideAlert: () => void;
};

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
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <slot name="alertIcon">
        <!-- DEFAULT ICON-->

        <span
          v-if="variant === 'success'"
          :class="
            clsx(variantClass, 'material-symbols-sharp font-medium mr-[7px]')
          "
          >check_circle</span
        >
        <span
          v-if="variant === 'error'"
          :class="
            clsx(variantClass, 'material-symbols-sharp font-medium mr-[7px]')
          "
          >chat_error</span
        >

        <span
          v-if="variant === 'warning'"
          :class="
            clsx(variantClass, 'material-symbols-sharp font-medium mr-[7px]')
          "
          >warning</span
        >

        <span
          v-if="variant === 'info'"
          :class="
            clsx(variantClass, 'material-symbols-sharp font-medium mr-[7px]')
          "
          >info</span
        >
      </slot>

      <div
        data-testid="alert-title"
        :class="clsx(variantClass, 'font-bold text-[18px]')"
      >
        <slot name="alertTitle">
          <!-- DEFAULT TITLE -->
          <p v-if="variant === 'success'">Success</p>
          <p v-else-if="variant === 'error'">Error</p>
          <p v-else-if="variant === 'warning'">Warning</p>
          <p v-else-if="variant === 'info'">Info</p>
        </slot>
      </div>
    </div>

    <button v-if="canHideAlert" @click="updateCanHideAlert">
      <slot name="alertCloseIcon">
        <!-- DEFAULT CLOSE ICON-->
        <span :class="clsx(variantClass, 'material-symbols-sharp font-medium')"
          >close</span
        >
      </slot>
    </button>
  </div>
</template>

<style scoped></style>
