<script setup lang="ts">

import Slide from "../components/Slide.vue";
</script>

<template>
  <Slide>
    <template #title>
      Soyons accessibles !
    </template>
    <template #content>
      <div class="text-3xl">
        <div>Je suis clean en accessibilité</div>
        <br/>
        <br/>
        <a href="https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md">Liste des règles</a>
      </div>
    </template>
  </Slide>
</template>

<style scoped>
.yellow {
  color: yellow
}
</style>