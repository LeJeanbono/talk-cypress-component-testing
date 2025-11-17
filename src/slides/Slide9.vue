<script setup lang="ts">

import Slide from "../components/Slide.vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import {Line} from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const options = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
}

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

</script>

<template>
  <Slide>
    <template #title>
      Easy Peasy ?
    </template>
    <template #content>
      <div class="p-8">
        <Line :data="data" :options="options"/>
      </div>
      <div class="flex justify-center">
        <img src="../assets/hell.png" alt="fellows" class="w-80"/>
      </div>
      <div>
        <div class="text-3xl mt-5">Test par prise et comparaison de screenshot</div>
      </div>
    </template>
  </Slide>
</template>