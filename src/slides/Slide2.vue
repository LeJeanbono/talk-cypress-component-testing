<script setup lang="ts">

import Slide from "../components/Slide.vue";
</script>

<template>
  <Slide>
    <template #title>
      Vous avez dit Component Testing ?
    </template>
    <template #content>
      <div class="p-8">
        <ul class="list-disc">
          <li class="text-3xl">Test d'un composant Front : Affichage, Logique interne</li>

          <div class="flex justify-center">
            <img src="../assets/pyramide.png" alt="fellows" class="w-120"/>
          </div>

          <li class="text-3xl mb-5">En VueJS on utiliserait Vue Test Utils</li>
          <li class="text-3xl">Mais pas forcement évident car on ne voit pas le rendu de nos composants</li>
        </ul>
      </div>
      <div class="text-3xl mt-3">=> On veut en finir de coder un composant en rechargeant la page 20 fois !</div>
    </template>
  </Slide>
</template>