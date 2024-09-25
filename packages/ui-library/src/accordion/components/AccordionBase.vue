<template>
  <div
    class="border-x border-t border-grayScale-200 rounded-[5px] overflow-hidden"
    @keydown.up.down="handleArrowNavigation($event, headerClass)"
  >
    <slot v-if="$slots.default" />
    <div v-else>
      <AccordionItem v-for="item in items" :item="item" :key="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, useId } from "vue";
import type { AccordionItem as AccordionItemType } from "@/types";
import { AccordionItem } from "@/accordion/components";
import { ACCORDION_CURRENT_OPEN_PANEL, ACCORDION_HEADER } from "@/keys";
import { useArrowNavigation } from "@/accordion/composables/useArrowNavigation";

const props = defineProps<{
  items?: AccordionItemType[];
  allowSingleOpen?: boolean;
}>();

const { handleArrowNavigation } = useArrowNavigation();
const headerClass = "accordion-header-" + useId();

const currentOpenPanel = ref("");
const updateCurrentOpenPanel = (value: string) => {
  if (!props.allowSingleOpen) return;
  currentOpenPanel.value = value;
};

provide(ACCORDION_HEADER, headerClass);
provide(ACCORDION_CURRENT_OPEN_PANEL, {
  currentOpenPanel,
  updateCurrentOpenPanel,
  allowSingleOpen: props.allowSingleOpen,
});
</script>

<style scoped></style>
