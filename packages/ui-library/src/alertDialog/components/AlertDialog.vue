<template>
  <dialog
    id="dialog"
    ref="dialog"
    @keydown="handleFocusTrapping($event, focusableElements)"
    role="alertdialog"
    :aria-labelledby="titleId"
    :aria-describedby="messageId"
    data-testid="alert-dialog-root"
    class="max-w-[600px] w-[90%] rounded-[5px] py-[20px] px-[30px] backdrop:bg-[#5885AE] backdrop:opacity-[0.5]"
  >
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch, useId } from "vue";
import { handleFocusTrapping } from "@/helpers";
import { useObserveDialog } from "@/alertDialog/composables/useObserveDialog";

import {
  ALERT_DIALOG_CTA,
  ALERT_DIALOG_MESSAGE_ID,
  ALERT_DIALOG_TITLE_ID,
} from "@/keys";

const props = defineProps<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}>();

const dialog = ref();
const focusableElements = ref<HTMLElement[]>([]);
const titleId = "alert-dialog-title-" + useId();
const messageId = "alert-dialog-message-" + useId();

const { initMutationObserver } = useObserveDialog({
  dialogEl: dialog,
  focusableElements: focusableElements,
  onClose: props.onClose,
});

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

provide(ALERT_DIALOG_CTA, {
  onClose: props.onClose,
  onConfirm: props.onConfirm,
});
provide(ALERT_DIALOG_TITLE_ID, titleId);
provide(ALERT_DIALOG_MESSAGE_ID, messageId);

onMounted(() => {
  initMutationObserver();
});
</script>
