<script setup lang="ts">
  import Header from './components/header.vue'
  import Body from './components/body.vue'
</script>

<style>
.vue-select{
  margin: 10px !important;
}
.vue-dropdown, .vue-input input{
  color: #000000 !important;
}
  .vue-select-header{
      height: 40px !important;
      background: #ffffff !important;
      
    }
</style>
<template>
  <Header msg="Árvore Genealógica" />
  <Body />
</template>