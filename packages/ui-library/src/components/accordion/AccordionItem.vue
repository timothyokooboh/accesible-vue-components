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
import { ref, provide } from "vue";
import type { AccordionItem } from "@/types";
import { useId } from "@/helpers";

import {
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/components/accordion";
import { ACCORDION_STATE } from "@/keys";

defineProps<{
  item?: AccordionItem;
}>();

const isCollapsed = ref(true);
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
const headerId = useId("accordion-header");
const panelId = useId("accordion-panel");

provide(ACCORDION_STATE, {
  isCollapsed,
  toggleCollapse,
  headerId,
  panelId,
});
</script>

<style scoped></style>
