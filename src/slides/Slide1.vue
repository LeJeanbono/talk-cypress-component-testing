<script setup lang="ts">
import Slide from "../components/Slide.vue";
</script>

<template>
  <slide>
    <template #content>
      <div class="flex flex-col h-full">
        <h1 class="mb-5 mt-10 text-center text-6xl">
          Cypress au coeur de vos composants front : testez mieux, codez plus vite !</h1>
        <div class="flex flex-row items-center text-4xl justify-center flex-1 ">
          <img src="../assets/moi.jpeg" class="relative rounded-full overflow-hidden mr-8 size-44" alt="moi">
          <div id="me">
            <div class="mb-3">Jean-Michel Leclercq</div>
            <div>Directeur Technique</div>
          </div>
        </div>
        <div class="flex flex-row justify-around items-center">
          <img src="../assets/codeurs-en-seine-logo.png" alt="ces" class="w-60"></img>
          <img src="../assets/fellows.png" alt="fellows" class="w-80"/>
        </div>
      </div>
    </template>
  </slide>
</template>