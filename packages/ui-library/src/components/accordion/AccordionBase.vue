<template>
  <div
    class="border-x border-b border-grayScale-200 rounded-[5px]"
    @keyup.up="handleArrowNavigation('up')"
    @keyup.down="handleArrowNavigation('down')"
  >
    <div v-if="items">
      <AccordionItem v-for="item in items" :item="item" :key="item.title" />
    </div>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import type { AccordionItem as AccordionItemType } from "@/types";
import AccordionItem from "./AccordionItem.vue";
import { useId } from "@/helpers";
import { ACCORDION_HEADER } from "@/keys";

defineProps<{
  items?: AccordionItemType[];
}>();

const headerClass = useId("accordion-header");
provide(ACCORDION_HEADER, headerClass);

const handleArrowNavigation = (direction: "up" | "down") => {
  const currentFocusedHeader = document.activeElement as HTMLButtonElement;
  const accordionHeaderList = Array.from(
    document.querySelectorAll(`.${headerClass}`),
  );
  const length = accordionHeaderList.length;
  const indexOfCurrentFocusedHeader = Array.from(accordionHeaderList).findIndex(
    (el) => el.id == currentFocusedHeader.id,
  );

  if (length <= 1) return;

  if (direction === "down") {
    if (indexOfCurrentFocusedHeader === length - 1) {
      (accordionHeaderList[0] as HTMLButtonElement).focus();
    } else {
      (
        accordionHeaderList[
          indexOfCurrentFocusedHeader + 1
        ] as HTMLButtonElement
      ).focus();
    }
  } else {
    if (indexOfCurrentFocusedHeader === 0) {
      (accordionHeaderList[length - 1] as HTMLButtonElement).focus();
    } else {
      (
        accordionHeaderList[
          indexOfCurrentFocusedHeader - 1
        ] as HTMLButtonElement
      ).focus();
    }
  }
};
</script>

<style scoped></style>
