<template>
  <div>
    <Accordion :items="items" class="w-[400px]" />
  </div>
</template>

<script setup lang="ts">
import { Accordion } from "@/accordion/components";

const items = [
  {
    title: "Vue.js",
    content: "cool framework",
  },
  {
    title: "React.js",
    content: "Nice framework",
  },
];
</script>
