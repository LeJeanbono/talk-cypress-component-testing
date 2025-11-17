<script setup lang="ts">

import Slide from "../components/Slide.vue";
</script>

<template>
  <Slide>
    <template #title>
      Ca marche que avec VueJS ?
    </template>
    <template #content>
      <div class="grid grid-cols-2 gap-6">
        <div class="flex justify-center items-center">
          <img src="../assets/vue.png" alt="vue"/>
        </div>
        <div class="flex justify-center items-center">
          <img src="../assets/angular.png" alt="angular"/>
        </div>
        <div class="flex justify-center items-center">
          <img src="../assets/react.png" alt="react"/>
        </div>
        <div class="flex justify-center items-center">
          <img src="../assets/svelte.png" alt="svelte"/>
        </div>
        <div class="col-span-2 flex justify-center items-center h-24 text-3xl text-center">
          Et demain peut-être le votre...?
          <br/>
          (Compatible Next.js 16 depuis hier soir)
        </div>
      </div>
    </template>
  </Slide>
</template>

<style scoped>
img {
  height: 250px;
  object-fit: cover;
}
</style>