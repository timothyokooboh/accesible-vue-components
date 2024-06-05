import { onUnmounted, ref, type Ref } from "vue";
import { getFocusableElements } from "@/helpers";

interface useObserveDialogParams {
  dialogEl: Ref<HTMLDialogElement>;
  focusableElements: Ref<HTMLElement[]>;
  onClose: () => void;
}
export const useObserveDialog = (params: useObserveDialogParams) => {
  const { dialogEl, focusableElements, onClose } = params;

  const observer = ref<MutationObserver | null>(null);
  const initMutationObserver = () => {
    // Create a MutationObserver instance
    observer.value = new MutationObserver(handleMutation);

    // Start observing the dialog element for attribute changes
    observer.value.observe(dialogEl.value, {
      attributes: true,
      childList: true,
    });
  };

  const handleMutation = (mutations: any) => {
    focusableElements.value = getFocusableElements(dialogEl.value);

    for (const mutation of mutations) {
      if (mutation.attributeName === "open") {
        const isDialogOpen = dialogEl.value.open;
        if (!isDialogOpen) {
          onClose();
        }
      }
    }
  };

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });

  return {
    initMutationObserver,
  };
};
