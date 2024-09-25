<template>
  <h3>
    <button
      data-testid="accordion-header"
      :id="headerId"
      :aria-expanded="!isCollapsed"
      :aria-controls="panelId"
      :class="`w-full text-left flex justify-between items-center py-[13px] px-[28px] hover:bg-slate-50 ${headerClass}`"
      @click="toggleCollapse"
    >
      <div>
        <slot v-if="$slots.default" />
        <p v-else v-html="title" />
      </div>

      <ChevronUpIcon
        class="h-4 duration-300 transition-transform"
        :class="{ 'rotate-180': isCollapsed }"
      />
    </button>
  </h3>
</template>

<script setup lang="ts">
import { computed, inject, useAttrs, useId, type Ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
import { ACCORDION_HEADER, ACCORDION_STATE } from "@/keys";

defineProps<{
  title?: string;
}>();

const attrs = useAttrs();

const {
  isPanelCollapsed: isCollapsed,
  toggleCollapse,
  panelId,
  headerId,
} = inject(ACCORDION_STATE) as {
  isPanelCollapsed: Ref<boolean>;
  toggleCollapse: () => void;
  headerId: string;
  panelId: string;
};

const id = computed(
  () => (attrs.id as string) ?? "accordion-header-" + useId(),
);
const headerClass = inject(ACCORDION_HEADER);
</script>
