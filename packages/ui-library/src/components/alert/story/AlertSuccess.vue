<script setup lang="ts">
import { Alert, AlertHeader, AlertDescription } from "@/components/alert";
</script>

<template>
  <div>
    <Alert class="w-[400px]">
      <AlertHeader class="mb-3">
        <template #alertTitle>
          <p>Data uploaded successfully</p>
        </template>
      </AlertHeader>

      <AlertDescription>
        <p>You have subscribed successfully</p>
      </AlertDescription>
    </Alert>
  </div>
</template>

<style scoped></style>
