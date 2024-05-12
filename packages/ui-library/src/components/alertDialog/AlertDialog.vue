<template>
  <dialog
    ref="dialog"
    @keydown.esc="onClose"
    role="alertdialog"
    :aria-labelledby="titleId"
    :aria-describedby="messageId"
    class="max-w-[600px] w-[90%] rounded-[5px] py-[20px] px-[30px] backdrop:bg-[#5885AE] backdrop:opacity-[0.5]"
  >
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { useId } from "@/helpers";
import {
  ALERT_DIALOG_CTA,
  ALERT_DIALOG_MESSAGE_ID,
  ALERT_DIALOG_TITLE_ID,
} from "@/keys";
import { provide, ref, watch } from "vue";

const props = defineProps<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}>();

const dialog = ref();

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      dialog.value.showModal();
    } else {
      dialog.value.close();
    }
  },
);

const titleId = useId("alert-dialog-title");
const messageId = useId("alert-dialog-message");

provide(ALERT_DIALOG_CTA, {
  onClose: props.onClose,
  onConfirm: props.onConfirm,
});

provide(ALERT_DIALOG_TITLE_ID, titleId);
provide(ALERT_DIALOG_MESSAGE_ID, messageId);
</script>

<style scoped></style>
