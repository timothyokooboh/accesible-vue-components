<template>
  <Breadcrumb>
    <BreadcrumbItem>
      <template #link>
        <a href="#home">Home</a>
      </template>
      <template #separator>
        <span>...</span>
      </template>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <template #link>
        <a href="#about">About</a>
      </template>
      <template #separator>
        <span>...</span>
      </template>
    </BreadcrumbItem>

    <BreadcrumbItem is-current-page :show-separator="false">
      <template #link>
        <span>Contact us</span>
      </template>
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from "@/breadcrumb/components";
</script>

<style scoped></style>
