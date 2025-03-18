<template>
  <div class="p-4 border rounded bg-white shadow">
    <h2 class="text-xl font-semibold mb-2">👤 User Profile</h2>
    <p class="text-gray-700">
      User ID: <span class="font-bold">{{ userId }}</span>
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>

<style scoped></style>
