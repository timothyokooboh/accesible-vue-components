<template>
  <div
    class="border-x border-b border-grayScale-200 rounded-[5px]"
    @keyup.up="handleArrowNavigation('up', headerClass)"
    @keyup.down="handleArrowNavigation('down', headerClass)"
  >
    <slot v-if="$slots.default" />

    <div v-else>
      <AccordionItem v-for="item in items" :item="item" :key="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import type { AccordionItem as AccordionItemType } from "@/types";
import { AccordionItem } from "@/components/accordion";
import { useId } from "@/helpers";
import { ACCORDION_CURRENT_OPEN_PANEL, ACCORDION_HEADER } from "@/keys";
import { useArrowNavigation } from "@/composables";

const props = defineProps<{
  items?: AccordionItemType[];
  single?: boolean;
}>();

const { handleArrowNavigation } = useArrowNavigation();

const headerClass = useId("accordion-header");
const currentOpenPanel = ref("");
const updateCurrentOpenPanel = (value: string) => {
  if (props.single) {
    currentOpenPanel.value = value;
  }
};

provide(ACCORDION_HEADER, headerClass);
provide(ACCORDION_CURRENT_OPEN_PANEL, {
  currentOpenPanel,
  updateCurrentOpenPanel,
  isSingle: props.single,
});
</script>

<style scoped></style>
