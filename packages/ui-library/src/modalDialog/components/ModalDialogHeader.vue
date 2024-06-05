<template>
  <div class="flex items-center justify-between">
    <h3 class="font-bold" :id="titleId" data-testid="alert-dialog-title">
      <slot name="title">
        <span>Modal title</span>
      </slot>
    </h3>

    <slot name="closeButton">
      <button
        @click="onClose"
        class="flex items-center rounded-full p-1 hover:bg-grayScale-200 duration-150"
        data-testid="close-btn"
      >
        <span class="material-symbols-sharp">close</span>
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { MODAL_DIALOG_CTA, MODAL_DIALOG_TITLE_ID } from "@/keys";
import { inject } from "vue";

const { onClose } = inject(MODAL_DIALOG_CTA) as { onClose: () => void };
const titleId = inject(MODAL_DIALOG_TITLE_ID) as string;
</script>

<style scoped></style>
