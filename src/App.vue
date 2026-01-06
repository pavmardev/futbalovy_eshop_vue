<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  components: {
    TheNavigation,
    TheFooter
  }
}

</script>

<template>
    <TheNavigation />
    <RouterView />
    <TheFooter />
</template>

<style scoped>

</style>
