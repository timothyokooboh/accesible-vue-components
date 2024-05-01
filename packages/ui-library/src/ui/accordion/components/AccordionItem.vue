<template>
  <div class="border-t border-grayScale-200">
    <div v-if="item">
      <AccordionItemHeader :title="item.title" />
      <AccordionItemPanel :content="item.content" />
    </div>

    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, inject, type Ref } from "vue";
import type { AccordionItem } from "@/types";
import { useId } from "@/helpers";

import {
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/ui/accordion/components";
import { ACCORDION_CURRENT_OPEN_PANEL, ACCORDION_STATE } from "@/keys";

defineProps<{
  item?: AccordionItem;
}>();

const id = useId();
const headerId = `accordion-header-${id}`;
const panelId = `accordion-panel-${id}`;

const { currentOpenPanel, updateCurrentOpenPanel, isSingle } = inject(
  ACCORDION_CURRENT_OPEN_PANEL,
) as {
  isSingle: boolean;
  updateCurrentOpenPanel: (value: string) => void;
  currentOpenPanel: Ref<string>;
};

const isCollapsed = ref(true);
const toggleCollapse = () => {
  if (isSingle) {
    if (currentOpenPanel.value === panelId) {
      updateCurrentOpenPanel("");
    } else {
      updateCurrentOpenPanel(panelId);
    }
  } else {
    isCollapsed.value = !isCollapsed.value;
  }
};

provide(ACCORDION_STATE, {
  isCollapsed,
  toggleCollapse,
  headerId,
  panelId,
});
</script>

<style scoped></style>
