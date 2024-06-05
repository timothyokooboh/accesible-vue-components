<template>
  <div class="border-t border-grayScale-200">
    <slot v-if="$slots.default" />

    <div v-else>
      <AccordionItemHeader :title="item.title" />
      <AccordionItemPanel :content="item.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, inject, type Ref } from "vue";
import type { AccordionItem } from "@/types";
import { useId } from "@/helpers";

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

const { currentOpenPanel, updateCurrentOpenPanel, single } = inject(
  ACCORDION_CURRENT_OPEN_PANEL,
) as {
  single: boolean;
  updateCurrentOpenPanel: (value: string) => void;
  currentOpenPanel: Ref<string>;
};

const panelId = useId("accordion-panel");
const isCollapsed = ref(true);
const toggleCollapse = () => {
  if (single) {
    if (currentOpenPanel.value === panelId) {
      updateCurrentOpenPanel("");
    } else {
      updateCurrentOpenPanel(panelId);
    }
  } else {
    isCollapsed.value = !isCollapsed.value;
  }
};

const headerId = useId("accordion-header");
provide(ACCORDION_STATE, {
  isCollapsed,
  toggleCollapse,
  headerId,
  panelId,
});
</script>

<style scoped></style>
