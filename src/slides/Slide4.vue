<script setup lang="ts">

import Slide from "../components/Slide.vue";

defineProps({contenu: String})

</script>

<template>
  <Slide>
    <template #title>
      Simple, Basique
    </template>
    <template #content>
      <div class="text-2xl mb-3">{{ contenu}}</div>
    </template>
  </Slide>
</template>