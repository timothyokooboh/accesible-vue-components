<template>
  <dialog
    id="dialog"
    ref="dialog"
    @keydown="handleKeyDownEvent($event)"
    role="alertdialog"
    :aria-labelledby="titleId"
    :aria-describedby="messageId"
    class="max-w-[600px] w-[90%] rounded-[5px] py-[20px] px-[30px] backdrop:bg-[#5885AE] backdrop:opacity-[0.5]"
  >
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { getFocusableElements, handleFocusTrapping, useId } from "@/helpers";
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
const focusableElements = ref<HTMLElement[] | undefined>(undefined);

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      dialog.value.showModal();
      const dialogEl = document.querySelector("#dialog") as HTMLElement;
      if (dialogEl) {
        focusableElements.value = getFocusableElements(dialogEl);
      }
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

// const getFocusableElements = () => {
//   const dialogEl = document.querySelector("#dialog");
//   const result = dialogEl?.querySelectorAll(
//     'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
//   );

//   if (result) {
//     const h = Array.from(result);
//     focusableElements.value = h as HTMLElement[];
//   }
// };

const handleKeyDownEvent = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    props.onClose();
  }

  if (
    event.key === "Tab" &&
    Array.isArray(focusableElements.value) &&
    focusableElements.value.length > 0
  ) {
    handleFocusTrapping(event, focusableElements.value);
  }
};
</script>

<style scoped></style>
