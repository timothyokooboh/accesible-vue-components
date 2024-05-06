<template>
  <h3>
    <button
      data-testid="accordion-header"
      :id="headerId"
      :aria-expanded="!isCollapsed"
      :aria-controls="panelId"
      :class="`w-full text-left flex justify-between items-center py-[13px] px-[28px] ${headerClass}`"
      @click="toggleCollapse"
    >
      <p v-if="title" v-html="title" />
      <slot v-else />

      <slot v-if="isCollapsed" name="toggleIcon:collapsed">
        <ChevronDownIcon v-if="isCollapsed" class="h-4" />
      </slot>
      <slot v-else name="toggleIcon:unCollapsed">
        <ChevronUpIcon class="h-4" />
      </slot>
    </button>
  </h3>
</template>

<script setup lang="ts">
import { inject, type Ref } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { ACCORDION_HEADER, ACCORDION_STATE } from "@/keys";

defineProps<{
  title?: string;
}>();

const { isCollapsed, toggleCollapse, panelId, headerId } = inject(
  ACCORDION_STATE,
) as {
  toggleCollapse: () => void;
  isCollapsed: Ref<boolean>;
  headerId: string;
  panelId: string;
};

const headerClass = inject(ACCORDION_HEADER);
</script>

<style scoped></style>
