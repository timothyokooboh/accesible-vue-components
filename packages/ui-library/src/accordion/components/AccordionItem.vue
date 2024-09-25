<template>
  <div class="border-b border-grayScale-200">
    <slot v-if="$slots.default" />

    <div v-else>
      <AccordionItemHeader :title="item.title" />
      <AccordionItemPanel :content="item.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, inject, useId, computed, type Ref } from "vue";
import type { AccordionItem } from "@/types";

import {
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/accordion/components";
import { ACCORDION_CURRENT_OPEN_PANEL, ACCORDION_STATE } from "@/keys";

withDefaults(
  defineProps<{
    item?: AccordionItem;
  }>(),
  {
    item: () => ({ title: "", content: "" }),
  },
);

const { currentOpenPanel, updateCurrentOpenPanel, allowSingleOpen } = inject(
  ACCORDION_CURRENT_OPEN_PANEL,
) as {
  allowSingleOpen: boolean;
  updateCurrentOpenPanel: (value: string) => void;
  currentOpenPanel: Ref<string>;
};

const headerId = "accordion-header-" + useId();
const panelId = "accordion-panel-" + useId();
const isToggleCollapsed = ref(true);
const isPanelCollapsed = computed(() => {
  return allowSingleOpen
    ? currentOpenPanel.value !== panelId
    : isToggleCollapsed.value;
});

const toggleCollapse = () => {
  if (allowSingleOpen) {
    currentOpenPanel.value === panelId
      ? updateCurrentOpenPanel("")
      : updateCurrentOpenPanel(panelId);
  } else {
    isToggleCollapsed.value = !isToggleCollapsed.value;
  }
};

provide(ACCORDION_STATE, {
  isPanelCollapsed: isPanelCollapsed,
  toggleCollapse,
  headerId,
  panelId,
});
</script>
