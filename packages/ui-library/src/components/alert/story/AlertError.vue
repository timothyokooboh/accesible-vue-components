<template>
  <div>
    <Alert variant="error" class="w-[400px]">
      <AlertHeader class="mb-3">
        <template #alertTitle>
          <p>Unable to upload file</p>
        </template>
      </AlertHeader>

      <AlertDescription>
        <p>Your browser is not supported</p>
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertHeader, AlertDescription } from "@/components/alert";
</script>

<style scoped></style>
