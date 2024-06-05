<template>
  <Transition name="scale">
    <div
      data-testid="accordion-panel"
      :id="panelId"
      :aria-labelledby="headerId"
      class="text-grayScale-400 py-[13px] px-[28px]"
      v-if="single ? panelId === currentOpenPanel : !isCollapsed"
    >
      <p v-if="content" v-html="content" />

      <slot v-else />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ACCORDION_CURRENT_OPEN_PANEL, ACCORDION_STATE } from "@/keys";
import { inject, type Ref } from "vue";

defineProps<{
  content?: string;
}>();

const { isCollapsed, panelId, headerId } = inject(ACCORDION_STATE) as {
  toggleCollapse: () => void;
  isCollapsed: Ref<boolean>;
  panelId: string;
  headerId: string;
};

const { currentOpenPanel, single } = inject(ACCORDION_CURRENT_OPEN_PANEL) as {
  currentOpenPanel: string;
  single: boolean;
};
</script>

<style lang="scss" scoped>
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease;
  transform-origin: top center;
  transform: scaleY(1);
}

.scale-enter-from,
.scale-leave-to {
  transform: scaleY(0);
}
</style>
