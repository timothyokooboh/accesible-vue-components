<template>
  <div>
    <AlertDialog
      :isOpen="isOpen"
      :onClose="() => (isOpen = false)"
      :on-confirm="onConfirm"
    >
      <AlertDialogHeader>
        <template #title>
          <p class="text-[18px]">Delete User</p>
        </template>
      </AlertDialogHeader>

      <AlertDialogBody>
        <p>Are you sure that you want to delete this user?</p>
      </AlertDialogBody>

      <AlertDialogFooter
        v-if="showInput"
        cancelText="Cancel"
        confirmText="Confirm"
      >
      </AlertDialogFooter>
    </AlertDialog>
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/alertDialog/components";
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
