<script setup lang="ts">
import { Alert } from "@/components/alert";
</script>

<template>
  <div>
    <Alert
      :canHideAlert="false"
      class="w-[400px]"
      :data="{ description: 'this is awesome' }"
    />
  </div>
</template>

<style scoped></style>
