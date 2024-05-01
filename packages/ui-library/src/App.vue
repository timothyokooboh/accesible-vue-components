<template>
  <div class="my-5 mx-4">
    <Accordion
      isSingle
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </div>`,
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

    <Accordion class="w-[400px] mt-5" isSingle>
      <AccordionItem>
        <AccordionItemHeader>
          svelte
          <template #toggleIcon:collapsed> K </template>
        </AccordionItemHeader>
        <AccordionItemPanel>
          <div>
            <button>yello</button>
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader>
          Angular
          <template #toggleIcon:collapsed> K </template>
        </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/components/accordion";
</script>

<style scoped></style>
