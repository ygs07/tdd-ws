<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">📌 API Example - END</h1>

    <!-- Description for context -->
    <div class="mb-6 p-4 border border-green-300 rounded">
      <p>This is the completed version of the API example.</p>
      <ul class="list-disc list-inside">
        <li>Fetches posts from a mock API</li>
        <li>Displays loading and error states</li>
        <li>Data renders when successful</li>
      </ul>
    </div>

    <!-- UI -->
    <div v-if="loading" class="text-blue-600">Loading posts...</div>

    <div v-else-if="error" class="text-red-600">Error: {{ error }}</div>

    <ul v-else class="space-x-5">
      <li
        v-for="post in posts"
        :key="post.id"
        class="p-4 mt-3 border border-gray-100 rounded shadow"
      >
        <h2 class="text-lg font-semibold">{{ post.title }}</h2>
        <p class="text-gray-700">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const loading = ref(false)
const error = ref(null)

const fetchPosts = async () => {
  loading.value = true
  error.value = null

  try {
    // Simulate a fetch call (replace with actual API if needed)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    posts.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
/* Optional styling */
</style>
