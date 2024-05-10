<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/components/accordion";
</script>

<template>
  <div>
    <Accordion single class="w-[400px]">
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
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
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
</template>
