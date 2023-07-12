<template>
  <SideBar />
<main class="main">
  <RouterView />
</main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'

</script>
