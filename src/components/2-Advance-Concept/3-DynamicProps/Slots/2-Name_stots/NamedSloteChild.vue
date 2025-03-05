<template>
    <slot name="header"></slot>
    <div class=" container my-3 bg-dark">
        <h1>Learn vue with ETEC CETER</h1>
    </div>
    <slot name="footer"></slot>
</template>

<script setup>

</script>

<style scoped>
  .container {
    height: 700px;
  }
</style>