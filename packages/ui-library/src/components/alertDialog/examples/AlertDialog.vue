<template>
  <AlertDialog
    :isOpen="isOpen"
    :onClose="onClose"
    :onConfirm="onConfirm"
    class="backdrop:bg-red-500"
  >
    <AlertDialogHeader>
      <template #title>
        <p class="text-[18px]">Delete User</p>
      </template>
    </AlertDialogHeader>

    <AlertDialogBody>
      <p>Are you sure that you want to delete this user?</p>
    </AlertDialogBody>

    <AlertDialogFooter cancelText="Cancel" confirmText="Confirm">
    </AlertDialogFooter>
  </AlertDialog>

  <button @click="isOpen = true">Open modal</button>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/alertDialog";
import { ref } from "vue";

const isOpen = ref(false);
const onClose = () => (isOpen.value = false);
const onConfirm = () => {
  console.log("I confirm");
  onClose();
};
</script>

<style scoped>
/* ::backdrop {
  background-color: black;
} */
</style>
