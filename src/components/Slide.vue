<script setup lang="ts">

import Titre from "./Titre.vue";
</script>

<template>
  <div class="flex flex-col h-full">
    <titre v-if="$slots.title">
      <slot name="title"></slot>
    </titre>
    <div id="content" class="p-5 h-full">
      <slot name="content"></slot>
    </div>
  </div>
</template>
