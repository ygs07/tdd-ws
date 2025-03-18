<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🧮 Counter Example - END</h1>

    <!-- Completed version explanation -->
    <div class="mb-6 p-4 border border-green-300 rounded">
      <p>This is the completed counter example.</p>
      <ul class="list-disc list-inside">
        <li>Simple reactive counter</li>
        <li>Increment and reset functions</li>
      </ul>
    </div>

    <p class="text-lg mb-4">
      You clicked <span class="font-semibold">{{ count }}</span> times.
    </p>

    <div class="flex space-x-4">
      <button
        @click="increment"
        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
      >
        Increment
      </button>

      <button @click="reset" class="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-black rounded">
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

<style scoped></style>
