<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
   <header>
    <a>{{ msg }}</a>
  </header>
</template>

<style scoped>
header {
  min-height: 50px;
  min-width: 100%;
  background-color: var(--color-heading);
  text-align: center;
  padding: 12px;
}

a,
.green {
  text-decoration: none;
  color: #FFF;
  transition: 0.4s;
  font-size: 1.5rem;
  margin-top: 60px;
  
}

@media (hover: hover) {
  a:hover {
    color: hsla(195, 85%, 26%, 0.7);
  }
}
</style>
