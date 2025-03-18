<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🗺️ Navigation Example - END</h1>

    <div class="mb-6 p-4 border border-green-300 rounded">
      <p>This is the completed navigation example:</p>
      <ul class="list-disc list-inside">
        <li>RouterLink to navigate between Home, About, and User Profile pages</li>
        <li>Dynamic routing for user profiles</li>
      </ul>
    </div>

    <!-- Navigation Links -->
    <nav class="flex space-x-4 mb-4">
      <RouterLink to="/navigation/home" class="text-blue-600 hover:underline"> Home </RouterLink>
      <RouterLink to="/navigation/about" class="text-blue-600 hover:underline"> About </RouterLink>
      <RouterLink :to="`/navigation/user/42`" class="text-blue-600 hover:underline">
        User Profile (ID: 42)
      </RouterLink>
    </nav>

    <!-- Route content -->
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
