<template>
  <div class="p-5">
    <div class="mb-5">Playground</div>
    <div>
      <Accordion
        class="w-[400px]"
        :items="[
          {
            title: 'Vue.js yo',
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
            `
          },
          {
            title: 'React.js',
            content: `
              <h3 class='font-bold'>React.js</h3>
              <p>I like this framework</p>
            `
          }
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accordion } from '@avc/ui-library'
</script>

<style scoped></style>
