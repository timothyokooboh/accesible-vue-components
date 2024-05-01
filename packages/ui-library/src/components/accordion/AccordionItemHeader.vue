<template>
  <h3>
    <button
      :id="headerId"
      :aria-expanded="!isCollapsed"
      :aria-controls="panelId"
      :class="`w-full text-left flex justify-between items-center py-[13px] px-[28px] ${headerClass}`"
      @click="toggleCollapse"
    >
      <div>
        <p v-if="title" v-html="title" />
        <slot v-else />
      </div>

      <ChevronDownIcon v-if="isCollapsed" class="h-4" />
      <ChevronUpIcon v-else class="h-4" />
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
