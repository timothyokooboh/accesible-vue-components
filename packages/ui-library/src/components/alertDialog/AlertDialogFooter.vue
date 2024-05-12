<template>
  <div class="flex justify-end mt-[47px]">
    <slot name="cancelButton">
      <button
        @click="onClose"
        class="mr-[20px] bg-grayScale-100 border border-grayScale-500 px-[10px] py-[4px] rounded-[3px]"
      >
        {{ cancelText }}
      </button>
    </slot>

    <slot name="confirmButton">
      <button
        @click="onConfirm"
        class="bg-danger-500 text-grayScale-100 px-[10px] py-[4px] rounded-[3px]"
      >
        {{ confirmText }}
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ALERT_DIALOG_CTA } from "@/keys";
import { inject } from "vue";

withDefaults(
  defineProps<{
    cancelText?: string;
    confirmText?: string;
  }>(),
  {
    cancelText: "No",
    confirmText: "Yes",
  },
);

const { onClose, onConfirm } = inject(ALERT_DIALOG_CTA) as {
  onClose: () => void;
  onConfirm: () => void;
};
</script>

<style scoped></style>
