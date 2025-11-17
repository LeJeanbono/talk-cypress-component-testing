<script setup lang="ts">

import Slide from "../components/Slide.vue";
</script>

<template>
  <Slide>
    <template #title>
      Here come...
    </template>
    <template #content>
      <div class="flex justify-center">
        <img src="../assets/cypress.png" alt="fellows" class="w-80"/>
      </div>
      <div class="p-8">
        <div class="text-3xl mb-9">Utilisation de toute la puissance de Cypress pour tester vos composants</div>
        <ul class="list-disc">
          <li class="text-3xl mb-7">DX de rédaction de tests (cy.) 😎</li>
          <li class="text-3xl mb-7">Mocks des appels XHR 🚀</li>
          <li class="text-3xl mb-7">Plugins de l'écosystème Cypress 🫶</li>
          <li class="text-3xl mb-7">Hot reload ❤️</li>
          <li class="text-3xl mb-7">Multi navigateur 🌎</li>
        </ul>
      </div>
    </template>
  </Slide>
</template>