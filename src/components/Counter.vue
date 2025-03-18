<template>
  <div class="w-full">
    <p class="text-xl">
      You clicked <span class="font-semibold">{{ count }}</span> times
    </p>

    <div class="flex space-x-6">
      <button
        @click="increment"
        class="px-4 py-2 mr-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
      >
        Increment
      </button>

      <button
        @click="reset"
        class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-bold rounded"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const reset = () => {
  count.value = 0
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
