<script setup lang="ts">

import Slide from "../components/Slide.vue";
import {ref} from "vue";

const emit = defineEmits<{
  (e: 'emit', num: number): void
}>()

const emitNumber = ref<string>()

const onClick = () => {
  emit('emit', Number(emitNumber.value!))
}

</script>

<template>
  <Slide>
    <template #title>
      J'emit, tu emits, nous emitons
    </template>
    <template #content>
      <input name="emitNumber" v-model="emitNumber">
      <button
          class="py-2 px-6 rounded-xs self-start text-white bg-cy-blue duration-20 border-solid border-2 border-transparent hover:border-gray-700 hover:bg-cy-blue disabled:opacity-50 disabled:cursor-not-allowed"
          @click="onClick"
          :disabled="!emitNumber">
        Emit {{emitNumber}}
      </button>
    </template>
  </Slide>
</template>