<template>
  <div>
    <div
      data-testid="accordion-panel"
      :data-state="isPanelCollapsed ? 'collapsed' : 'expanded'"
      :id="panelId"
      :aria-labelledby="headerId"
      class="grid grid-rows-[0fr] opacity-0 text-grayScale-400 px-[28px] [&[data-state=expanded]]:grid-rows-1 [&[data-state=expanded]]:opacity-100 [&[data-state=expanded]]:py-[13px] duration-300"
    >
      <div class="overflow-hidden">
        <slot v-if="$slots.default" />
        <p v-else v-html="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ACCORDION_STATE } from "@/keys";
import { inject, type Ref } from "vue";

defineProps<{
  content?: string;
}>();

const {
  isPanelCollapsed: isPanelCollapsed,
  panelId,
  headerId,
} = inject(ACCORDION_STATE) as {
  toggleCollapse: () => void;
  isPanelCollapsed: Ref<boolean>;
  panelId: string;
  headerId: string;
};
</script>
