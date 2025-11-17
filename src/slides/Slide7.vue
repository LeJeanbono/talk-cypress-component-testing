<script setup lang="ts">

import Slide from "../components/Slide.vue";
import {onMounted, ref} from "vue";

const lines = ref<{ text: string }[]>()

onMounted(async () => {
  const response = await fetch('/api/lines')
  const json = await response.json()
  lines.value = json['lines']
})
</script>

<template>
  <Slide>
    <template #title>
      J'ai des calls API chef
    </template>
    <template #content>
      <div v-for="line in lines">
        <div class="text-3xl">{{ line.text }}</div>
      </div>
    </template>
  </Slide>
</template>