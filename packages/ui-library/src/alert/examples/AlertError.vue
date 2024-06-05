<template>
  <div>
    <Alert variant="error" class="w-[400px]">
      <AlertHeader class="mb-3">
        <template #alertTitle>
          <p>Unable to upload file</p>
        </template>
        <template #alertCloseIcon>
          <button>&times;</button>
        </template>
      </AlertHeader>

      <AlertDescription>
        <p>Your browser is not supported</p>
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertHeader, AlertDescription } from "@/alert/components";
</script>

<style scoped></style>
