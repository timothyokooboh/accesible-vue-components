<template>
  <div class="my-5 mx-4">
    <div class="mb-16">
      <h3 class="mb-3">Accordion</h3>

      <div class="flex flex-wrap gap-[10px]">
        <Accordion
          class="w-[400px]"
          :items="[
            {
              title: 'Vue.js',
              content: `<div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                rerum, ratione magnam cumque tempora unde placeat minima harum
                suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
                optio totam! Sapiente, quisquam.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                rerum, ratione magnam cumque tempora unde placeat minima harum
                suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
                optio totam! Sapiente, quisquam.
              </div>
              `,
            },
            {
              title: 'React.js',
              content: `
                <h3 class='font-bold'>React.js</h3>
                <p>I like this framework</p>
              `,
            },
          ]"
        />

        <Accordion class="w-[400px]" isSingle>
          <AccordionItem>
            <AccordionItemHeader> svelte </AccordionItemHeader>
            <AccordionItemPanel>
              <div>
                <button>yello</button>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                rerum, ratione magnam cumque tempora unde placeat minima harum
                suscipit accusamus doloremque sit nulla nostrum quis
                necessitatibus, optio totam! Sapiente, quisquam.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                rerum, ratione magnam cumque tempora unde placeat minima harum
                suscipit accusamus doloremque sit nulla nostrum quis
                necessitatibus, optio totam! Sapiente, quisquam.
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeader> Angular </AccordionItemHeader>
            <AccordionItemPanel>This is Angular</AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    <h3 class="mb-3">Alert</h3>
    <div class="flex flex-wrap gap-[10px]">
      <Alert
        v-if="isAlertShown"
        class="w-[400px]"
        @close:alert="isAlertShown = false"
      >
        <AlertHeader class="mb-3"> </AlertHeader>

        <AlertDescription>
          <p>You have subscribed successfully</p>
        </AlertDescription>
      </Alert>

      <Alert
        class="w-[400px]"
        :data="{ title: 'Awesome', description: 'this is awesome' }"
      />

      <Alert variant="warning" class="w-[400px]">
        <AlertHeader class="mb-3" />

        <AlertDescription>
          <p>You have almost exhausted your data</p>
        </AlertDescription>
      </Alert>

      <Alert variant="error" class="w-[400px]">
        <AlertHeader class="mb-3" />

        <AlertDescription>
          <p>Your browser is not supported</p>
        </AlertDescription>
      </Alert>

      <Alert variant="info" class="w-[400px]">
        <AlertHeader class="mb-3" />

        <AlertDescription>
          <p>You are eligible for a new loan</p>
        </AlertDescription>
      </Alert>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/ui/accordion/components";

import { Alert, AlertHeader, AlertDescription } from "@/ui/alert";
import { ref } from "vue";

const isAlertShown = ref(true);
</script>

<style scoped></style>
