<template>
  <div
    role="alert"
    :class="clsx(variantClass, 'py-[10px] px-[15px] rounded-[3px]')"
  >
    <div v-if="data">
      <AlertHeader class="mb-3">
        <template v-if="data.title" #alertTitle>
          <p>{{ data.title }}</p>
        </template>
      </AlertHeader>

      <AlertDescription>
        <p>{{ data.description }}</p>
      </AlertDescription>
    </div>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import type { AlertVariant } from "@/types";
import clsx from "clsx";
import { ALERT_HIDDEN, ALERT_VARIANT } from "@/keys";
import { AlertDescription, AlertHeader } from "@/ui/alert";

const props = withDefaults(
  defineProps<{
    variant?: AlertVariant;
    canHideAlert?: boolean;
    data?: {
      title?: string;
      description: string;
    };
  }>(),
  {
    variant: "success",
    canHideAlert: true,
  },
);

const emit = defineEmits(["close:alert"]);

const variantClassStrategy = {
  success: "bg-success-100 border-l-[4px] border-l-[#A0C6CE]",
  warning: "bg-warning-100 border-l-[4px] border-l-[#D5BD8D]",
  error: "bg-danger-100 border-l-[4px] border-l-[#FD9E93]",
  info: "bg-info-100 border-l-[4px] border-l-[#87b3bc]",
};

const variantClass = computed(() => {
  return variantClassStrategy[props.variant];
});

provide(ALERT_VARIANT, props.variant);
provide(ALERT_HIDDEN, {
  canHideAlert: props.canHideAlert,
  updateCanHideAlert: () => emit("close:alert"),
});
</script>

<style scoped></style>
