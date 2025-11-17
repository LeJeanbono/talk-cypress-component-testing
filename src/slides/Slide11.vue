<script setup lang="ts">

import Slide from "../components/Slide.vue";

</script>

<template>
  <Slide>
    <template #title>
      🙏
    </template>
    <template #content>
      <div class="flex flex-col  h-full">
        <div class="text-3xl mt-5 h-24">N'ayez pas peur des tests, ils sont utiles !</div>
        <div class="flex justify-center">
          <img src="../assets/qrcode.png" alt="ofb" class="w-100"/>
        </div>
        <div class="flex flex-row justify-around items-center mt-30">
          <img src="../assets/fellows.png" alt="fellows" class="w-90"/>
        </div>
      </div>
    </template>
  </Slide>
</template>