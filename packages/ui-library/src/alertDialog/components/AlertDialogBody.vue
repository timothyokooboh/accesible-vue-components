<template>
  <div class="mt-[30px]" :id="messageId" data-testid="alert-dialog-description">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ALERT_DIALOG_MESSAGE_ID } from "@/keys";
import { inject } from "vue";

const messageId = inject(ALERT_DIALOG_MESSAGE_ID) as string;
</script>

<style scoped></style>
