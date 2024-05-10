<template>
  <div class="my-5 mx-4">
    <div class="mb-8">
      <h2 class="mb-3">Accordion</h2>

      <div class="flex flex-wrap gap-[20px]">
        <div class="mb-3">
          <h3>Accordion basic</h3>
          <AccordionBasic />
        </div>

        <div class="mb-3">
          <h3>Accordion with multiple items open per time</h3>
          <AccordionMultiple />
        </div>

        <div class="mb-3">
          <h3>Accordion with one item open per time</h3>
          <AccordionSingle />
        </div>
      </div>
    </div>

    <div>
      <h2 class="mb-3">Alert</h2>
      <div class="flex flex-wrap gap-[20px]">
        <div>
          <h3>Alert basic</h3>
          <AlertBasic />
        </div>

        <div>
          <h3>Alert success</h3>
          <AlertSuccess />
        </div>

        <div>
          <h3>Alert error</h3>
          <AlertError />
        </div>

        <div>
          <h3>Alert warning</h3>
          <AlertWarning />
        </div>

        <div>
          <h3>Alert warning</h3>
          <AlertInfo />
        </div>

        <div>
          <h3>Alert always visible</h3>
          <AlertAlwaysVisible />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AccordionBasic,
  AccordionMultiple,
  AccordionSingle,
} from "@/components/accordion/story";

import {
  AlertBasic,
  AlertError,
  AlertSuccess,
  AlertWarning,
  AlertInfo,
  AlertAlwaysVisible,
} from "@/components/alert/story";

import { Alert } from "./components/alert";
</script>

<style scoped></style>
