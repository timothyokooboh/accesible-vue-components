<template>
  <div>
    <ModalDialog
      :isOpen="isOpen"
      :onClose="() => (isOpen = false)"
      :on-confirm="onConfirm"
    >
      <ModalDialogHeader>
        <template #title>
          <p class="text-[18px]">Welcome to Meta</p>
        </template>
      </ModalDialogHeader>

      <ModalDialogBody>
        <p>We are thrilled to have you join us.</p>
        <p>Kindly reach out to customer support if you need any help.</p>
      </ModalDialogBody>

      <ModalDialogFooter>
        <button class="bg-brand-100 text-brand-500 py-2 px-3 rounded">
          Close
        </button>
      </ModalDialogFooter>
    </ModalDialog>
  </div>

  <button
    @click.prevent="isOpen = true"
    data-testid="dialog-trigger"
    class="text-[14px]"
  >
    Open modal
  </button>
</template>

<script setup lang="ts">
import {
  ModalDialog,
  ModalDialogBody,
  ModalDialogHeader,
  ModalDialogFooter,
} from "@/modalDialog/components";
import { ref } from "vue";

const isOpen = ref(false);
const showInput = ref(false);

setTimeout(() => {
  showInput.value = true;
}, 3000);
const onClose = () => (isOpen.value = false);
const onConfirm = () => {
  onClose();
};
</script>

<style scoped>
/* ::backdrop {
  background-color: black;
} */
</style>
