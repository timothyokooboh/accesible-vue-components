<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/accordion/components";
</script>

<template>
  <div>
    <Accordion class="w-[400px]">
      <AccordionItem>
        <AccordionItemHeader id="tom"> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
</template>
