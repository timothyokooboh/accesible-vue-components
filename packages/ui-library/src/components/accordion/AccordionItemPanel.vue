<template>
  <Transition name="scale">
    <div
      :id="panelId"
      :aria-labelledby="headerId"
      class="text-grayScale-400 py-[13px] px-[28px]"
      v-if="!isCollapsed"
    >
      <p v-if="content" v-html="content" />

      <slot v-else />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ACCORDION_STATE } from "@/keys";
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
