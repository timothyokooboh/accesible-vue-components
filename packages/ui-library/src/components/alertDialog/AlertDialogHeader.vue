<template>
  <div class="flex items-center justify-between">
    <h3 class="font-bold" :id="titleId">
      <slot name="title">
        <span>Modal title</span>
      </slot>
    </h3>

    <slot name="closeButton">
      <button
        @click="onClose"
        class="flex items-center rounded-full p-1 hover:bg-grayScale-200 duration-150"
      >
        <span class="material-symbols-sharp">close</span>
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ALERT_DIALOG_CTA, ALERT_DIALOG_TITLE_ID } from "@/keys";
import { inject } from "vue";

const { onClose } = inject(ALERT_DIALOG_CTA) as { onClose: () => void };
const titleId = inject(ALERT_DIALOG_TITLE_ID) as string;
</script>

<style scoped></style>
