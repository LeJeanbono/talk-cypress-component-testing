<script setup lang="ts">

import Slide from "../components/Slide.vue";
</script>

<template>
  <Slide>
    <template #title>
      Slot Time !
    </template>
    <template #content>
      <div class="text-3xl">
        <slot></slot>
      </div>
    </template>
  </Slide>
</template>