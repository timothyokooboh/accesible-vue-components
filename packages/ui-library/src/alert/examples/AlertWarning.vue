<template>
  <div>
    <Alert variant="warning" class="w-[400px]">
      <AlertHeader class="mb-3">
        <template #alertTitle>
          <p>Your API key is public</p>
        </template>
      </AlertHeader>

      <AlertDescription>
        <p>You have almost exhausted your data</p>
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertHeader, AlertDescription } from "@/alert/components";
</script>

<style scoped></style>
