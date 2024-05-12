<template>
  <div>
    <Alert variant="info" class="w-[400px]">
      <AlertHeader class="mb-3">
        <template #alertTitle>
          <p>Your free trial ends in two days</p>
        </template>
      </AlertHeader>

      <AlertDescription>
        <p>You are eligible for a new loan</p>
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertHeader, AlertDescription } from "@/components/alert";
</script>

<style scoped></style>
